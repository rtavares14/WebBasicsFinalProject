// Function to get the album ID from the URL
function getArtistNameFromUrl() {
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
        return null;
    }
}

async function pageLoad() {
    const artistId = getArtistNameFromUrl();

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
                if(album.albumRate > 0){
                    trackEl.textContent = `Album nr: ${index+1} -- name: ${album.albumName} (tracks: ${album.numberOfTracks}) -- rate ${album.albumRate}/10`;
                }
                else {
                    trackEl.textContent = `Album nr: ${index+1} -- name: ${album.albumName} (tracks: ${album.numberOfTracks}) -- rate 0/10`;
                }

                artistListEl.appendChild(trackEl);
            });
        } else {
            document.querySelector('.artist-discography-title').textContent = `Track list:`;
            document.querySelector('.artist-discography-text').textContent = `No tracks at the moment`;
        }
    } else {
        console.error('No artist data found');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    pageLoad();
});