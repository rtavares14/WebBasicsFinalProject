import express from "express";
import * as artistController from "../controllers/artist-controller.js";

const artistRouter = express.Router();

artistRouter.post("/",artistController.addArtist);
artistRouter.post("/:id",artistController.addAlbumToArtist);


artistRouter.get("/:artistId",artistController.getArtistById);


artistRouter.delete("/:artistId",artistController.deleteArtist);
artistRouter.delete("/:artistId",artistController.deleteAlbum);


artistRouter.patch("/:artistId",artistController.updateArtist);



export default artistRouter;