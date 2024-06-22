import statusCodes from "http-status-codes"
import * as queries from "../database/databasequerys.js";
import {db} from "../database/database.js";

export function addTrackToAlbum(req, res) {
    const album_id = req.params.albumId;
    if (album_id) {
        const foundAlbum = db.prepare(queries.getAlbumById).all(album_id);
        console.log(foundAlbum);

        if (foundAlbum.length < 1) {
            res.status(statusCodes.BAD_REQUEST).send({ message: "Invalid album id" });
            return;
        }

        const { trackName, trackDuration, trackRate, trackNumber } = req.body;
        const trimmedTrackName = trackName.trim();
        const trimmedTrackDuration = trackDuration.trim();
        const addedTrack = db.prepare(queries.insertTrackQuery);

        addedTrack.run(trimmedTrackName, trimmedTrackDuration, trackRate, trackNumber, album_id);
        res.status(statusCodes.OK).send({ message: "Track added successfully" });
    } else {
        res.status(statusCodes.BAD_REQUEST).send({ message: "Album id is required" });
    }
}

