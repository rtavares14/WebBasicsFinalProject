document.addEventListener('DOMContentLoaded', () => {
    const openPopupBtn = document.getElementById('addInfoBtn');
    openPopupBtn.addEventListener('click', () => {
        document.getElementById('initialPopup').style.display = 'block';
    });

    fetch('popups.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('popupsContainer').innerHTML = data;

            const initialPopup = document.getElementById('initialPopup');
            const openAddAlbumPopup = document.getElementById('openAddAlbumPopup');
            const openOtherPopup = document.getElementById('openOtherPopup');
            const cancelInitialPopup = document.getElementById('cancelInitialPopup');

            const mainPopup = document.getElementById('popup');
            const artistPopup = document.getElementById('artistPopup');
            const trackPopup = document.getElementById('trackPopup');
            const editArtistPopup = document.getElementById('artistPopup2');
            const editalbumPopup = document.getElementById('albumPopup2');
            const cancelBtn = document.getElementById('cancelBtn');
            const cancelArtistBtn = document.getElementById('cancelArtistBtn');
            const cancelTrackBtn = document.getElementById('cancelTrackBtn');
            const cancelAlbumBtn2 = document.getElementById('cancelAlbumBtn2');
            const cancelArtistBtn2 = document.getElementById('cancelArtistBtn2');

            openAddAlbumPopup.addEventListener('click', () => {
                initialPopup.style.display = 'none';
                mainPopup.style.display = 'block';
            });

            openOtherPopup.addEventListener('click', () => {
                initialPopup.style.display = 'none';
                artistPopup.style.display = 'block';
            });

            cancelInitialPopup.addEventListener('click', () => {
                initialPopup.style.display = 'none';
            });

            cancelBtn.addEventListener('click', () => {
                mainPopup.style.display = 'none';
            });

            cancelArtistBtn.addEventListener('click', () => {
                artistPopup.style.display = 'none';
            });

            cancelTrackBtn.addEventListener('click', () => {
                trackPopup.style.display = 'none';
            });

            cancelArtistBtn2.addEventListener('click', () => {
                editArtistPopup.style.display = 'none';
            });

            cancelAlbumBtn2.addEventListener('click', () => {
                editalbumPopup.style.display = 'none';
            });

            window.addEventListener('click', (event) => {
                if (event.target === initialPopup) {
                    initialPopup.style.display = 'none';
                }
                if (event.target === mainPopup) {
                    mainPopup.style.display = 'none';
                }
                if (event.target === artistPopup) {
                    artistPopup.style.display = 'none';
                }
                if (event.target === trackPopup) {
                    trackPopup.style.display = 'none';
                }
            });

            const albumForm = document.getElementById('albumForm');
            const artistForm = document.getElementById('artistForm');
            const trackForm = document.getElementById('trackForm');
            const editArtistForm = document.getElementById('artistPopup2');

            albumForm.addEventListener('submit', (event) => {
                event.preventDefault();
                sendAlbumData();
            });

            artistForm.addEventListener('submit', (event) => {
                event.preventDefault();
                sendArtistData();
            });

            trackForm.addEventListener('submit', (event) => {
                event.preventDefault();
                sendTrackData();
            });
        })
        .catch(error => console.error('Error loading popups.html:', error));
});

function getObjectFromForm(form) {
    const formData = new FormData(form);
    return Object.fromEntries(formData);
}

async function sendAlbumData() {
    const form = document.getElementById('albumForm');
    const albumFromForm = getObjectFromForm(form);

    try {
        const response = await fetch(`http://localhost:3000/albums`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(albumFromForm)
        });

        window.location.assign("to_listening.html");
    } catch (e) {
        console.log(e);
    }
}

async function sendArtistData() {
    const form = document.getElementById('artistForm');
    const artistFromForm = getObjectFromForm(form);

    try {
        const response = await fetch(`http://localhost:3000/artists`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(artistFromForm)
        });

        if (response.status === 400) {
            const result = await response.json();
            console.log(result.error);
            closePopup();
        } else if (response.ok) {
            console.log('Artist added successfully');
            window.location.assign("../pages/to_listening.html");
        }
    } catch (e) {
        console.log(e);
    }
}

function closePopup() {
    const popup = document.getElementById('artistPopup');
    if (popup) {
        popup.style.display = 'none';
    }
}