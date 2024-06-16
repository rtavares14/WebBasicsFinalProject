import express from "express";

import * as mainPageController from "../controllers/maim-page-album-controller.js";

const mainPageRouter = express.Router();

mainPageRouter.get("/",mainPageController.getAllAlbums)
mainPageRouter.post("/",mainPageController.addAblum)
mainPageRouter.get("/:id", mainPageController.getAlbumById)

export default mainPageRouter;