const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
dotenv.config();
app.use(express.json());

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("MongoDP Connected"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);

app.listen("4000", () => {
  console.log("backend is lol");
});
