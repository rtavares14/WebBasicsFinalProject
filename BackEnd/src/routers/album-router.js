import express from "express";
import * as albumController from "../controllers/album-controller.js";

const albumRouter = express.Router();

albumRouter.get("/",albumController.getAllAlbums)
albumRouter.get("/tolistening",albumController.getAllAlbumsToListening)
albumRouter.get("/:albumId",albumController.getAlbumById);


albumRouter.post("/",albumController.addAlbum);


albumRouter.delete("/:albumId",albumController.deleteAlbumById);


export default albumRouter;