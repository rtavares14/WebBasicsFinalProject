import express from "express";
import * as artistController from "../controllers/artist-controller.js";

const artistRouter = express.Router();

artistRouter.post("/",artistController.addArtist)

export default artistRouter;