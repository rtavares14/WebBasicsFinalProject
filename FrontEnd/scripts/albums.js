/*
*   1. Grab the album id from the URL
*   2. Make a fetch request to backend with the albumId (localhost:3000/albums/1)
*   3. If album id is ok (code needs to be 200)(e.g. album was found) -> prefill the text fields with data from backend.
* Otherwise, redirect user to other page (like all albums).
*   4. Link albumId to buttons for further logic (save, delete, add)
* */

// Function to get the album ID from the URL
function getAlbumIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const albumId = urlParams.get('albumId');
    console.log('URL Parameters: ',window.location.search);
    console.log('Album ID', albumId);
    return urlParams.get('albumId');
}

// Function to fetch the album data from the backend
async function fetchAlbumData(albumId) {
    const response = await fetch(`http://localhost:3000/albums/${albumId}`);
    if (response.status === 200) {
        const data = await response.json();
        return data;
    } else {
        return null;
    }
}

async function pageLoad() {
    const albumId = getAlbumIdFromUrl();

    const albumData = await fetchAlbumData(albumId);
    if (albumData) {
        document.querySelector('.album-info .album-info-item:nth-child(1)').textContent = albumData.albumName;
        document.querySelector('.album-info .album-info-item:nth-child(2)').textContent = albumData.artistName;
        document.querySelector('.album-info .album-info-item:nth-child(3)').textContent = `This album is composed by ${albumData.tracksCount} tracks and its genre is ${albumData.genre}`;
        document.querySelector('.album-info .album-info-item:nth-child(4)').textContent = `Album rate: ${albumData.albumRate}/10`;

        document.querySelector('.album-description').textContent = albumData.description;

        document.querySelector('.album-cover').src = albumData.albumCover;
        document.querySelector('.album-cover').alt = albumData.albumName;

        // Populate track list
        const trackListEl = document.querySelector('.album-track-list');
        trackListEl.innerHTML = '';
        albumData.tracks.forEach((track, index) => {
            const trackEl = document.createElement('div');
            trackEl.textContent = `Track number ${index + 1} -- ${track.name} -- ${track.duration} -- ${track.rating}/10`;
            trackListEl.appendChild(trackEl);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    pageLoad();
});


