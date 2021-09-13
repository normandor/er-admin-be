require("dotenv").config();
const errorHandler = require('./_helpers/error-handler');
var cookieParser = require('cookie-parser');

var cors = require('cors');

const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const roomRouter = require("./api/users/room.router");

//app.options('*', cors());  // enable pre-flight

// global error handler
app.use(errorHandler);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Credentials', true);
  next();
});
// app.use(cors());
app.use(cors({ credentials:true, origin: 'http://localhost:3001' }));

app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRouter);
app.use("/api/rooms", roomRouter);

app.listen(process.env.APP_PORT, ()=> {
  console.log("server up and running on port: ", process.env.APP_PORT);
});