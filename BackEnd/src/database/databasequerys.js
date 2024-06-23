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
                                          artist_id INTEGER,
                                          FOREIGN KEY (artist_id) REFERENCES artists(id) ON DELETE CASCADE
        );`

export const createArtistTable = `
    CREATE TABLE IF NOT EXISTS artists (
                                           id INTEGER PRIMARY KEY AUTOINCREMENT,
                                           artistName TEXT UNIQUE,
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
                                          trackDuration TEXT, 
                                          trackRate INTEGER,
                                          trackNumber INTEGER,
                                          album_id INTEGER,
                                          FOREIGN KEY (album_id) REFERENCES albums(id) ON DELETE CASCADE
        );`

export const countAlbumsQuery = `SELECT COUNT(id) AS my_variable FROM albums;`;

export const insertFullyAlbumQuery = `
    INSERT INTO albums (albumName, artistName, numberOfTracks, genre, albumRate, description, albumCover, artist_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?);
`;

export const insertArtistQuery = `
    INSERT INTO artists (artistName, firstPlaceHearIt, artistRate, sawItLive, artistDescription, artistPhoto)
    VALUES (?, ?, ?, ?, ?, ?);
`;

export const insertTrackQuery = `
    INSERT INTO tracks (trackName, trackDuration, trackRate, trackNumber, album_id)
    VALUES (?, ?, ?, ?, ?);
`;

export const getArtistIdByNameQuery = `
    SELECT id FROM artists WHERE artistName = ?;
`;

export const insertNewAlbumQuery = `
    INSERT INTO albums (albumName, artistName, numberOfTracks, genre, description, albumCover, artist_id)
    VALUES (?, ?, ?, ?, ?, ?, ?)
`;

export const getAlbumsWithRatingQuery = `
    SELECT
        id,
        albumName,
        artistName,
        albumRate,
        albumCover,
        artist_id
    FROM
        albums
    WHERE
        albumRate IS NOT NULL;
`;

export const getAlbumsWithoutRatingQuery = `
    SELECT
        id,
        albumName,
        artistName,
        albumRate,
        albumCover,
        artist_id
    FROM
        albums
    WHERE
        albumRate IS NULL;
`;

export const getAlbumById = `
    SELECT
        id,
        albumName,
        artistName,
        numberOfTracks,
        genre,
        description,
        albumRate,
        albumCover,
        artist_id
    FROM
        albums
    WHERE
        id = ?;
`;

export const getArtistByIdQuery = `
    SELECT
        id,
        artistName,
        firstPlaceHearIt,
        artistRate,
        sawItLive,
        artistDescription,
        artistPhoto
    FROM
        artists
    WHERE
        id = ?;
`;


export const getTracksFromAlbum = `
    SELECT
        *
    FROM
        tracks
    WHERE
        album_id = ?;
`;

export const getAlbumsFromArtist = `
    SELECT
        *
    FROM
        albums
    WHERE
        artist_id = ?;
`;
export const getArtistByNameQuery = `
    SELECT
        id
    FROM
        artists
    WHERE
        artistName = ?;
`;

export const getAlbumsFromArtistByName = `
    SELECT
        *
    FROM
        albums
    WHERE
        artistName = ?;
`;

export const updateAlbumByAddingArtistID  = `
    UPDATE albums
    SET artist_id = ?
    WHERE id = ?;
`;

export const deleteAlbum  = `
    delete from albums where id = ?;
`;

export const deleteArtist  = `
    delete from artists where id = ?;
`;

export const deleteTrack  = `
    delete from tracks where id = ?;
`;

export const updateArtist = `
                                           UPDATE artists
                                           SET artistName = ?,
                                           firstPlaceHearIt = ?,
                                           artistRate = ?,
                                           sawItLive = ?,
                                           artistDescription = ?,
                                           artistPhoto = ?
                                           WHERE id = ?;
`;

export const getArtistNameById  = `
    select artistName from artists WHERE id=?;
`;

export const updateAlbum = `
                                           UPDATE albums
                                           SET albumName = ?,
                                            genre = ?,
                                            albumRate = ?,
                                            description = ?,
                                            albumCover = ?    
                                           WHERE id = ?;
`;

