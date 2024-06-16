function redirectToMyAlbums() {
    window.location.href = 'index.html';
}

function redirectToListening() {
    window.location.href = 'to_listening.html';
}

function redirectToAlbum() {
    window.location.href = 'album.html';
}

function redirectToArtist() {
    window.location.href = 'artist.html';
}

function sortAlbums(criteria) {
    const albumContainer = document.getElementById('album-container');
    const albums = Array.from(albumContainer.querySelectorAll('.album-cell'));

    albums.sort((a, b) => {
        const albumNameA = a.querySelector('.album-info-box > div:nth-child(1)').textContent.trim();
        const albumNameB = b.querySelector('.album-info-box > div:nth-child(1)').textContent.trim();
        const artistNameA = a.querySelector('.album-info-box > div:nth-child(2)').textContent.trim();
        const artistNameB = b.querySelector('.album-info-box > div:nth-child(2)').textContent.trim();
        const ratingA = parseFloat(a.querySelector('.album-info-box > div:nth-child(3)').textContent.split(' ')[1]);
        const ratingB = parseFloat(b.querySelector('.album-info-box > div:nth-child(3)').textContent.split(' ')[1]);

        if (criteria === 'albumName-asc') {
            return albumNameA.localeCompare(albumNameB);
        } else if (criteria === 'albumName-desc') {
            return albumNameB.localeCompare(albumNameA);
        } else if (criteria === 'rate-asc') {
            return ratingA - ratingB;
        } else if (criteria === 'rate-desc') {
            return ratingB - ratingA;
        } else if (criteria === 'artistName-asc') {
            return artistNameA.localeCompare(artistNameB);
        } else if (criteria === 'artistName-desc') {
            return artistNameB.localeCompare(artistNameA);
        }
    });

    albumContainer.innerHTML = '';
    albums.forEach(album => albumContainer.appendChild(album));
}

document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelector('.search-section select');
    select.addEventListener('change', (e) => {
        sortAlbums(e.target.value);
    });
});

