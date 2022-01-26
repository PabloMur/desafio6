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

app.post("/game-data", (req, res) => {
  const { rtdbRoomId } = req.body;
  const gameRoomRef = rtdb.ref("gamerooms/" + rtdbRoomId + "/currentGame");
  gameRoomRef.update({ test: "test" }).then((response) => {
    console.log(response);
  });
});

app.post("/game-rooms", (req, res) => {
  const { userId } = req.body;
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
              choice: null,
              start: false,
              date: new Date(),
              online: false,
              creator: true,
              local: true,
              guest: false,
            },
            playerTwo: {
              id: 123,
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

app.post("/test-rtdb", (req, res) => {
  const { rtdbRommId } = req.body;
  const gameRoomRef = rtdb.ref(`gamerooms/${rtdbRommId}/currentGame`);
  gameRoomRef
    .update({
      test: "testeando el update, mas que nada para ver si se usa asi jaja",
      date: new Date(),
    })
    .then(() => {
      gameRoomRef.get().then((snap) => {
        res.json(snap.val());
      });
    });
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
