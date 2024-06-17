/*
*   1. Grab the album id from the URL
*   2. Make a fetch request to backend with the albumId (localhost:3000/albums/1)
*   3. If album id is ok (code needs to be 200)(e.g. album was found) -> prefill the text fields with data from backend.
* Otherwise, redirect user to other page (like all albums).
*   4. Link albumId to buttons for further logic (save, delete, add)
* */

// Function to get the album ID from the URL
function getAlbumIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('albumId');
}

// Function to fetch the album data from the backend
async function fetchAlbumData(albumId) {
    const response = await fetch(`http://localhost:3000/albums/${albumId}`);
    if (response.status === 200) {
        const data = await response.json();
        return data;
    } else {
        return null;
    }
}



window.onload = pageLoad;