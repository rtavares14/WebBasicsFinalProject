async function getAlbums(){
    const data = await fetch("http://localhost:3000/tolistening");
    return await data.json();
}
async function pageLoad(){
    const albums = await getAlbums();
    const albumContainer = document.getElementById("album-container");
    albumContainer.innerHTML = '';

    for(const album of albums){
        renderAlbum(album, albumContainer);
    }

}

function renderAlbum(album, albumContainer) {
    const albumEl = `
        <a href="../pages/album.html?albumId=${album.albumId}" class="album-cell" data-album-id=${album.albumId}>
                <img src="${album.albumImg}" alt="${album.albumName}">
                <div class="album-info-box">
                    <div onclick="redirectToAlbum()" class="album-info">${album.albumName}</div>
                    <div onclick="redirectToArtist()" class="album-info">${album.artistName}</div>
                    <div class="album-info">ADD Rating</div>
                </div>
        </a>
    `
    // console.log(`../pages/album?albumId=${album.albumId}`)

    albumContainer.innerHTML += albumEl;
}

pageLoad()