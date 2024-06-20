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
            insertArtist.run(artist.artistName, artist.firstPlaceHearIt, artist.artistRate, artist.sawItLive, artist.artistDescription, artist.artistPhoto);
            artistAdded++;
        }

        // Insert albums from albumsRated
        for (let album of albumsRated) {
            const artistId = getArtistIdByName(album.artistName);
            if (artistId) {
                insertAlbum.run(album.albumName, album.artistName, album.numberOfTracks, album.genre, album.albumRate, album.description, album.albumCover, artistId);
                albumsAdded++;
            }
        }

        // Insert albums from albumsToListening
        for (let album of albumsToListening) {
            const artistId = getArtistIdByName(album.artistName);
            if (artistId) {
                insertAlbum.run(album.albumName, album.artistName, album.numberOfTracks, album.genre, album.albumRate, album.description, album.albumCover, artistId);
                albumsAdded++;
            }
        }

        // Insert tracks from allTracks
        for (let track of tracks) {
            insertTrack.run(track.trackName, track.trackDuration, track.trackRate, track.trackNumber, track.album_id);
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