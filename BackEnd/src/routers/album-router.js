import express from "express";
import * as albumController from "../controllers/album-controller.js";

const albumRouter = express.Router();

//get all albums into 2 functions 1 with ratings and the other without and get album by id
albumRouter.get("/",albumController.getAllAlbumsWithRating)
albumRouter.get("/tolistening",albumController.getAllAlbumsToListening)
albumRouter.get("/:albumId",albumController.getAlbumById);

//add a new album to the bd
albumRouter.post("/",albumController.addAlbum);

//deleted the called album
albumRouter.delete("/:albumId",albumController.deleteAlbumById);

//edit the called album
albumRouter.patch("/:albumId",albumController.updateAlbum);

export default albumRouter;