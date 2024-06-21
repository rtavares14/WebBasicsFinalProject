// Function to get the album ID from the URL
function getAlbumIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('albumId');
}

// Function to fetch the album data from the backend
async function fetchAlbumData(albumId) {
    const response = await fetch(`http://localhost:3000/albums/${albumId}`);
    if (response.status === 200) {
        const data = await response.json();
        return data;
    } else {
        console.error(`Failed to fetch album data: ${response.status}`);
        return null;
    }
}

// Function to send a DELETE request to the backend
async function deleteAlbum(albumId) {
    try {
        const response = await fetch(`http://localhost:3000/albums/${albumId}`, {
            method: 'DELETE'
        });

        if (response.status === 200) {
            alert('Album deleted successfully.');
            window.location.assign("index.html");
        } else {
            console.error(`Failed to delete album: ${response.status}`);
            alert('Failed to delete album.');
        }
    } catch (e) {
        console.error('Error:', e);
        alert('An error occurred while deleting the album.');
    }
}

// Function to handle the delete button click
function handleDeleteButtonClick() {
    const albumId = getAlbumIdFromUrl();
    if (albumId) {
        if (confirm('Are you sure you want to delete this album?')) {
            deleteAlbum(albumId);
        }
    } else {
        console.error('Album ID not found in URL');
    }
}

async function pageLoad() {
    const albumId = getAlbumIdFromUrl();

    const albumData = await fetchAlbumData(albumId);
    if (albumData) {
        document.querySelector('.album-info .album-info-item:nth-child(1)').textContent = `Album name: ${albumData.albumName}`;
        document.querySelector('.album-info .album-info-item:nth-child(2)').textContent = `Artist name: ${albumData.artistName}`;

        if (albumData.tracksCount > 1) {
            document.querySelector('.album-info .album-info-item:nth-child(3)').textContent = `This album has ${albumData.tracksCount} tracks and its genre is ${albumData.genre}`;
        } else {
            document.querySelector('.album-info .album-info-item:nth-child(3)').textContent = `This album has 0 tracks at the moment and its genre is ${albumData.genre}`;
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

// Add event listener to the delete button
document.addEventListener('DOMContentLoaded', () => {
    const deleteButton = document.querySelector('.album-action-button:nth-child(1)');
    if (deleteButton) {
        deleteButton.addEventListener('click', handleDeleteButtonClick);
    }
    pageLoad();
});