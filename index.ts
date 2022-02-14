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

app.post("/player", (req, res) => {
  const { nombre } = req.body;

  playersCollection.add({ nombre }).then((newPlayerRef) => {
    playersCollection.doc(newPlayerRef.id).update({
      id: newPlayerRef.id,
    });

    res.json({
      nombre,
      id: newPlayerRef.id,
      new: true,
    });
  });
});

app.post("/player-guest", (req, res) => {
  const { nombre, rtdbGameRoomId } = req.body;
  const gameRoomRef = rtdb.ref(
    `gamerooms/${rtdbGameRoomId}/currentGame/playerTwo`
  );

  playersCollection.add({ nombre }).then((newPlayerRef) => {
    playersCollection.doc(newPlayerRef.id).update({
      id: newPlayerRef.id,
    });

    gameRoomRef.update({ nombre });

    res.json({
      nombre,
      id: newPlayerRef.id,
      new: true,
    });
  });
});

app.post("/game-rooms", (req, res) => {
  const { userId, nombre } = req.body;
  playersCollection
    .doc(userId.toString())
    .get()
    .then(() => {
      const gameRoomRef = rtdb.ref("gamerooms/" + nanoid());

      gameRoomRef
        .set({
          creator: userId,
          currentGame: {
            playerOne: {
              nombre: nombre,
              choice: "none",
              start: false,
              online: true,
              creator: true,
            },
            playerTwo: {
              nombre: "contrincante",
              choice: "none",
              start: false,
              online: false,
              creator: false,
            },
          },
        })
        .then(() => {
          const longGameRoomId = gameRoomRef.key;
          const shortGameRoomId = 1000 + Math.floor(Math.random() * 999);

          gameRoomsCollection
            .doc(shortGameRoomId.toString())
            .set({
              rtdbGameRoomId: longGameRoomId,
              creator: userId,
              friendlyId: shortGameRoomId.toString(),
            })
            .then(() => {
              res.json({
                friendlyId: shortGameRoomId.toString(),
                longGameRoomId: longGameRoomId.toString(),
              });
              playersCollection.doc(userId.toString()).update({
                rooms: [shortGameRoomId],
              });
            });
        });
    });
});

app.get("/game-rooms/:roomId", (req, res) => {
  const { roomId } = req.params;

  gameRoomsCollection
    .doc(roomId.toString())
    .get()
    .then((snap) => {
      const snapData = snap.data();
      res.json(snapData.rtdbGameRoomId);
    });
});

app.post("/online", (req, res) => {
  const { player, rtdbRoomId } = req.body;
  if (player == "local") {
    const gameRoomRef = rtdb.ref(
      `gamerooms/${rtdbRoomId}/currentGame/playerOne`
    );
    gameRoomRef
      .update({
        online: true,
      })
      .then(() => {
        res.json({ message: "player One is online" });
      });
  } else if (player == "guest") {
    const gameRoomRef = rtdb.ref(
      `gamerooms/${rtdbRoomId}/currentGame/playerTwo`
    );
    gameRoomRef
      .update({
        online: true,
      })
      .then(() => {
        res.json({ message: "player Two is online" });
      });
  }
});

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

app.patch("/unchoose", (req, res) => {
  const { localOrGuest, rtdbRoomId } = req.body;
  if (localOrGuest == "local") {
    const gameRoomRef = rtdb.ref(
      `gamerooms/${rtdbRoomId}/currentGame/playerOne`
    );
    gameRoomRef
      .set({
        choice: "none",
      })
      .then(() => {
        res.json({ message: "player One ya reseteó su choice" });
      });
  } else if (localOrGuest == "guest") {
    const gameRoomRef = rtdb.ref(
      `gamerooms/${rtdbRoomId}/currentGame/playerTwo`
    );
    gameRoomRef
      .update({
        choice: "none",
      })
      .then(() => {
        res.json({ message: "player Two ya reseteó su choice" });
      });
  }
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
