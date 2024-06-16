import express from "express";

import * as toListeningController from "../controllers/to-listening-page-controller.js";

const toListeningRouter = express.Router();

toListeningRouter.get("/",toListeningController.getAllAlbumsToListening)

export default toListeningRouter;