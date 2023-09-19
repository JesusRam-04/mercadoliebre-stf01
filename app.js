const express = require("express");
const app = express();
const path = require("path");

const port= process.env.PORT || 3030;
app.listen(port, () => {
    console.log("Esuchando en el puerto " + port);
});

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.sendFile( path.join(__dirname, "./views/home.html") );
});
