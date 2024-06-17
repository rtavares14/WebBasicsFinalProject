export const createAlbumsTable = `
CREATE TABLE IF NOT EXISTS albums (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    albumName TEXT,
    artistName TEXT,
    numberOfTracks INTEGER NULL,
    genre TEXT NULL,
    albumRate INTEGER NULL,
    description TEXT NULL,
    albumCover TEXT,
    FOREIGN KEY (id) REFERENCES artists(id) ON DELETE CASCADE
);`

export const createArtistTable = `
CREATE TABLE IF NOT EXISTS artists (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    artistName TEXT,
    firstPlaceHearIt TEXT NULL,
    artistRate INTEGER,
    sawItLive TEXT,
    artistDescription TEXT NULL,
    artistPhoto TEXT
);`

export const createTracksTable = `
CREATE TABLE IF NOT EXISTS tracks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    trackName TEXT,
    trackDuration MINUTES,
    trackRate INTEGER,
    trackNumber INTEGER,
    FOREIGN KEY (id) REFERENCES albums(id) ON DELETE CASCADE
    );`

export const countAlbumsQuery  = `SELECT COUNT(id) AS my_variable FROM albums;`;

export const insertAlbumQuery = `
    INSERT INTO albums (albumName, artistName, numberOfTracks, genre, albumRate, description, albumCover, artist_id)
    VALUES (?, ?, ?, ?, ?, ?, ?,?);
`;

export const insertArtistQuery = `
    INSERT INTO artists (artistName, firstPlaceHearIt, artistRate, sawItLive, artistDescription, artistPhoto)
    VALUES (?, ?, ?, ?, ?, ?);
`;

export const insertTrackQuery = `
    INSERT INTO tracks (trackName, trackDuration, trackRate, trackNumber, album_id)
    VALUES (?, ?, ?, ?, ?);
`;

//do the array
//inser the arraay onto the table

