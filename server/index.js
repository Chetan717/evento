const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');

const userRouter = require("./routes/authRoutes");
const dashboardRouter = require("./routes/userDashboardRoutes")
const paymentRouter = require("./routes/paymentRoute");
const adminRouter = require("./routes/adminRoutes")
const eventRouter = require("./routes/eventRoutes")
// const checkInRouter = require("./routes/checkInRoutes")

dotenv.config();

//database url
mongoose
  .connect("mongodb+srv://event:event123@cluster0.kihuz5y.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });

require("./models/otpAuth");
require("./models/user");
require("./models/admin");
require("./models/event");

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors());

app.use("/", paymentRouter);
app.use("/user", userRouter);
app.use("/user", dashboardRouter);

app.use("/", adminRouter);
app.use("/", eventRouter);
// app.use("/", checkInRouter);

app.get("/", (req, res) => {
  res.send("Event Management micro services API.");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server Running🚀: http://localhost:5000/");
});
