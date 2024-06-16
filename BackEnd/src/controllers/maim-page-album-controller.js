import {albumsRated, albumsToListening} from "../data/dummy-date.js";
import statusCodes from "http-status-codes"

export function getAllAlbums(req, res) {
    res.json(albumsRated);
}

export function addAblum(req, res) {
    const { albumName, artistName, numTracks, genre, description, albumImg } = req.body;
    const album = { albumName, artistName, numTracks, genre, description, albumImg };

    console.log(album);
    validateAlbumData(album)

    albumsToListening.push(album);
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


