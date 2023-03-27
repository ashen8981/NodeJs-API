const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const locationRoute = require("./routes/location");
const deviceRoute = require("./routes/device");



dotenv.config();
// Middleware to parse JSON data
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
})
.then(console.log("connected to mongoDB.."))
.catch((err) => console.log(err));

app.use("/api/locations", locationRoute);    
app.use("/api/devices", deviceRoute);

app.listen("5000", ()=>{
  console.log("backend is ok...");
});
