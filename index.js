const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("hello the DB connection is all set"))
  .catch((err) => {
    console.log(err);
  });

app.get("/api/test", () => {
  console.log("test success");
});

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);


app.listen(process.env.PORT || 5000, () => {
  console.log("backend server is running");
});
