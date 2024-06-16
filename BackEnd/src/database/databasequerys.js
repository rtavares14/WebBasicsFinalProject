export const createAlbumsTable = `
CREATE TABLE IF NOT EXIST building (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    albumName TEXT,
    artistName TEXT,
    numberOfTracks INTEGER NULL,
    genre TEXT NULL,
    albumRate INTEGER NULL,
    description TEXT NULL,
    albumCover TEXT
);`

export const createArtistTable = `
CREATE TABLE IF NOT EXIST building (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    artistName TEXT,
    firstPlaceHearIt TEXT NULL,
    artistRate INTEGER,
    sawItLive TEXT,
    artistDescription TEXT NULL,
    artistPhoto TEXT
);`

export const createTracksTable = `
CREATE TABLE IF NOT EXIST building (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    trackName TEXT,
    trackDuration MINUTES,
    trackRate INTEGER,
    trackNumber INTEGER
);`



//do the array
//inser the arraay onto the table
//count it
