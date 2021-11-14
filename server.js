import express from "express";
import mongoose from "mongoose";
import router from "./endpoints.js";
import cors from "cors";

const PORT = 8080;
const url = `mongodb+srv://admin:admin@cluster0.zdqyb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const app = express();
const corsOptions = {
    origin: "http://localhost:8081"
  };
  
  app.use(cors(corsOptions));
  
app.use(express.json());
app.use('/api', router);
app.get("/", (req, res) => {
    res.json({ message: "Welcome" });
  });
async function start() {
    try {
        await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
        app.listen(PORT, () => console.log("server is running on port " + PORT));
    } catch (e) {
        console.log(e);
    }
}
start();