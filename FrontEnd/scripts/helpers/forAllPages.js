function redirectToMyAlbums() {
    window.location.href = 'index.html';
}

function redirectToListening() {
    window.location.href = 'to_listening.html';
}

function redirectToAlbum(albumId) {
    window.location.href = `album.html?albumId=${albumId}`;
}

function redirectToArtist(artistId) {
    window.location.href = `artist.html?artistId=${encodeURIComponent(artistId)}`;
}

