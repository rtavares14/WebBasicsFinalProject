const albumRatings = [];
const albumContainer = document.getElementById('album-container');
const averageRatingEl = document.getElementById('average-rating');

async function getAlbums() {
    const data = await fetch("http://localhost:3000/albums");
    return await data.json();
}

async function pageLoad() {
    const albums = await getAlbums();
    albumContainer.innerHTML = '';

    for (const album of albums) {
        renderAlbum(album, albumContainer);
    }

    displayAverageRating();
}

function renderAlbum(album, albumContainer) {
    const albumEl = `
        <div class="album-cell" data-rating="${album.albumRate}">
            <img src="${album.albumImg}" alt="${album.albumName}">
            <div class="album-info-box">
                <div onclick="redirectToAlbum()" class="album-info">${album.albumName}</div>
                <div onclick="redirectToArtist()" class="album-info">${album.artistName}</div>
                <div class="album-info">Rating ${album.albumRate}/10</div>
            </div>
        </div>
    `;
    albumContainer.innerHTML += albumEl;
    albumRatings.push(album.albumRate);
}

function calculateAverageRating(ratings) {
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    return sum / ratings.length;
}

function displayAverageRating() {
    const averageRating = calculateAverageRating(albumRatings);
    averageRatingEl.innerText = `Average Rating: ${averageRating.toFixed(1)}/10`;
}

pageLoad();