const express = require("express");

require("./db/mongoose");
const Task = require("./models/task");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("listening on port " + port);
});