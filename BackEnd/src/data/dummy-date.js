const albumsToListening = [
    {
        albumName: "French Exit",
        artistName: "TV Girl",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/9/96/TV_Girl_-_French_Exit.png",
        numberOfTracks: 0,
        genre: "Indie Pop",
        description: "A nostalgic trip through dreamy soundscapes and witty lyrics."
    },
    {
        albumName: "Who Really Cares",
        artistName: "TV Girl",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/5/57/TV_Girl_-_Who_Really_Cares.png",
        numberOfTracks: 0,
        genre: "Indie Pop",
        description: "A mix of heartfelt and humorous tracks exploring love and life."
    },
    {
        albumName: "Lust for Life",
        artistName: "Lana Del Rey",
        albumImg: "https://upload.wikimedia.org/wikipedia/pt/thumb/c/cd/Lust_for_Life_-_Lana_Del_Rey.png/220px-Lust_for_Life_-_Lana_Del_Rey.png",
        numberOfTracks: 0,
        genre: "Alternative",
        description: "A richly produced album blending vintage pop with modern sensibilities."
    },
    {
        albumName: "Blue Banisters",
        artistName: "Lana Del Rey",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/1/10/Lana_Del_Rey_-_Blue_Banisters_cover.png",
        numberOfTracks: 0,
        genre: "Alternative",
        description: "A deeply personal album exploring themes of love, loss, and resilience."
    },
    {
        albumName: "Honeymoon",
        artistName: "Lana Del Rey",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/7/75/Lana_Del_Rey_-_Honeymoon_%28Official_Album_Cover%29.png",
        numberOfTracks: 0,
        genre: "Alternative",
        description: "A cinematic journey through noir-inspired soundscapes and melancholy melodies."
    },
    {
        albumName: "Cigarettes After Sex",
        artistName: "Cigarettes After Sex",
        albumImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Cigarettes_After_Sex_%28album%29.svg/330px-Cigarettes_After_Sex_%28album%29.svg.png",
        numberOfTracks: 0,
        genre: "Ambient Pop",
        description: "A collection of dreamy, ambient pop songs with intimate lyrics."
    },
    {
        albumName: "Cry",
        artistName: "Cigarettes After Sex",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/4/4c/Cigarettes_After_Sex_-_Cry.png",
        numberOfTracks: 0,
        genre: "Ambient Pop",
        description: "A continuation of the band's signature ambient pop sound with a focus on love and desire."
    },
    {
        albumName: "Abbey Road",
        artistName: "The Beatles",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg",
        numberOfTracks: 0,
        genre: "Rock",
        description: "A timeless classic featuring some of the band's most iconic songs."
    },
    {
        albumName: "The Dark Side of the Moon",
        artistName: "Pink Floyd",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
        numberOfTracks: 0,
        genre: "Progressive Rock",
        description: "An epic concept album exploring themes of madness, conflict, and time."
    },
    {
        albumName: "1989",
        artistName: "Taylor Swift",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png",
        numberOfTracks: 0,
        genre: "Pop",
        description: "A shift to pop music with catchy tunes and heartfelt lyrics."
    },
    {
        albumName: "Rumours",
        artistName: "Fleetwood Mac",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG",
        numberOfTracks: 0,
        genre: "Rock",
        description: "A legendary album known for its timeless hits and behind-the-scenes drama."
    },
    {
        albumName: "Thriller",
        artistName: "Michael Jackson",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png",
        numberOfTracks: 0,
        genre: "Pop",
        description: "The best-selling album of all time, featuring a blend of pop, rock, and funk."
    },
    {
        albumName: "Hotel California",
        artistName: "Eagles",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/4/49/Hotelcalifornia.jpg",
        numberOfTracks: 0,
        genre: "Rock",
        description: "A rock classic with hits that have stood the test of time."
    },
    {
        albumName: "Rumors",
        artistName: "Fleetwood Mac",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG",
        numberOfTrack: 0,
        genre: "Rock",
        description: "Another entry to highlight the confusion around its title and content."
    },
    {
        albumName: "Nevermind",
        artistName: "Nirvana",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg",
        numberOfTracks: 0,
        genre: "Grunge",
        description: "A groundbreaking album that brought grunge music to the mainstream."
    },
    {
        albumName: "The Velvet Underground & Nico",
        artistName: "The Velvet Underground",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/0/0c/Velvet_Underground_and_Nico.jpg",
        numberOfTracks: 0,
        genre: "Art Rock",
        description: "A pioneering album blending avant-garde art with rock music."
    },
    {
        albumName: "The Beatles (White Album)",
        artistName: "The Beatles",
        albumImg: "https://upload.wikimedia.org/wikipedia/commons/2/20/TheBeatles68LP.jpg",
        numberOfTracks: 0,
        genre: "Rock",
        description: "A diverse double album showcasing the band's range and creativity."
    },
    {
        albumName: "My Beautiful Dark Twisted Fantasy",
        artistName: "Kanye West",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/f/f0/My_Beautiful_Dark_Twisted_Fantasy.jpg",
        numberOfTracks: 0,
        genre: "Hip Hop",
        description: "A critically acclaimed album blending various genres and innovative production."
    },
    {
        albumName: "Illmatic",
        artistName: "Nas",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/2/27/IllmaticNas.jpg",
        numberOfTracks: 0,
        genre: "Hip Hop",
        description: "A landmark hip hop album praised for its lyrical brilliance and production."
    }
];

