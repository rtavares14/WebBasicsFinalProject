import { albumsRated, albumsToListening, artists,tracks } from "../data/dummy-date.js";
import * as queries from "./databasequerys.js";
import {db} from "./database.js";

function getArtistIdByName(artistName) {
    const stmt = db.prepare(queries.getArtistIdByNameQuery);
    const result = stmt.get(artistName);
    return result ? result.id : null; // Return null if artistName doesn't exist
}

export function insertDummyData() {
    const nrOfAlbums = countAlbums();
    console.log("insertDummyData started");

    if (nrOfAlbums === 0) {
        const insertAlbum = db.prepare(queries.insertFullyAlbumQuery);
        const insertArtist = db.prepare(queries.insertArtistQuery);
        const insertTrack = db.prepare(queries.insertTrackQuery);

        let artistAdded = 0;
        let albumsAdded = 0;
        let tracksAdded = 0;

        // Insert artists first
        for (let artist of artists) {
            insertArtist.run(artist.artistName, artist.firstPlaceHearIt, artist.artistRate,
                artist.sawItLive, artist.artistDescription, artist.artistPhoto);
            artistAdded++;
        }

        // Insert albums from albumsRated
        for (let album of albumsRated) {
            const artistId = getArtistIdByName(album.artistName);
            if (artistId) {
                insertAlbum.run(album.albumName, album.artistName, album.numberOfTracks,
                    album.genre, album.albumRate, album.description, album.albumCover, artistId);
                albumsAdded++;
            }
        }

        // Insert albums from albumsToListening
        for (let album of albumsToListening) {
            const artistId = getArtistIdByName(album.artistName);
            if (artistId) {
                insertAlbum.run(album.albumName, album.artistName, album.numberOfTracks,
                    album.genre, album.albumRate, album.description, album.albumCover, artistId);
                albumsAdded++;
            }
        }

        // Insert tracks from allTracks
        for (let track of tracks) {
            insertTrack.run(track.trackName, track.trackDuration, track.trackRate,
                track.trackNumber, track.album_id);
            tracksAdded++;
        }

        console.log("Artists added successfully ("+artistAdded+")");
        console.log("Albums added successfully ("+albumsAdded+")");
        console.log("Tracks added successfully ("+tracksAdded+")");

    } else {
        console.log("No new data added!");
    }
}


function countAlbums() {
    const result = db.prepare(queries.countAlbumsQuery).get();
    return result ? result.my_variable : 0; // Return my_variable if result exists, otherwise 0
}

export function deleteTrackFunc(trackId){
    db.prepare(queries.deleteTrack).run(trackId);
}

export function foundAlbum(album_id){
    return db.prepare(queries.getAlbumById).all(album_id);
}

export function addTrack(trimmedTrackName, trimmedTrackDuration, trackRate, trackNumber, album_id){
    db.prepare(queries.insertTrackQuery).run(
        trimmedTrackName,
        trimmedTrackDuration,
        trackRate,
        trackNumber,
        album_id);
}

export function insertNewArtist(artist){
    db.prepare(queries.insertArtistQuery).run(artist.artistName,
        artist.firstPlaceHearIt,
        artist.artistRate,
        artist.sawItLive,
        artist.artistDescription,
        artist.artistPhoto);

}

export function getAllAlbumsByArtistName(artist_artistName){
   return  db.prepare(queries.getAlbumsFromArtistByName).all(artist_artistName);
}

export function updateAlbum(artist_id, album_id){
    db.prepare(queries.updateAlbumByAddingArtistID).run(artist_id, album_id);
}

export function getArtistByName(artistName){
    return db.prepare(queries.getArtistByNameQuery).get(artistName);
}

export function updateArtist(artistName,firstPlaceHearIt,artistRate,sawItLive,artistDescription,artistPhoto,artistId){
    db.prepare(queries.updateArtist).run(artistName,
        firstPlaceHearIt,
        artistRate,
        sawItLive,
        artistDescription,
        artistPhoto,
        artistId);
}

export function deleteAlbum(albumId){
    db.prepare(queries.deleteAlbum).run(albumId);
}

export function deleteArtist(artistId){
    db.prepare(queries.deleteArtist).run(artistId);
}

export function getAllAlbumsByArtistId(artistId){
    return  db.prepare(queries.getAlbumsFromArtist).all(artistId);
}

export function getArtistById(artistId){
    return db.prepare(queries.getArtistByNameQuery).get(artistId);
}

export function insertNewAlbum(albumName,artistName_artistName,numberOfTracks,genre,description,albumCover,artist_id){
    db.prepare(queries.insertNewAlbumQuery).run(albumName,
        artistName_artistName,
        numberOfTracks,
        genre,
        description,
        albumCover,
        artist_id);
}

export function getArtistNameById(artistId){
    return db.prepare(queries.getArtistNameById).get(artistId);
}

export function getArtistIdByArtistName(artistName){
    db.prepare(queries.getArtistIdByNameQuery).get(artistName);
}

export function updateAlbumAllFields(albumName,genre,albumRate,description,albumCover,albumId){
    db.prepare(queries.updateAlbumByAddingArtistID).run(albumName,
        genre,
        albumRate,
        description,
        albumCover,
        albumId);
}

export function getAllAlbumsWithRating(){
    return db.prepare(queries.getAlbumsWithRatingQuery).all();
}

export function getAllAlbumsWithNoRating(){
    return db.prepare(queries.getAlbumsWithoutRatingQuery).all();
}

export function getAlbumById(albumId){
   return  db.prepare(queries.getAlbumById).get(albumId);
}

export function getTracksFromAlbum(albumId){
    return db.prepare(queries.getTracksFromAlbum).all(albumId);
}