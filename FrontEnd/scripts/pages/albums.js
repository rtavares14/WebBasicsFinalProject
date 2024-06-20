// Function to get the album ID from the URL
function getAlbumIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('albumId');
}

// Function to fetch the album data from the backend
async function fetchAlbumData(artistId) {
    const response = await fetch(`http://localhost:3000/albums/${artistId}`);
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
        document.querySelector('.album-info .album-info-item:nth-child(1)').textContent = `Album name: ${albumData.albumName}`;
        document.querySelector('.album-info .album-info-item:nth-child(2)').textContent = `Artist name: ${albumData.artistName}`;

        if(albumData.tracksCount>1){
            document.querySelector('.album-info .album-info-item:nth-child(3)').textContent = `This album is composed by ${albumData.tracksCount} tracks and its genre is ${albumData.genre}`;
        }
        else{
            document.querySelector('.album-info .album-info-item:nth-child(3)').textContent = `This album is composed by 0 tracks at the moment and its genre is ${albumData.genre}`;
        }

        if(albumData.albumRate>1){
            document.querySelector('.album-info .album-info-item:nth-child(4)').textContent = `Album rate: ${albumData.albumRate}/10`;
        }
        else{
            document.querySelector('.album-info .album-info-item:nth-child(4)').textContent = `Album rate: is 0 at the moment`;
        }

        document.querySelector('.album-description').textContent = `Description: ${albumData.description}`;

        const albumCoverEl = document.querySelector('.album-cover');
        albumCoverEl.src = albumData.albumCover;
        albumCoverEl.alt = albumData.albumName;


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


