const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/authentification");



dotenv.config();


const app=express();

mongoose.connect(process.env.MONGODB_URL).then(
    ()=>{console.log("connected to db successfully")}
);

app.use(express.json())

app.use("/api/user",userRoute);
app.use("/api/auth",authRoute);


app.listen(5555,()=>{console.log("server is ON")});
