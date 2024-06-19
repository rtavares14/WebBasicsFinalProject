import statusCodes from "http-status-codes"
import Database from "better-sqlite3";
import * as queries from "../database/databasequerys.js";

export let db;

try {
    db = new Database('db/data.sqlite');

} catch (e) {
    console.error("Error while initializing db!", e);
    throw e;
}

export function getAlbumById(req, res) {
    const albumId = req.params.albumId;
    console.log('Requested album ID:', albumId);

    try {
        const album = db.prepare(queries.getAlbumById).get(albumId);
        if (album) {
            console.log('Retrieved album:', album);
            res.json(album);
        } else {
            res.status(statusCodes.NOT_FOUND).json({ error: "Album not found" });
        }
    } catch (err) {
        console.error("Error retrieving album with id:", err);
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error: "Internal server error" });
    }
}

