const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
require("dotenv").config();

const taskRoute = require("./Routes/TaskRoute");

// middle ware

app.use(cors());
app.use(express.json());

// route

app.use("/api/task", taskRoute);

app.get("/", (req, res) => {
  res.send("Todo Backend is running");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// database

mongoose.connect(process.env.MONGODB_URL,)
  .then(() => console.log("Connected!"));
