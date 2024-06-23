
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
        window.location.assign('index.html');
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

    const editButton = document.querySelector('.artist-action-button:nth-child(2)');
    if (editButton) {
        editButton.addEventListener('click', handleEditArtistButtonClick);
    }

    const addAlbumButton = document.querySelector('.artist-action-button:nth-child(4)');
    if (addAlbumButton) {
        addAlbumButton.addEventListener('click', handleAddAlbumButtonClick);
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

async function handleEditArtistButtonClick(){
    const artistId = getArtistIdFromUrl();
    const artistPopup2 = document.getElementById('artistPopup2');

    if (artistId && artistPopup2) {
        artistPopup2.style.display = 'block';
        console.log("opened popup")

        //change title to edit
        //prefill pop up with data
        const title = document.getElementById("artist-popup-title");
        title.textContent = 'Edit';

        const form = document.getElementById("artistForm2")
        await prefillFormWithData(form)

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const updatedArtist = getObjectFromForm(form);

            await updateArtist(updatedArtist);
            window.location.assign(`../pages/artist.html?artistId=${artist_id}`);
        })
    } else {
        console.error('Artist ID not found in URL or track popup not found');
    }
}

async function updateArtist(artist){
    const response = await fetch(`http://localhost:3000/artists/${artist_id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(artist)
    });

    if (!response.ok) {
        throw new Error(`error: ${response.status}`);
    }

    return response;
}

async function prefillFormWithData(form) {
    const artist = await getArtistData(artist_id);

    form.elements.artistName.value = artist.artistName;
    form.elements.firstPlaceHearIt.value = artist.firstPlaceHearIt;
    form.elements.artistRate.value = artist.artistRate;
    form.elements.sawItLive.value = artist.sawItLive;
    form.elements.artistDescription.value = artist.artistDescription;
    form.elements.artistPhoto.value = artist.artistPhoto;
}

function handleAddAlbumButtonClick() {
    const artistId = getArtistIdFromUrl();
    const albumPopup2 = document.getElementById('albumPopup2');

    if (artistId && albumPopup2) {
        albumPopup2.style.display = 'block';

        const title = document.getElementById("artist-popup-title");
        title.textContent = 'Add new';

        // Add event listener to track form submit button inside the popup
        const trackForm = document.getElementById('albumPopup2');
        albumPopup2.addEventListener('submit', async (event) => {
            event.preventDefault();
            await sendAlbumData(artistId);
            albumPopup2.style.display = 'none'; // Close the popup after submission
        });
    } else {
        console.error('Artist ID not found in URL or track popup not found');
    }
}

function getObjectFromForm(form) {
    const formData = new FormData(form);
    return Object.fromEntries(formData);
}

async function sendAlbumData(artistId) {
    const form = document.getElementById('albumForm2');
    const albumFromForm = getObjectFromForm(form);

    console.log("Obj from form ", albumFromForm);
    console.log(artistId);
    try {
        const response = await fetch(`http://localhost:3000/artists/${artistId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(albumFromForm)
        });

        if (response.ok) {
            window.location.reload();
        } else {
            console.error('Failed to send album data', response);
        }
    } catch (e) {
        console.log(e);
    }
}