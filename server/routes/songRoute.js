import express from "express"
import { addSong, listSong } from "../controllers/songController.js";
import upload from "../middlewares/multer.js";

const songRouter = express.Router();
songRouter.post("/add", upload.fields([{name:"image", maxCount:1}, {name:"audio", maxCount:1}]) ,addSong)
songRouter.get("/list", listSong)

// songRouter.post("/add", addSong)
// songRouter.get("/list", listSong)



export default songRouter;



