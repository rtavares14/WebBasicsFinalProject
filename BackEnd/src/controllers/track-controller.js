import statusCodes from "http-status-codes"
import * as queries from "../database/databasequerys.js";
import {db} from "../database/database.js";

export function getAllTracks(req, res){
    const albumId = req.query.albumId;

    if (albumId){
        const foundAlbum = db.prepare(queries.getAlbumById).all(albumId);
        console.log(foundAlbum)

        if(foundAlbum.length < 1){
            throw {
                status: statusCodes.BAD_REQUEST,
                message: "Invalid album id"
            }
        }

        const tracks = db.prepare(queries.getTracksFromAlbum).all(albumId);

        res.status(statusCodes.OK)
        res.json(tracks)
    } else {
        throw {
            status: statusCodes.BAD_REQUEST,
            message: "Specify which album id to get tracks from."
        }
    }
}
