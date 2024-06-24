import express from "express";
import * as trackController from "../controllers/track-controller.js";

const trackRouter = express.Router();

//add new track to the called album
trackRouter.post('/:albumId',trackController.addTrackToAlbum)

//delete track called
trackRouter.delete('/:id',trackController.deleteTrack)


export default trackRouter;