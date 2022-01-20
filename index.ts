import * as express from "express";

const port = process.env.PORT || 3050;
const app = express();

app.get("/", (req, res) => {
  res.json("hola");
});

app.listen(port, () => {
  console.log("Iniciado en el puerto " + port);
});
