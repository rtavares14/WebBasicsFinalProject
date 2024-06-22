import express from "express";
import * as trackController from "../controllers/track-controller.js";

const trackRouter = express.Router();

trackRouter.post('/:albumId',trackController.addTrackToAlbum)

export default trackRouter;