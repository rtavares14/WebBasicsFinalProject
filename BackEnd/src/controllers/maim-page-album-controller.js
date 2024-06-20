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

export function addAblum(req, res) {
    const { albumName, artistName, numberOfTracks, genre, description, albumCover } = req.body;
    const album = { albumName, artistName, numberOfTracks, genre, description, albumCover };

    try {
        // Validate the album data
        validateAlbumData(album);

        // Get artistId based on artistName
        const artist_id = getArtistIdByName(album.artistName);

        // Prepare the insert query
        const insertAlbum = db.prepare(queries.insertNewAlbumQuery);
        insertAlbum.run(album.albumName, album.artistName, album.numberOfTracks, album.genre, album.description, album.albumCover, artist_id);

        // Send success response
        res.status(200).json({ message: "Album added successfully." });
    } catch (error) {
        // Log the error
        console.error(error);

        // Send error response
        res.status(500).json({ error: "Failed to add album." });
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