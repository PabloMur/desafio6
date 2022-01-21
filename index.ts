import * as express from "express";
import * as cors from "cors";
import { rtdb, firestore } from "./firestore";

const port = process.env.PORT || 3002;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("hola");
});

app.use(express.static("dist"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port, () => {
  console.log("Iniciado en el puerto " + port);
});
