import {albumsToListening} from "../data/dummy-date.js";
export function getAllAlbumsToListening(req, res) {
    res.json(albumsToListening);
}
