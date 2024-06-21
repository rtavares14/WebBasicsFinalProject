import statusCodes from "http-status-codes"
import * as queries from "../database/databasequerys.js";
import {db} from "../database/database.js";


export function getAlbumById(req, res) {
    const albumId = req.params.albumId;
    console.log('Requested album ID:', albumId);

    try {
        const album = db.prepare(queries.getAlbumById).get(albumId);
        if (album) {
            console.log('Retrieved album:', album);
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

export function getArtistById(req, res) {
    const artistId = req.params.artistId;
    console.log('Requested artist ID:', artistId);

    try {
        const artist = db.prepare(queries.getArtistByIdQuery).get(artistId);
        if (artist) {
            console.log('Retrieved Artist:', artist);

            const albums = db.prepare(queries.getAlbumsFromArtist).all(artistId);

            const ArtistWithAlbums = {
                ...artist,
                albums: albums
            };

            res.json(ArtistWithAlbums);
        } else {
            res.status(statusCodes.NOT_FOUND).json({ error: "Artist not found" });
        }
    } catch (err) {
        console.error("Error retrieving artist with ID:", err);
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
export function addArtist(req, res) {
    const { artistName, firstPlaceHearIt, artistRate, sawItLive, artistDescription, artistPhoto } = req.body;
    const artist = { artistName, firstPlaceHearIt, artistRate, sawItLive, artistDescription, artistPhoto };

    try {
        // Validate the artist data


        // Assigen all albums to this artist

        // Prepare the insert query

        // Send success response
        res.status(200).json({ message: "Artist added successfully." });
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

