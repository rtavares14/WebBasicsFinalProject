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
        console.error(`Failed to fetch artist data: ${response.status}`);
        return null;
    }
}

async function pageLoad() {
    const albumId = getAlbumIdFromUrl();

    const albumData = await fetchAlbumData(albumId);
    if (albumData) {
        document.querySelector('.album-info .album-info-item:nth-child(1)').textContent = `Album name: ${albumData.albumName}`;
        document.querySelector('.album-info .album-info-item:nth-child(2)').textContent = `Artist name: ${albumData.artistName}`;

        if (albumData.tracksCount > 1) {
            document.querySelector('.album-info .album-info-item:nth-child(3)').textContent = `This album is composed by ${albumData.tracksCount} tracks and its genre is ${albumData.genre}`;
        } else {
            document.querySelector('.album-info .album-info-item:nth-child(3)').textContent = `This album is composed by 0 tracks at the moment and its genre is ${albumData.genre}`;
            document.querySelector('.album-tracks-title').textContent = `Track list:`;
            document.querySelector('.album-tracks-text').textContent = `No tracks at the moment`;
        }

        if (albumData.albumRate > 1) {
            document.querySelector('.album-info .album-info-item:nth-child(4)').textContent = `Album rate: ${albumData.albumRate}/10`;
        } else {
            document.querySelector('.album-info .album-info-item:nth-child(4)').textContent = `Album rate: is 0 at the moment`;
        }

        document.querySelector('.album-description-title').textContent = `Description: `;
        document.querySelector('.album-description-text').textContent = ` ${albumData.description}`;

        const albumCoverEl = document.querySelector('.album-cover');
        albumCoverEl.src = albumData.albumCover;
        albumCoverEl.alt = albumData.albumName;


        // Populate track list
        const trackListEl = document.querySelector('.album-tracks-text');
        trackListEl.innerHTML = '';
        if (Object.keys(albumData.tracks).length > 0) {
            albumData.tracks.forEach((track, index) => {
                document.querySelector('.album-tracks-title').textContent = `Track list:`;
                console.log(track)
                const trackEl = document.createElement('div');
                trackEl.textContent = `Track nr: ${track.trackNumber} -- name: ${track.trackName} -- duration: ${track.trackDuration}m -- rate ${track.trackRate}/10`;

                    trackListEl.appendChild(trackEl);
            });
        } else {
            document.querySelector('.album-tracks-title').textContent = `Track list:`;
            document.querySelector('.album-tracks-text').textContent = `No tracks at the moment`;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    pageLoad();
});