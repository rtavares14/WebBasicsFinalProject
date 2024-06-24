import statusCodes from "http-status-codes"
import * as queries from "../database/databasequerys.js";
import {db} from "../database/database.js";

export function addArtist(req, res) {
    const { artistName, firstPlaceHearIt, artistRate, sawItLive, artistDescription, artistPhoto } = req.body;
    const artist = { artistName, firstPlaceHearIt, artistRate, sawItLive, artistDescription, artistPhoto };

    try {
        // Check if the artist already exists
        if (doesArtistExists(artist.artistName)) {
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
        res.status(500).json({ error: "Failed to add artist." });
    }
}

export function getArtistById(req, res) {
    const artistId = req.params.artistId;

    try {
        const artist = db.prepare(queries.getArtistByIdQuery).get(artistId);
        if (artist) {

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

export function deleteArtist(req, res) {
    const artistId = req.params.artistId;
    console.log('Requested artist ID:', artistId);

    try {
        db.prepare(queries.deleteArtist).run(artistId)

        // Send success response
        res.status(200).json({ message: "Artist deleted successfully." });
    } catch (error) {
        // Log the error
        console.error(error);

        // Send error response
        res.status(500).json({ error: "Failed to delete artist." });
    }
}

export function addAlbumToArtist(req, res) {
    const artist_id = req.params.id;

    const { albumName, numberOfTracks,albumRate, genre, description, albumCover } = req.body;
    const album = { albumName, numberOfTracks,albumRate, genre, description, albumCover };

    try {
        console.log(artist_id)

        const artistName = db.prepare(queries.getArtistNameById).get(artist_id);
        console.log(artistName.artistName)
        validateAlbumData(album);

        const newAlbum = db.prepare(queries.insertNewAlbumQuery);

        newAlbum.run(albumName,artistName.artistName,numberOfTracks,genre,description,albumCover,artist_id);
        res.status(statusCodes.OK).send({ message: "Album added successfully" });


    }catch (error) {
        // Log the error
        console.error(error);

        // Send error response
        res.status(500).json({ error: "Failed to add album." });
    }
}

export function deleteAlbum(req, res) {
    const albumId = req.params.albumId;

    try {
        db.prepare(queries.deleteAlbum).run(albumId)

        // Send success response
        res.status(200).json({ message: "Artist deleted successfully." });
    } catch (error) {
        // Log the error
        console.error(error);

        // Send error response
        res.status(500).json({ error: "Failed to delete artist." });
    }
}

export function updateArtist(req, res) {
    const { artistName, firstPlaceHearIt, artistRate, sawItLive, artistDescription, artistPhoto } = req.body;
    const artist = { artistName, firstPlaceHearIt, artistRate, sawItLive, artistDescription, artistPhoto };
    const artistId = req.params.artistId;

    try {
                validateArtistData(artist)

        const updatedArtist = db.prepare(queries.updateArtist);
        updatedArtist.run(artistName,firstPlaceHearIt,artistRate,sawItLive,artistDescription,artistPhoto,artistId);

        // Send success response
        res.status(200).json({ message: "Artist updated successfully." });
    } catch (error) {
        // Log the error
        console.error(error);

        // Send error response
        res.status(500).json({ error: "Failed to updated artist." });
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

function validateAlbumData(album) {
    console.log(album);
    if (isStringEmpty(album.albumName) || isStringEmpty(album.albumCover)) {
        throw {
            status: statusCodes.BAD_REQUEST,
            message: "Invalid values provided for album"
        };
    }

    if (album.numberOfTracks > 10 || album.numberOfTracks < 0) {
        throw {
            status: statusCodes.BAD_REQUEST,
            message: "Artist rate should be more than 0 and less then 10"
        };
    }
}

function isStringEmpty(str) {
    return !str || str.trim().length === 0;
}

function doesArtistExists(artistName) {
    const stmt = db.prepare(queries.getArtistByNameQuery);
    const result = stmt.get(artistName);
    return result !== undefined;
}

function getArtistIdByName(artistName) {
    const stmt = db.prepare(queries.getArtistByNameQuery);
    const result = stmt.get(artistName);
    return result ? result.id : null;
}