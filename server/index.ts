import * as express from "express";
import * as cors from "cors";
import * as path from "path";
import { rtdb, firestore } from "./firestore";
import { nanoid } from "nanoid";

const port = process.env.PORT || 3000;
const playersCollection = firestore.collection("players");
const gameRoomsCollection = firestore.collection("gamerooms");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));
app.use(express.urlencoded({ extended: true }));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.post("/signup", async (req, res) => {
  // Este endopoint nos habilita un nuevo usuario en firestore. Y nos retorna su id
  const { email, nombre } = req.body;

  const usColl = await playersCollection.where("email", "==", email).get();

  if (usColl.empty) {
    const newUserRef = await playersCollection.add({
      email,
      nombre,
    });
    res.json({
      id: newUserRef.id,
      new: true,
    });
  } else {
    res.status(400).json({
      message: "user already exists.",
    });
  }
});

app.post("/authorize", async (req, res) => {
  //este nos da nuestro id de firestore siempre y cuando alguno de los usuario tenga nuestro email

  const { email } = req.body;

  const searchRes = await playersCollection.where("email", "==", email).get();

  if (searchRes.empty) {
    res.status(405).json({
      message: "user not found.",
    });
  } else {
    res.json({
      id: searchRes.docs[0].id,
    });
  }
});

app.patch("/player-guest", async (req, res) => {
  const { nombre, rtdbGameRoomId } = req.body;
  const gameRoomRef = rtdb.ref(
    `gamerooms/${rtdbGameRoomId}/currentGame/playerTwo`
  );
  await gameRoomRef.update({ nombre });

  res.json({
    message: "nombre actualizado",
    nombre: nombre,
  });
});

app.post("/game-rooms", async (req, res) => {
  const { userId, nombre } = req.body;

  const document = await playersCollection.doc(userId.toString()).get();

  if (document.exists) {
    const gameRoomRef = rtdb.ref("gamerooms/" + nanoid());
    await gameRoomRef.set({
      creator: userId,
      currentGame: {
        replay: false,
        playerOne: {
          nombre: nombre,
          choice: "none",
          start: false,
          creator: true,
          score: 0,
        },
        playerTwo: {
          nombre: "playerTwo",
          choice: "none",
          start: false,
          creator: false,
          score: 0,
        },
      },
    });
    const longGameRoomId = gameRoomRef.key;
    const shortGameRoomId = 1000 + Math.floor(Math.random() * 999);

    await gameRoomsCollection.doc(shortGameRoomId.toString()).set({
      rtdbGameRoomId: longGameRoomId,
      creator: userId,
      friendlyId: shortGameRoomId.toString(),
      score: { playerOne: 0, playerTwo: 0 },
    });
    res.json({
      friendlyId: shortGameRoomId.toString(),
      longGameRoomId: longGameRoomId.toString(),
    });
  } else {
    res.status(401).json({
      message: "no existis",
    });
  }
});

app.get("/game-rooms/:roomId", async (req, res) => {
  const { userId } = req.query;
  const { roomId } = req.params;

  const document = await playersCollection.doc(userId.toString()).get();

  if (document.exists) {
    const snap = await gameRoomsCollection.doc(roomId.toString()).get();
    const data = snap.data();
    res.json(data.rtdbGameRoomId);
  } else {
    res.status(401).json({
      message: "no existis",
    });
  }
});

app.patch("/start", async (req, res) => {
  //en player recibe "playerOne" o "playerTwo" segun el caso
  const { player, rtdbRoomId } = req.body;

  const gameRoomRef = rtdb.ref(`gamerooms/${rtdbRoomId}/currentGame/${player}`);
  await gameRoomRef.update({ start: true });

  res.json({ message: `${player} is ready` });
});

app.patch("/choice", async (req, res) => {
  //en player recibe "playerOne" o "playerTwo" segun el caso
  const { player, rtdbRoomId, choice } = req.body;

  const gameRoomRef = rtdb.ref(`gamerooms/${rtdbRoomId}/currentGame/${player}`);
  await gameRoomRef.update({ choice: choice });

  res.json({ message: `${player} eligio: ${choice}` });
});

app.get("/choice", async (req, res) => {
  const { player, rtdbRoomId } = req.body;

  const playerChoiceRef = rtdb.ref(
    `gamerooms/${rtdbRoomId}/currentGame/${player}`
  );
  const response = await playerChoiceRef.get();
  const data = response.val().choice;
  res.json(data);
});

app.patch("/replay", async (req, res) => {
  const { rtdbRoomId } = req.body;

  const playerOneReseting = rtdb.ref(
    `gamerooms/${rtdbRoomId}/currentGame/playerOne`
  );
  const playerTwoReseting = rtdb.ref(
    `gamerooms/${rtdbRoomId}/currentGame/playerTwo`
  );
  const replayRef = rtdb.ref(`gamerooms/${rtdbRoomId}/currentGame`);

  await playerOneReseting.update({
    choice: "none",
    start: false,
  });
  await playerTwoReseting.update({
    choice: "none",
    start: false,
  });
  await replayRef.update({ replay: true });

  res.json({ message: "players ready para volver a jugar" });
});

// app.patch("/clear-replay", async (req, res) => {
//   const { rtdbRoomId } = req.body;
//   const cleaningreplayRef = rtdb.ref(`gamerooms/${rtdbRoomId}/currentGame`);
//   await cleaningreplayRef.update({ replay: false });
//   res.json({
//     message: "Replay back to false",
//   });
// });

// app.patch("/last-score/:roomId", async (req, res) => {
//   const { roomId } = req.params;
//   const { lastScore } = req.body;
//   const score = {
//     score: { playerOne: lastScore.one, playerTwo: lastScore.two },
//   };
//   await gameRoomsCollection.doc(roomId.toString()).update(score);
//   res.json({
//     message: "score actualizado",
//   });
// });

// app.get("/last-score/:roomId", async (req, res) => {
//   const { roomId } = req.params;
//   const gameRoomRef = await gameRoomsCollection.doc(roomId.toString()).get();
//   const data = gameRoomRef.data();
//   res.json({
//     score: data.score,
//   });
// });

app.patch("/grow-score", async (req, res) => {
  try {
    const { player, rtdbRoomId, score } = req.body;
    const ref = rtdb.ref(`gamerooms/${rtdbRoomId}/currentGame/${player}`);
    await ref.update({ score: score });
    res.json({
      message: "aumentado",
    });
  } catch (error) {
    console.error(error);
  }
});

//Sirve la carpeta dist creada por parcel

//Sirve el index.html si el resto de los endpoints no estan en uso
app.get("*", (req, res) => {
  res.send(__dirname);
}),
  app.listen(port, () => {
    console.log("Iniciado en el puerto " + port);
  });
