import express from "express";
import * as mainPageController from "../controllers/maim-page-album-controller.js";
import * as albumPageController from "../controllers/album-page-controller.js";

const albumRouter = express.Router();

albumRouter.get("/",mainPageController.getAllAlbums)
//albumRouter.post("/",mainPageController.addAlbum)
albumRouter.get("/:albumId",albumPageController.getAlbumById);

export default albumRouter;