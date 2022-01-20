import * as express from "express";
import * as cors from "cors";
import { rtdb, firestore } from "./firestore";

const port = 3002;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log("Iniciado en el puerto " + port);
});