const albumsRated = [
    {
        albumName: "OK Computer",
        artistName: "Radiohead",
        numberOfTracks: 0,
        genre: "Depressive",
        description: "A groundbreaking album that explores themes of technology and alienation.",
        albumRate: 9.8,
        albumImg: "https://e.snmc.io/i/600/w/612455e369c40dcbb26f19dec0142cdc/11993756/radiohead-ok-computer-Cover-Art.jpg"
    },
    {
        albumName: "Queen Is Dead",
        artistName: "The Smiths",
        numberOfTracks: 0,
        genre: "Indie Rock",
        description: "An iconic album known for its poetic lyrics and unique sound.",
        albumRate: 8.5,
        albumImg: "https://e.snmc.io/i/600/w/b57d980792b2598b1531872e0f7797ee/12056415/the-smiths-the-queen-is-dead-Cover-Art.png"
    },
    {
        albumName: "College Dropout",
        artistName: "Kanye West",
        numberOfTracks: 0,
        genre: "Hip Hop",
        description: "Kanye West's debut album, a mix of soul samples and introspective lyrics.",
        albumRate: 10,
        albumImg: "https://upload.wikimedia.org/wikipedia/en/a/a3/Kanyewest_collegedropout.jpg"
    },
    {
        albumName: "Currents",
        artistName: "Tame Impala",
        numberOfTracks: 0,
        genre: "Psychedelic Rock",
        description: "A critically acclaimed album with a lush, dreamy soundscape.",
        albumRate: 10,
        albumImg: "https://upload.wikimedia.org/wikipedia/en/9/9b/Tame_Impala_-_Currents.png"
    },
    {
        albumName: "The Slow Rush",
        artistName: "Tame Impala",
        numberOfTracks: 0,
        genre: "Psychedelic Pop",
        description: "A captivating album with themes of time and change.",
        albumRate: 9.2,
        albumImg: "https://upload.wikimedia.org/wikipedia/en/5/54/Tame_Impala_-_The_Slow_Rush.png"
    },
    {
        albumName: "Nectar",
        artistName: "Joji",
        numberOfTracks: 0,
        genre: "R&B",
        description: "Joji's second studio album, featuring a blend of lo-fi and electronic sounds.",
        albumRate: 9.4,
        albumImg: "https://upload.wikimedia.org/wikipedia/en/1/1b/Joji_-_Nectar.png"
    },
    {
        albumName: "Astroworld",
        artistName: "Travis Scott",
        numberOfTracks: 0,
        genre: "Hip Hop",
        description: "A highly praised album with atmospheric production and dynamic tracks.",
        albumRate: 9.8,
        albumImg: "https://upload.wikimedia.org/wikipedia/en/4/4b/Travis_Scott_-_Astroworld.png"
    },
    {
        albumName: "Blonde",
        artistName: "Frank Ocean",
        numberOfTracks: 0,
        genre: "R&B",
        description: "Frank Ocean's introspective and genre-defying masterpiece.",
        albumRate: 9.8,
        albumImg: "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg"
    },
    {
        albumName: "After Hours",
        artistName: "The Weeknd",
        numberOfTracks: 0,
        genre: "Synthwave",
        description: "A dark and cinematic album from The Weeknd.",
        albumRate: 9.2,
        albumImg: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png"
    },
    {
        albumName: "Take Care",
        artistName: "Drake",
        numberOfTracks: 0,
        genre: "Hip Hop",
        description: "Drake's breakthrough album, blending rap with R&B influences.",
        albumRate: 9.5,
        albumImg: "https://upload.wikimedia.org/wikipedia/en/a/ae/Drake_-_Take_Care_cover.jpg"
    },
    {
        albumName: "Awaken, My Love!",
        artistName: "Childish Gambino",
        numberOfTracks: 0,
        genre: "Funk",
        description: "A genre-bending album with strong funk and soul influences.",
        albumRate: 9.1,
        albumImg: "https://upload.wikimedia.org/wikipedia/en/1/10/Childish_Gambino_-_Awaken%2C_My_Love%21.png"
    },
    {
        albumName: "Art Angels",
        artistName: "Grimes",
        numberOfTracks: 0,
        genre: "Electropop",
        description: "A vibrant and eclectic album from Grimes.",
        albumRate: 8.6,
        albumImg: "https://upload.wikimedia.org/wikipedia/en/d/d9/Grimes_-_Art_Angels.png"
    },
    {
        albumName: "Starboy",
        artistName: "The Weeknd",
        numberOfTracks: 0,
        genre: "R&B",
        description: "A slick and polished album with a mix of R&B and pop influences.",
        albumRate: 8.7,
        albumImg: "https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png"
    },
    {
        albumName: "Channel Orange",
        artistName: "Frank Ocean",
        numberOfTracks: 0,
        genre: "R&B",
        description: "A critically acclaimed album known for its unique storytelling and production.",
        albumRate: 10,
        albumImg: "https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg"
    },
    {
        albumName: "Because Internet",
        artistName: "Childish Gambino",
        numberOfTracks: 0,
        genre: "Hip Hop",
        description: "A concept album that delves into the digital age and its effects on modern life.",
        albumRate: 9,
        albumImg: "https://upload.wikimedia.org/wikipedia/en/7/70/Childish-gambino-because-the-internet.gif"
    },
    {
        albumName: "Visions",
        artistName: "Grimes",
        numberOfTracks: 0,
        genre: "Synthpop",
        description: "An experimental album with dreamy and ethereal soundscapes.",
        albumRate: 8.5,
        albumImg: "https://upload.wikimedia.org/wikipedia/en/c/c1/Grimes_-_Visions_album_cover.png"
    },
    {
        albumName: "Scorpion",
        artistName: "Drake",
        numberOfTracks: 0,
        genre: "Hip Hop",
        description: "A double album that showcases Drake's versatility as an artist.",
        albumRate: 8.9,
        albumImg: "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg"
    }
];

const artists = [
    {
        artistName: "Drake",
        firstPlaceHearIt: "Youtube",
        artistRate: 8.2,
        sawItLive: "NO :(",
        artistDescription: "A Canadian rapper, singer, songwriter, and actor.",
        artistPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Drake_July_2016.jpg/330px-Drake_July_2016.jpg"
    },
    {
        artistName: "Frank Ocean",
        firstPlaceHearIt: "In a house party",
        artistRate: 10,
        sawItLive: "NO :(",
        artistDescription: "An American singer, songwriter, and rapper known for his unique musical style.",
        artistPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Frank_Ocean_2022_Blonded.jpg/330px-Frank_Ocean_2022_Blonded.jpg"
    },
    {
        artistName: "Steve Lacy",
        firstPlaceHearIt: "Radio",
        artistRate: 8.4,
        sawItLive: "NO :(",
        artistDescription: "An American musician, singer, songwriter, and record producer.",
        artistPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Steve_Lacy_%40_Rialto_Theatre.jpg/330px-Steve_Lacy_%40_Rialto_Theatre.jpg"
    },
]


export {albumsToListening, albumsRated, artists} ;
