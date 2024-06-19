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

export function getAllAlbums(req, res) {
    try {
        const albums = db.prepare(queries.getAlbumsWithRatingQuery).all();
        res.json(albums);
    } catch (error) {
        console.error("Error retrieving albums:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

function getArtistIdByName(artistName) {
    const stmt = db.prepare(queries.getArtistIdByNameQuery);
    const result = stmt.get(artistName);
    return result ? result.id : null;
}

function validateAlbumData(album) {
    if (isStringEmpty(album.albumName) || isStringEmpty(album.artistName) || isStringEmpty(album.albumCover)) {
        throw {
            status: statusCodes.BAD_REQUEST,
            message: "Invalid values provided for album"
        };
    }

    if (album.numberOfTracks < 1) {
        throw {
            status: statusCodes.BAD_REQUEST,
            message: "Number of tracks can't be less than 1"
        };
    }
}

function isStringEmpty(str) {
    return !str || str.trim().length === 0;
}