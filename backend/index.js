const express = require("express");
require("./db/connection");
require("dotenv").config();

const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const userRouter = require("./routes/userRoutes");
app.use(cors());
app.use(express.json());
app.use("/", (req, res) => {
  res.end("Hello").status(200);
});
app.use("/api/user", userRouter);
app.listen(port, () => {
  console.log(`Started at ${port}`);
});