const express = require("express");
const openaiRoutes = require("./routes/deepseekRoutes");

const app = express()

app.use(express.json());


app.use("/api", openaiRoutes)


module.exports = app;