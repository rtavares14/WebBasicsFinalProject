import express from "express";

import * as toListeningController from "../controllers/to-listening-page-controller.js";
import * as mainPageController from "../controllers/maim-page-album-controller.js";
import mainPageRouter from "./main-page-router.js";

const toListeningRouter = express.Router();

toListeningRouter.get("/",toListeningController.getAllAlbumsToListening)
toListeningRouter.post("/",toListeningController.addAblum)


export default toListeningRouter;