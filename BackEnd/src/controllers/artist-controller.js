import statusCodes from "http-status-codes"
import * as queries from "../database/databasequerys.js";
import {db} from "../database/database.js";

export function addArtist(req, res) {
    const { artistName, firstPlaceHearIt, artistRate, sawItLive, artistDescription, artistPhoto } = req.body;
    const artist = { artistName, firstPlaceHearIt, artistRate, sawItLive, artistDescription, artistPhoto };

    try {
        // Assigen all albums to this artist

        // Check if the artist already exists
        if (isArtistNameExists(artist.artistName)) {
            return res.status(400).json({ error: "Artist already exists." });
        }

        // Validate the album data
        validateArtistData(artist);

        // Insert the new artist
        const insertArtist = db.prepare(queries.insertArtistQuery);
        insertArtist.run(artist.artistName, artist.firstPlaceHearIt, artist.artistRate, artist.sawItLive, artist.artistDescription, artist.artistPhoto);

        // Get the new artist's ID
        const artist_id = getArtistIdByName(artist.artistName);

        // Get all albums by the artist name
        const albums = db.prepare(queries.getAlbumsFromArtistByName).all(artist.artistName);

        // Update each album to connect to the new artist ID
        const updateAlbum = db.prepare(queries.updateAlbumByAddingArtistID);
        for (const album of albums) {
            updateAlbum.run(artist_id, album.id);
        }


        res.status(200).json({ message: "Artist added successfully." });
    } catch (error) {
        // Log the error
        console.error(error);

        // Send error response
        res.status(500).json({ error: "Failed to add album." });
    }
}

function validateArtistData(artist) {
    if (isStringEmpty(artist.artistName) || isStringEmpty(artist.artistDescription) || isStringEmpty(artist.artistPhoto)) {
        throw {
            status: statusCodes.BAD_REQUEST,
            message: "Invalid values provided for artist"
        };
    }

    if (artist.numberOfTracks > 10 || artist.numberOfTracks < 0) {
        throw {
            status: statusCodes.BAD_REQUEST,
            message: "Artist rate should be more than 0 and less then 10"
        };
    }
}

function isStringEmpty(str) {
    return !str || str.trim().length === 0;
}

function isArtistNameExists(artistName) {
    const stmt = db.prepare(queries.getArtistByNameQuery);
    const result = stmt.get(artistName);
    return result !== undefined;
}

function getArtistIdByName(artistName) {
    const stmt = db.prepare(queries.getArtistByNameQuery);
    const result = stmt.get(artistName);
    return result ? result.id : null;
}