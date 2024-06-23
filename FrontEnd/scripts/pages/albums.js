const album_id = getAlbumIdFromUrl();

function getAlbumIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('albumId');
}


async function fetchAlbumData(albumId) {
    const response = await fetch(`http://localhost:3000/albums/${albumId}`);
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.error(`Failed to fetch artist data: ${response.status}`);
        window.location.assign('index.html');
        return null;
    }
}


async function deleteAlbum(albumId) {
    try {
        const response = await fetch(`http://localhost:3000/albums/${albumId}`, {
            method: 'DELETE'
        });

        if (response.status === 200) {
            window.location.assign(`../pages/album.html?albumId=${albumId}`);
        } else {
            console.error(`Failed to delete album: ${response.status}`);
        }
    } catch (e) {
        console.error('Error:', e);
        alert('An error occurred while deleting the album.');
    }
}

function handleDeleteAlbumButtonClick() {
    const albumId = getAlbumIdFromUrl();
    if (albumId) {
        deleteAlbum(albumId);
    } else {
        console.error('Album ID not found in URL');
    }
}

async function deleteTrack(trackId) {
    try {
        const response = await fetch(`http://localhost:3000/tracks/${trackId}`, {
            method: 'DELETE'
        });

        if (response.status === 200) {
            window.location.assign(`../pages/album.html?albumId=${album_id}`);
        } else {
            console.error(`Failed to delete track: ${response.status}`);
        }
    } catch (e) {
        console.error('Error:', e);
        alert('An error occurred while deleting the track.');
    }
}


async function pageLoad() {
    const albumId = getAlbumIdFromUrl();

    const albumData = await fetchAlbumData(albumId);
    if (albumData) {
        document.querySelector('.album-info .album-info-item:nth-child(1)').textContent = `Album name: ${albumData.albumName}`;
        document.querySelector('.album-info .album-info-item:nth-child(2)').textContent = `Artist name: ${albumData.artistName}`;

        if (albumData.tracksCount > 0) {
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
                const trackEl = document.createElement('div');
                trackEl.className = 'track-item';
                trackEl.style.position = "relative"

                trackEl.innerHTML = `Track nr: ${track.trackNumber} -- name: ${track.trackName} -- duration: ${track.trackDuration}m -- rate ${track.trackRate}/10 
                                    <div class="deleteAlbumBtn" data-track-id="${track.id}">Delete</div>`;
                trackListEl.appendChild(trackEl);
            });// Add event listeners to delete buttons
            const deleteTrackButtons = document.querySelectorAll('.delete-track-button');
            deleteTrackButtons.forEach(button => {
                button.addEventListener('click', async (event) => {
                    const trackId = event.target.getAttribute('data-track-id');
                    await deleteTrack(trackId);
                });
            });
        } else {
            document.querySelector('.album-tracks-title').textContent = `Track list:`;
            document.querySelector('.album-tracks-text').textContent = `No tracks at the moment`;
        }
        const deleteButton = document.querySelector(".album-action-button:nth-child(3)");
        deleteButton.addEventListener('click', toggleDeleteButtonsVisibility2);

        const editButton = document.querySelector(".album-action-button:nth-child(2)");
        editButton.addEventListener("click", handleEditAlbumButtonClick)
    }
}


async function sendTrackData(albumId) {
    const form = document.getElementById('trackForm');
    const trackFromForm = getObjectFromForm(form);

    try {
        const response = await fetch(`http://localhost:3000/tracks/${albumId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(trackFromForm)
        });

        if (response.ok) {
            console.log('Track added successfully');
            // Reload the page after adding the track
            window.location.reload();
        } else {
            console.error('Failed to add track:', response.status);
        }
    } catch (error) {
        console.error('Error sending track data:', error);
    }
}

function handleAddTrackButtonClick() {
    const albumId = getAlbumIdFromUrl();
    const trackPopup = document.getElementById('trackPopup');

    if (albumId && trackPopup) {
        trackPopup.style.display = 'block';

        // Add event listener to track form submit button inside the popup
        const trackForm = document.getElementById('trackForm');
        trackForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            await sendTrackData(albumId);
            trackPopup.style.display = 'none'; // Close the popup after submission
        });
    } else {
        console.error('Album ID not found in URL or track popup not found');
    }
}

function toggleDeleteButtonsVisibility2(){
    const deleteButtons = document.querySelectorAll(".deleteAlbumBtn")
    deleteButtons.forEach(deleteButton => {
        console.log(deleteButton)
        deleteButton.classList.toggle("active")

        deleteButton.addEventListener("click", async () => {
            const track = deleteButton.getAttribute('data-track-id');
            await deleteTrack(track)
        })
    })
}

document.addEventListener('DOMContentLoaded', () => {
    const deleteAlbumButton = document.querySelector('.album-action-button:nth-child(1)');
    if (deleteAlbumButton) {
        deleteAlbumButton.addEventListener('click', handleDeleteAlbumButtonClick);
    }

    const editArtsitInfo = document.querySelector('.album-action-button:nth-child(2)');
    if (editArtsitInfo) {
        editArtsitInfo.addEventListener('click', handleEditAlbumButtonClick);
    }

    const addTrackBtn = document.querySelector('.album-action-button:nth-child(4)');
    if (addTrackBtn) {
        addTrackBtn.addEventListener('click', handleAddTrackButtonClick);
    }

    pageLoad();
});

async function handleEditAlbumButtonClick(){
    const albumId = getAlbumIdFromUrl();
    const albumPopup2 = document.getElementById('albumPopup2');

    if (albumId && albumPopup2) {
        albumPopup2.style.display = 'block';

        const title = document.getElementById("album-popup-title");
        title.textContent = 'Edit';

        const form = document.getElementById("albumForm2")
        await prefillFormWithData(form)

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const updatedAlbum = getObjectFromForm(form);
            await updateAlbum(updatedAlbum);
            window.location.assign(`../pages/album.html?albumId=${album_id}`);
        })
    } else {
        console.error('Album ID not found in URL or track popup not found');
    }
}

async function updateAlbum(album){
    const response = await fetch(`http://localhost:3000/albums/${album_id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(album)
    });

    if (!response.ok) {
        throw new Error(`error: ${response.status}`);
    }

    return response;
}

async function prefillFormWithData(form) {
    const albumId = getAlbumIdFromUrl();
    const album = await fetchAlbumData(albumId);

        form.elements.albumName.value = album.albumName
        form.elements.albumRate.value = album.albumRate
        form.elements.genre.value = album.genre
        form.elements.description.value = album.description
        form.elements.albumCover.value = album.albumCover
}

function getObjectFromForm(form) {
    const formData = new FormData(form);
    return Object.fromEntries(formData);
}