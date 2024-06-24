const albumContainer = document.getElementById('album-container');

async function getAlbums() {
    const response = await fetch("http://localhost:3000/albums/tolistening");
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

async function pageLoad() {
    const albums = await getAlbums();
    if (!Array.isArray(albums)) {
        console.error("Albums is not an array");
        return;
    }

    albumContainer.innerHTML = '';

    for (const album of albums) {
        renderAlbum(album, albumContainer);
    }
}

function renderAlbum(album, albumContainer) {
    const albumEl = document.createElement('div');
    albumEl.classList.add('album-cell');
    albumEl.dataset.albumId = album.id;
    const rate = album.albumRate > 0 ? album.albumRate : 0;

    albumEl.innerHTML = `
        <a href="../pages/album.html?albumId=${album.id}">
            <img src="${album.albumCover}" alt="${album.albumName}">
            <div class="album-info-box">
                <div class="album-info album-name" style="cursor: pointer;">${album.albumName}</div>
                <div class="album-info artist-name" style="cursor: pointer;" data-artist-id="${album.artist_id}">${album.artistName}</div>
            </div>
        </a>
        <div class="album-info album-rating">Rating ${rate}/10</div>
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
}

pageLoad();