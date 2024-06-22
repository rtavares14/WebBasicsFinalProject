import express from "express";
import * as artistController from "../controllers/artist-controller.js";

const artistRouter = express.Router();

artistRouter.post("/",artistController.addArtist);
//artistRouter.post(":/artistId",artistController.addAlbumToArtist);

artistRouter.get("/:artistId",artistController.getArtistById);


artistRouter.delete("/:artistId",artistController.deleteArtist);


export default artistRouter;