import statusCodes from "http-status-codes"
import * as queries from "../database/databasequerys.js";
import {db} from "../database/database.js";


export function getAlbumById(req, res) {
    const albumId = req.params.albumId;

    try {
        const album = db.prepare(queries.getAlbumById).get(albumId);
        if (album) {
            const tracks = db.prepare(queries.getTracksFromAlbum).all(albumId);

            const albumWithTracks = {
                ...album,
                tracks: tracks
            };

            res.json(albumWithTracks);
        } else {
            res.status(statusCodes.NOT_FOUND).json({ error: "Album not found" });
        }
    } catch (err) {
        console.error("Error retrieving album with id:", err);
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error: "Internal server error" });
    }
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
export function getAllAlbumsToListening(req, res) {
    try {
        const albums = db.prepare(queries.getAlbumsWithoutRatingQuery).all();
        res.json(albums);
    } catch (error) {
        console.error("Error retrieving albums:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export function addAlbum(req, res) {
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

export function deleteAlbumById(req, res) {
    const albumId = req.params.albumId;

    try {
        db.prepare(queries.deleteAlbum).run(albumId)

        // Send success response
        res.status(200).json({ message: "Album deleted successfully." });
    } catch (error) {
        // Log the error
        console.error(error);

        // Send error response
        res.status(500).json({ error: "Failed to delete album." });
    }
}

export function updateAlbum(req, res) {
    const { albumName,genre,albumRate,description,albumCover} = req.body;
    const album = { albumName,genre,albumRate,description,albumCover};
    const albumId = req.params.albumId;

    try {
        validateEditedAlbumData(album)

        const updatedAlbum = db.prepare(queries.updateAlbum);
        updatedAlbum.run(albumName,genre,albumRate,description,albumCover,albumId);

        // Send success response
        res.status(200).json({ message: "album updated successfully." });
    } catch (error) {
        // Log the error
        console.error(error);

        // Send error response
        res.status(500).json({ error: "Failed to updated album." });
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
function validateEditedAlbumData(album) {
    if (isStringEmpty(album.albumName) || isStringEmpty(album.albumCover)) {
        throw {
            status: statusCodes.BAD_REQUEST,
            message: "Invalid values provided for album"
        };
    }
}
function isStringEmpty(str) {
    return !str || str.trim().length === 0;
}

