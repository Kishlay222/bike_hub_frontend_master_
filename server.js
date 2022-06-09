const express = require("express");
const cors = require("cors");
const path = require("path");

//initalizing app
const app = express();
app.use(cors());

const PORT = 8000;

var http = require("http").createServer(app);

http.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`server is running at ${PORT}`);
});

app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});