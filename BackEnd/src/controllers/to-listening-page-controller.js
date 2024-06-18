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

export function getAllAlbumsToListening(req, res) {
    try {
        const albums = db.prepare(queries.getAlbumsWithoutRatingQuery).all();
        res.json(albums);
    } catch (error) {
        console.error("Error retrieving albums:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export function addAblum(req, res) {
    const { albumName, artistName, numberOfTracks, genre, description, albumCover } = req.body;
    const album = { albumName, artistName, numberOfTracks, genre, description, albumCover };

    console.log(album);
    validateAlbumData(album)

    db.prepare(queries.insertAlbumQuery).run();
    res.status(200);
    res.json({mesage:"Album added..."});
}

export function getAlbumById(req, res){
    const id = req.params.id;
    console.log("I am even called", id)

    // Replace this with query to db later
    console.log(albumsToListening)
    const foundAlbum = albumsToListening.filter(album => parseInt(album.albumId) === parseInt(id))

    if(foundAlbum.length === 0){
        throw {
            status: statusCodes.NOT_FOUND,
            message: "Album not found"
        }
    }
    res.status(statusCodes.OK)
    res.json(foundAlbum);
}


function validateAlbumData(album){
    if(isStringEmpty(album.albumName) || isStringEmpty(album.artistName) || isStringEmpty(album.albumImg)){
        throw {
            status: statusCodes.BAD_REQUEST,
            message: "Invalid values provided for album"
        }
    }

    if(album.numTracks < 1) {
        throw {
            status: statusCodes.BAD_REQUEST,
            message: "Num of tracks can't be less than 1"
        }
    }
}

function isStringEmpty(str){
    return str.trim().length === 0
}
