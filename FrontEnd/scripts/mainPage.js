const albumRatings = [];
const albumContainer = document.getElementById('album-container');
const averageRatingEl = document.getElementById('average-rating');

async function getAlbums() {
    try {
        const response = await fetch("http://localhost:3000/albums");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched albums:", data); // Log the fetched data
        return data;
    } catch (error) {
        console.error("Error fetching albums:", error);
        return [];
    }
}

async function pageLoad() {
    const albums = await getAlbums();
    console.log("Albums:", albums); // Log the albums to check if it's an array
    if (!Array.isArray(albums)) {
        console.error("Albums is not an array");
        return;
    }

    albumContainer.innerHTML = '';
    albumRatings.length = 0; // Clear existing ratings

    for (const album of albums) {
        renderAlbum(album, albumContainer);
    }

    displayAverageRating();
}

function renderAlbum(album, albumContainer) {
    const albumEl = document.createElement('div');
    albumEl.classList.add('album-cell');
    albumEl.dataset.albumId = album.id;

    albumEl.innerHTML = `
        <a href="../pages/album.html?albumId=${album.id}">
            <img src="${album.albumCover}" alt="${album.albumName}">
            <div class="album-info-box">
                <div class="album-info album-name" style="cursor: pointer;">${album.albumName}</div>
                <div class="album-info artist-name" style="cursor: pointer;" data-artist-id="${album.artist_id}">${album.artistName}</div>
            </div>
        </a>
        <div class="album-info album-rating">Rating ${album.albumRate}/10</div>
    `;

    const albumNameEl = albumEl.querySelector('.album-name');
    const artistNameEl = albumEl.querySelector('.artist-name');

    albumNameEl.addEventListener('click', (event) => {
        event.preventDefault();
        redirectToAlbum(album.id);
    });

    artistNameEl.addEventListener('click', (event) => {
        event.preventDefault();
        redirectToArtist(album.artist_id);
    });

    albumContainer.appendChild(albumEl);

    if (album.albumRate !== null) {
        albumRatings.push(album.albumRate);
    }
}

function calculateAverageRating(ratings) {
    if (ratings.length === 0) {
        return 0; // Prevent division by zero
    }
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    return sum / ratings.length;
}

function displayAverageRating() {
    const averageRating = calculateAverageRating(albumRatings);
    averageRatingEl.innerText = `Average Rating: ${averageRating.toFixed(1)}/10`;
}

pageLoad();