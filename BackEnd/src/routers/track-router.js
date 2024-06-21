import express from "express";
import * as trackController from "../controllers/track-controller.js";

const trackRouter = express.Router();

//trackRouter.get("/", trackController.getAllTracks)

export default trackRouter;