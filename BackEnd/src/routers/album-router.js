import express from "express";
import * as albumController from "../controllers/album-controller.js";

const albumRouter = express.Router();

albumRouter.get("/",albumController.getAllAlbums)
albumRouter.get("/tolistening",albumController.getAllAlbumsToListening)

albumRouter.post("/",albumController.addAlbum)
albumRouter.get("/artists/:artistId",albumController.getArtistById);
albumRouter.get("/:albumId",albumController.getAlbumById);

export default albumRouter;