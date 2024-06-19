const albumContainer = document.getElementById('album-container');

async function getAlbums() {
    const response = await fetch("http://localhost:3000/tolistening");
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

async function pageLoad() {
    try {
        const albums = await getAlbums();
        albumContainer.innerHTML = '';

        for (const album of albums) {
            renderAlbum(album, albumContainer);
        }
    } catch (error) {
        console.error("Error loading albums:", error);
    }
}

function renderAlbum(album, albumContainer) {
    const albumEl = `
        <a href="../pages/album.html?albumId=${album.id}" class="album-cell" data-album-id=${album.id}">
            <img src="${album.albumCover}" alt="${album.albumName}">
            <div class="album-info-box">
                <div onclick="redirectToAlbum()" class="album-info">${album.albumName}</div>
                <div onclick="redirectToArtist()" class="album-info">${album.artistName}</div>
                <div class="album-rating"> ADD Rating</div>
            </div>
        </a>
    `;

    albumContainer.innerHTML += albumEl;
}


pageLoad();