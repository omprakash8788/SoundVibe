import express from "express";
import cors from "cors";
import "dotenv/config";
import songRouter from "./routes/songRoute.js";
import connectDB from "./config/mongodb.js";

const app = express(); 
const port = process.env.PORT || 5000;
connectDB()

app.use(express.json());
app.use(cors());

app.use("/api/song", songRouter)

app.get("/", (req, res) => res.send("API working"));
app.listen(port, () => console.log(`Server started on ${port}`));
