
// Function to get the album ID from the URL
function getArtistIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('artistId');
}

// Function to fetch the album data from the backend
async function fetchArtistData(artistId) {
    const response = await fetch(`http://localhost:3000/artists/${artistId}`);
    if (response.status === 200) {
        const data = await response.json();
        return data;
    } else {
        console.error(`Failed to fetch artist data: ${response.status}`);
        window.location.assign("index.html");
        return null;
    }
}

// Function to send a DELETE request to delete an artist
async function deleteArtist(artistId) {
    try {
        const response = await fetch(`http://localhost:3000/artists/${artistId}`, {
            method: 'DELETE'
        });

        if (response.status === 200) {
            alert('Artist deleted successfully.');
            window.location.assign("index.html");
        } else {
            console.error(`Failed to delete artist: ${response.status}`);
            alert('Failed to delete artist.');
        }
    } catch (e) {
        console.error('Error:', e);
        alert('An error occurred while deleting the artist.');
    }
}

// Function to handle the delete button click
function handleDeleteArtistButtonClick() {
    const artistId = getArtistIdFromUrl();
    if (artistId) {
        deleteArtist(artistId);
    } else {
        console.error('Artist ID not found in URL');
    }
}

async function pageLoad() {
    const artistId = getArtistIdFromUrl();

    const artistData = await fetchArtistData(artistId);
    if (artistData) {
        document.querySelector('.artist-info .artist-info-item:nth-child(1)').textContent = `Artist name: ${artistData.artistName}`;
        document.querySelector('.artist-info .artist-info-item:nth-child(2)').textContent = `Place that i first hear it: ${artistData.firstPlaceHearIt}`;
        document.querySelector('.artist-info .artist-info-item:nth-child(3)').textContent = `Artist rate: ${artistData.artistRate}/10`;
        document.querySelector('.artist-info .artist-info-item:nth-child(4)').textContent = `Already saw it live: ${artistData.sawItLive}`;

        document.querySelector('.artist-biography-title').textContent = `Description: `;
        document.querySelector('.artist-biography-text').textContent = ` ${artistData.artistDescription}`;

        document.querySelector('.artist-photo').src = artistData.artistPhoto;
        document.querySelector('.artist-photo').alt = artistData.artistName;


        // Populate album list
        const artistListEl = document.querySelector('.artist-discography-text');
        artistListEl.innerHTML = '';
        if (Object.keys(artistData.albums).length > 0) {
            artistData.albums.forEach((album, index) => {
                document.querySelector('.artist-discography-title').textContent = `Albums list:`;
                console.log(album)

                const trackEl = document.createElement('div');
                trackEl.className = 'album-title';
                trackEl.setAttribute('data-album-id', album.id);

                if(album.albumRate > 0){
                    trackEl.textContent = `Album nr: ${index+1} -- name: ${album.albumName} (tracks: ${album.numberOfTracks}) -- rate ${album.albumRate}/10`;
                }
                else {
                    trackEl.textContent = `Album nr: ${index+1} -- name: ${album.albumName} (tracks: ${album.numberOfTracks}) -- rate 0/10`;
                }

                const deleteAlbumBtn = document.createElement("div")
                deleteAlbumBtn.className = 'deleteAlbumBtn';
                deleteAlbumBtn.textContent = `delete`;
                trackEl.appendChild(deleteAlbumBtn);

                artistListEl.appendChild(trackEl);
            });
        } else {
            document.querySelector('.artist-discography-title').textContent = `Album list:`;
            document.querySelector('.artist-discography-text').textContent = `No albums at the moment`;
        }

        const deleteButton = document.querySelector(".artist-action-button:nth-child(3)");
        deleteButton.addEventListener('click', toggleDeleteButtonsVisibility);

        const editButton = document.querySelector(".artist-action-button:nth-child(2)");
        editButton.addEventListener("click", handleEditArtistButtonClick)
    } else {
        console.error('No artist data found');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const deleteButton = document.querySelector('.artist-action-button:nth-child(1)');
    if (deleteButton) {
        deleteButton.addEventListener('click', handleDeleteArtistButtonClick);
    }

    pageLoad();
});

function toggleDeleteButtonsVisibility(){
    const deleteButtons = document.querySelectorAll(".deleteAlbumBtn")
    deleteButtons.forEach(deleteButton => {
        deleteButton.classList.toggle('active');
        deleteButton.addEventListener("click", async () => {
            const albumId = deleteButton.parentElement.getAttribute('data-album-id');
            await deleteAlbum(albumId)
        })
    })
}

async function deleteAlbum(albumId) {
    const response = await fetch(`http://localhost:3000/albums/${albumId}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error(`error: ${response.status}`);
    }

    let currentArtistId = getArtistIdFromUrl();
    window.location.assign(`../pages/artist.html?artistId=${currentArtistId}`);
}

function handleEditArtistButtonClick(){
    // const form = document.getElementById('artistPopup2');
    // form.classList.add('active');
}