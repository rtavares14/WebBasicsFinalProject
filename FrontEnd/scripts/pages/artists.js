// Function to get the album ID from the URL
function getArtistNameFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('artistId');
}

// Function to fetch the album data from the backend
async function fetchArtistData(artistId) {
    const response = await fetch(`http://localhost:3000/albums/artists/${artistId}`);
    if (response.status === 200) {
        const data = await response.json();
        return data;
    } else {
        console.error(`Failed to fetch artist data: ${response.status}`);
        return null;
    }
}

async function pageLoad() {
    const artistId = getArtistNameFromUrl();

    if (!artistId) {
        console.error('Artist ID not found in URL');
        return;
    }

    const artistData = await fetchArtistData(artistId);
    if (artistData) {
        document.querySelector('.artist-info .artist-info-item:nth-child(1)').textContent = `Artist name: ${artistData.artistName}`;
        document.querySelector('.artist-info .artist-info-item:nth-child(2)').textContent = `Place that i first hear it: ${artistData.firstPlaceHearIt}`;
        document.querySelector('.artist-info .artist-info-item:nth-child(3)').textContent = `Artist rate: ${artistData.artistRate}/10`;
        document.querySelector('.artist-info .artist-info-item:nth-child(4)').textContent = `Already saw it live: ${artistData.sawItLive}`;


        document.querySelector('.artist-photo').src = artistData.artistPhoto;
        document.querySelector('.artist-photo').alt = artistData.artistName;

        const artistDiscographyEl = document.querySelector('.artist-discography');
        if (artistDiscographyEl) artistDiscographyEl.textContent = artistData.description;
        else console.error('.artist-discography not found');



        // Populate album list
        const albumListEl = document.querySelector('.artist-discography-list');
        if (albumListEl) {
            albumListEl.innerHTML = '';
            artistData.albums.forEach((album, index) => {
                const albumEl = document.createElement('div');
                albumEl.textContent = `Album number ${index + 1} -- ${album.title} -- ${album.tracks} tracks`;
                albumListEl.appendChild(albumEl);
            });
        } else {
            console.error('.artist-discography-list not found');
        }
    } else {
        console.error('No artist data found');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    pageLoad();
});
