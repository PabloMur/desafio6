import * as express from "express";
import * as cors from "cors";
import { rtdb, firestore } from "./firestore";
import { nanoid } from "nanoid";

const port = process.env.PORT || 3002;
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
              id: userId,
              nombre: nombre,
              choice: "none",
              start: false,
              date: new Date(),
              online: true,
              creator: true,
              local: true,
              guest: false,
            },
            playerTwo: {
              id: 123,
              nombre: "contrincante",
              choice: "none",
              start: false,
              date: new Date(),
              online: false,
              creator: false,
              local: false,
              guest: true,
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

app.post("/current-game", (req, res) => {
  const { rtdbRommId, nombre, isLocal } = req.body;

  if (isLocal) {
    const gameRoomRef = rtdb.ref(
      `gamerooms/${rtdbRommId}/currentGame/playerOne`
    );
    gameRoomRef
      .update({
        nombre: nombre,
      })
      .then(() => {
        gameRoomRef.get().then((snap) => {
          res.json(snap.val());
        });
      });
  } else if (!isLocal) {
    const gameRoomRef = rtdb.ref(
      `gamerooms/${rtdbRommId}/currentGame/playerTwo`
    );
    gameRoomRef
      .update({
        nombre: nombre,
      })
      .then(() => {
        gameRoomRef.get().then((snap) => {
          res.json(snap.val());
        });
      });
  } else {
    res.json({
      message: "not ok",
    });
  }
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

//Sirve la carpeta dist creada por parcel
app.use(express.static("dist"));

//Sirve el index.html si el resto de los endpoints no estan en uso
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port, () => {
  console.log("Iniciado en el puerto " + port);
});
