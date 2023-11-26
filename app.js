const express = require('express');
const app = express()
const path = require("path");
const PORT = 3030;

const mainRouter = require("./routers/main");

app.use(express.static("public"))
app.get("/", mainRouter);

app.listen(PORT,() => console.log(`server running http://localhost:${PORT}`));