import * as express from "express";
import * as cors from "cors";
import { rtdb, firestore } from "./firestore";
import { nanoid } from "nanoid";

const port = process.env.PORT || 3098;
const playersCollection = firestore.collection("players");
const gameRoomsCollection = firestore.collection("gamerooms");

const app = express();

app.use(cors());
app.use(express.json());

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

app.post("/auth", async (req, res) => {
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

// app.post("/player", (req, res) => {
//   const { nombre } = req.body;

//   playersCollection.add({ nombre }).then((newPlayerRef) => {
//     playersCollection.doc(newPlayerRef.id).update({
//       id: newPlayerRef.id,
//     });

//     res.json({
//       nombre,
//       id: newPlayerRef.id,
//       new: true,
//     });
//   });
// });

app.post("/player-guest", async (req, res) => {
  const { nombre, rtdbGameRoomId } = req.body;
  const gameRoomRef = rtdb.ref(
    `gamerooms/${rtdbGameRoomId}/currentGame/playerTwo`
  );
  gameRoomRef.update({ nombre, online: true });

  res.json({
    message: "nombre actualizado",
  });
});

app.post("/game-rooms", async (req, res) => {
  const { userId, nombre } = req.body;

  const document = await playersCollection.doc(userId.toString()).get();

  if (document.exists) {
    const gameRoomRef = rtdb.ref("gamerooms/" + nanoid());

    gameRoomRef.set({
      creator: userId,
      replay: false,
      currentGame: {
        playerOne: {
          nombre: nombre,
          choice: "none",
          start: false,
          online: true,
          creator: true,
          score: 0,
        },
        playerTwo: {
          nombre: "playerTwo",
          choice: "none",
          start: false,
          online: false,
          creator: false,
          score: 0,
        },
      },
    });

    const longGameRoomId = gameRoomRef.key;
    const shortGameRoomId = 1000 + Math.floor(Math.random() * 999);

    gameRoomsCollection.doc(shortGameRoomId.toString()).set({
      rtdbGameRoomId: longGameRoomId,
      creator: userId,
      friendlyId: shortGameRoomId.toString(),
      score: { local: 0, guest: 0 },
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

// app.post("/online", (req, res) => {
//   const { player, rtdbRoomId } = req.body;
//   if (player == "local") {
//     const gameRoomRef = rtdb.ref(
//       `gamerooms/${rtdbRoomId}/currentGame/playerOne`
//     );
//     gameRoomRef
//       .update({
//         online: true,
//       })
//       .then(() => {
//         res.json({ message: "player One is online" });
//       });
//   } else if (player == "guest") {
//     const gameRoomRef = rtdb.ref(
//       `gamerooms/${rtdbRoomId}/currentGame/playerTwo`
//     );
//     gameRoomRef
//       .update({
//         online: true,
//       })
//       .then(() => {
//         res.json({ message: "player Two is online" });
//       });
//   }
// });

app.post("/start", (req, res) => {
  const { player, rtdbRoomId } = req.body;
  if (player == "local") {
    const gameRoomRef = rtdb.ref(
      `gamerooms/${rtdbRoomId}/currentGame/playerOne`
    );
    gameRoomRef
      .update({
        start: true,
      })
      .then(() => {
        res.json({ message: "player One is ready" });
      });
  } else if (player == "guest") {
    const gameRoomRef = rtdb.ref(
      `gamerooms/${rtdbRoomId}/currentGame/playerTwo`
    );
    gameRoomRef
      .update({
        start: true,
      })
      .then(() => {
        res.json({ message: "player Two is ready" });
      });
  }
});

app.post("/unstart", (req, res) => {
  const { player, rtdbRoomId } = req.body;
  if (player == "local") {
    const gameRoomRef = rtdb.ref(
      `gamerooms/${rtdbRoomId}/currentGame/playerOne`
    );
    gameRoomRef
      .update({
        start: false,
      })
      .then(() => {
        res.json({ message: "player One is ready for an other game" });
      });
  } else if (player == "guest") {
    const gameRoomRef = rtdb.ref(
      `gamerooms/${rtdbRoomId}/currentGame/playerTwo`
    );
    gameRoomRef
      .update({
        start: false,
      })
      .then(() => {
        res.json({ message: "player Two is ready for an other game" });
      });
  }
});

app.post("/choice", (req, res) => {
  const { localOrGuest, rtdbRoomId, choice } = req.body;
  if (localOrGuest == "local") {
    const gameRoomRef = rtdb.ref(
      `gamerooms/${rtdbRoomId}/currentGame/playerOne`
    );
    gameRoomRef
      .update({
        choice: choice,
      })
      .then(() => {
        res.json({ message: "player One eligió " + choice });
      });
  } else if (localOrGuest == "guest") {
    const gameRoomRef = rtdb.ref(
      `gamerooms/${rtdbRoomId}/currentGame/playerTwo`
    );
    gameRoomRef
      .update({
        choice: choice,
      })
      .then(() => {
        res.json({ message: "player Two eligió " + choice });
      });
  }
});

app.post("/replay", (req, res) => {
  const { rtdbRoomId } = req.body;
  const gameRoomRef = rtdb.ref(`gamerooms/${rtdbRoomId}/`);
  gameRoomRef
    .update({
      replay: true,
    })
    .then(() => {
      res.json({ message: "player wants to play again" });
    });
});

app.get("/choice", (req, res) => {
  let { localOrGuest, rtdbRoomId } = req.body;
  if (localOrGuest == "local") {
    const playerChoiceRef = rtdb.ref(
      `gamerooms/${rtdbRoomId}/currentGame/playerOne`
    );
    playerChoiceRef.get().then((data) => {
      const response = data.val();
      res.json(response.choice);
    });
  } else if ((localOrGuest = "guest")) {
    const playerChoiceRef = rtdb.ref(
      `gamerooms/${rtdbRoomId}/currentGame/playerTwo`
    );
    playerChoiceRef.get().then((data) => {
      const response = data.val();
      res.json(response.choice);
    });
  }
});

//Sirve la carpeta dist creada por parcel
app.use(express.static("dist"));

//Sirve el index.html si el resto de los endpoints no estan en uso
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port, () => {
  console.log("Iniciado en el puerto " + port);
});
