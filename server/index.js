const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("../build"));

app.get('/', function (req, res) {
    res.sendFile('../build/index.html');
});

app.listen(8097, () =>{
    console.log("[INFO] Portfolio webserver started.")
})