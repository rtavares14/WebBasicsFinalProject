// Import database from sqlite
import Database from "better-sqlite3";
import {albumsRated, albumsToListening, artists} from "../data/dummy-date.js";
import * as queries from "./databasequerys.js";

// Create a new DB file
export let db;
//add dummy data if the tables are empty

try {
    db = new Database('../../db/data.sqlite');
    db.prepare(queries.createArtistTable).run();
    db.prepare(queries.createAlbumsTable).run();
    db.prepare(queries.createTracksTable).run();

   // insertDummyData();

} catch (e) {
    console.error("Error while initializing db!", e);
    throw e;
}

function insertDummyData() {
    const nrOfAlbums = countAlbums();
    console.log("insertDummyData started");
    console.log(nrOfAlbums);

    //checking if there are already cats inside
    if (nrOfAlbums === 0) {
        //no data on the BD
        const insertAlbum = db.prepare(queries.insertAlbum);
        const insertArtist = db.prepare(queries.insertArtist);

        // Insert albums from albumsRated
        for (let album of albumsRated) {
            insertAlbum.run(album.albumName, album.artistName, album.numberOfTracks, album.genre, album.description, album.albumRate, album.albumImg);
        }

        // Insert albums from albumsToListening
        for (let album of albumsToListening) {
            insertAlbum.run(album.albumName, album.artistName, album.numberOfTracks, album.genre, album.description, album.albumRate, album.albumImg);
        }

        // Insert artists from artists
        for (let artist of artists) {
            const result = insertArtist.run(artist.artistName, artist.firstPlaceHearIt, artist.artistRate, artist.sawItLive, artist.artistDescription, artist.artistPhoto);
        }


    } else {
        console.log("No new data added!")
    }
}

function countAlbums() {
    const result = db.prepare(queries.countAlbumsQuery).get();
    return result ? result.my_variable : 0; // Return my_variable if result exists, otherwise 0
}