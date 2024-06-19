document.addEventListener('DOMContentLoaded', () => {
    // Event listener for opening the initial popup
    const openPopupBtn = document.getElementById('addInfoBtn');
    openPopupBtn.addEventListener('click', () => {
        document.getElementById('initialPopup').style.display = 'block';
    });

    // Fetch and load the popups content
    fetch('popups.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('popupsContainer').innerHTML = data;

            // Now add event listeners to elements within popupsContainer
            const initialPopup = document.getElementById('initialPopup');
            const openAddAlbumPopup = document.getElementById('openAddAlbumPopup');
            const openOtherPopup = document.getElementById('openOtherPopup');
            const cancelInitialPopup = document.getElementById('cancelInitialPopup');

            const mainPopup = document.getElementById('popup');
            const artistPopup = document.getElementById('artistPopup');
            const cancelBtn = document.getElementById('cancelBtn');
            const cancelArtistBtn = document.getElementById('cancelArtistBtn');
            const albumForm = document.getElementById('albumForm');
            const artistForm = document.getElementById('artistForm');

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
            });

            albumForm.addEventListener('submit', (event) => {
                event.preventDefault();
                sendAlbumData();
            });

            artistForm.addEventListener('submit', (event) => {
                event.preventDefault();
                sendArtistData();
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
    const albumFromForm = getObjectFromForm(form)

    console.log("Obj from form ", albumFromForm)

    try {
        const response = await fetch(`http://localhost:3000/tolistening`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(albumFromForm)
        });

        window.location.assign("../pages/to_listening.html")
    } catch (e){
        console.log(e)
    }
}

async function sendArtistData() {
    const form = document.getElementById('artistForm');
    const artistFromForm = getObjectFromForm(form)

    console.log("Obj from form ", artistFromForm)

    try {
        const response = await fetch(`http://localhost:3000/artist`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(artistFromForm)
        });

        //window.location.assign("../pages/to_listening.html")
    } catch (e) {
        console.log(e)
    }
}
