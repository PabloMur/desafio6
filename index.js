"use strict";
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var port = 3002;
var app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("dist"));
app.get("*", function (req, res) {
    res.sendFile(__dirname + "/dist/index.html");
});
app.listen(port, function () {
    console.log("Iniciado en el puerto " + port);
});
