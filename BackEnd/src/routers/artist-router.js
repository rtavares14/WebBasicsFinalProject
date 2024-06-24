import express from "express";
import * as artistController from "../controllers/artist-controller.js";

const artistRouter = express.Router();

//send new artist and new album assigning to the artist
artistRouter.post("/",artistController.addArtist);
artistRouter.post("/:id",artistController.addAlbumToArtist);

//get information from the artist
artistRouter.get("/:artistId",artistController.getArtistById);

//delete the artist and delete album from artist
artistRouter.delete("/:artistId",artistController.deleteArtist);
artistRouter.delete("/:artistId",artistController.deleteAlbum);

//edit the called artist
artistRouter.patch("/:artistId",artistController.updateArtist);



export default artistRouter;