const albumsToListening = [
    {
        albumName: "French Exit",
        artistName: "TV Girl",
        albumCover: "https://upload.wikimedia.org/wikipedia/en/9/96/TV_Girl_-_French_Exit.png",
        numberOfTracks: 0,
        genre: "Indie Pop",
        description: "A nostalgic trip through dreamy soundscapes and witty lyrics."
    },
    {
        albumName: "Who Really Cares",
        artistName: "TV Girl",
        albumCover: "https://upload.wikimedia.org/wikipedia/en/5/57/TV_Girl_-_Who_Really_Cares.png",
        numberOfTracks: 0,
        genre: "Indie Pop",
        description: "A mix of heartfelt and humorous tracks exploring love and life."
    },
    {
        albumName: "Lust for Life",
        artistName: "Lana Del Rey",
        albumCover: "https://upload.wikimedia.org/wikipedia/pt/thumb/c/cd/Lust_for_Life_-_Lana_Del_Rey.png/220px-Lust_for_Life_-_Lana_Del_Rey.png",
        numberOfTracks: 0,
        genre: "Alternative",
        description: "A richly produced album blending vintage pop with modern sensibilities."
    },
    {
        albumName: "Blue Banisters",
        artistName: "Lana Del Rey",
        albumCover: "https://upload.wikimedia.org/wikipedia/en/1/10/Lana_Del_Rey_-_Blue_Banisters_cover.png",
        numberOfTracks: 0,
        genre: "Alternative",
        description: "A deeply personal album exploring themes of love, loss, and resilience."
    },
    {
        albumName: "Honeymoon",
        artistName: "Lana Del Rey",
        albumCover: "https://upload.wikimedia.org/wikipedia/en/7/75/Lana_Del_Rey_-_Honeymoon_%28Official_Album_Cover%29.png",
        numberOfTracks: 0,
        genre: "Alternative",
        description: "A cinematic journey through noir-inspired soundscapes and melancholy melodies."
    },
    {
        albumName: "Cigarettes After Sex",
        artistName: "Cigarettes After Sex",
        albumCover: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Cigarettes_After_Sex_%28album%29.svg/330px-Cigarettes_After_Sex_%28album%29.svg.png",
        numberOfTracks: 0,
        genre: "Ambient Pop",
        description: "A collection of dreamy, ambient pop songs with intimate lyrics."
    },
    {
        albumName: "Cry",
        artistName: "Cigarettes After Sex",
        albumCover: "https://upload.wikimedia.org/wikipedia/en/4/4c/Cigarettes_After_Sex_-_Cry.png",
        numberOfTracks: 0,
        genre: "Ambient Pop",
        description: "A continuation of the band's signature ambient pop sound with a focus on love and desire."
    },
    {
        albumName: "1989",
        artistName: "Taylor Swift",
        albumCover: "https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png",
        numberOfTracks: 0,
        genre: "Pop",
        description: "A shift to pop music with catchy tunes and heartfelt lyrics."
    },
    {
        albumName: "My Beautiful Dark Twisted Fantasy",
        artistName: "Kanye West",
        albumCover: "https://upload.wikimedia.org/wikipedia/en/f/f0/My_Beautiful_Dark_Twisted_Fantasy.jpg",
        numberOfTracks: 0,
        genre: "Hip Hop",
        description: "A critically acclaimed album blending various genres and innovative production."
    }
];

const albumsRated = [
    {
        albumName: "Queen Is Dead",
        artistName: "The Smiths",
        numberOfTracks: 0,
        genre: "Indie Rock",
        description: "An iconic album known for its poetic lyrics and unique sound.",
        albumRate: 8.5,
        albumCover: "https://e.snmc.io/i/600/w/b57d980792b2598b1531872e0f7797ee/12056415/the-smiths-the-queen-is-dead-Cover-Art.png"
    },
    {
        albumName: "College Dropout",
        artistName: "Kanye West",
        numberOfTracks: 0,
        genre: "Hip Hop",
        description: "Kanye West's debut album, a mix of soul samples and introspective lyrics.",
        albumRate: 10,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/a/a3/Kanyewest_collegedropout.jpg"
    },
    {
        albumName: "Currents",
        artistName: "Tame Impala",
        numberOfTracks: 0,
        genre: "Psychedelic Rock",
        description: "A critically acclaimed album with a lush, dreamy soundscape.",
        albumRate: 10,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/9/9b/Tame_Impala_-_Currents.png"
    },
    {
        albumName: "The Slow Rush",
        artistName: "Tame Impala",
        numberOfTracks: 0,
        genre: "Psychedelic Pop",
        description: "A captivating album with themes of time and change.",
        albumRate: 9.2,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/5/54/Tame_Impala_-_The_Slow_Rush.png"
    },
    {
        albumName: "Nectar",
        artistName: "Joji",
        numberOfTracks: 0,
        genre: "R&B",
        description: "Joji's second studio album, featuring a blend of lo-fi and electronic sounds.",
        albumRate: 9.4,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/1/1b/Joji_-_Nectar.png"
    },
    {
        albumName: "Astroworld",
        artistName: "Travis Scott",
        numberOfTracks: 0,
        genre: "Hip Hop",
        description: "A highly praised album with atmospheric production and dynamic tracks.",
        albumRate: 9.8,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/4/4b/Travis_Scott_-_Astroworld.png"
    },
    {
        albumName: "Blonde",
        artistName: "Frank Ocean",
        numberOfTracks: 0,
        genre: "R&B",
        description: "Frank Ocean's introspective and genre-defying masterpiece.",
        albumRate: 9.8,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg"
    },
    {
        albumName: "After Hours",
        artistName: "The Weeknd",
        numberOfTracks: 0,
        genre: "Synthwave",
        description: "A dark and cinematic album from The Weeknd.",
        albumRate: 9.2,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png"
    },
    {
        albumName: "Take Care",
        artistName: "Drake",
        numberOfTracks: 0,
        genre: "Hip Hop",
        description: "Drake's breakthrough album, blending rap with R&B influences.",
        albumRate: 9.5,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/a/ae/Drake_-_Take_Care_cover.jpg"
    },
    {
        albumName: "Awaken, My Love!",
        artistName: "Childish Gambino",
        numberOfTracks: 0,
        genre: "Funk",
        description: "A genre-bending album with strong funk and soul influences.",
        albumRate: 9.1,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/1/10/Childish_Gambino_-_Awaken%2C_My_Love%21.png"
    },
    {
        albumName: "Art Angels",
        artistName: "Grimes",
        numberOfTracks: 0,
        genre: "Electropop",
        description: "A vibrant and eclectic album from Grimes.",
        albumRate: 8.6,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/d/d9/Grimes_-_Art_Angels.png"
    },
    {
        albumName: "Starboy",
        artistName: "The Weeknd",
        numberOfTracks: 0,
        genre: "R&B",
        description: "A slick and polished album with a mix of R&B and pop influences.",
        albumRate: 8.7,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png"
    },
    {
        albumName: "Channel Orange",
        artistName: "Frank Ocean",
        numberOfTracks: 0,
        genre: "R&B",
        description: "A critically acclaimed album known for its unique storytelling and production.",
        albumRate: 10,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg"
    },
    {
        albumName: "Because Internet",
        artistName: "Childish Gambino",
        numberOfTracks: 0,
        genre: "Hip Hop",
        description: "A concept album that delves into the digital age and its effects on modern life.",
        albumRate: 9,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/7/70/Childish-gambino-because-the-internet.gif"
    },
    {
        albumName: "Visions",
        artistName: "Grimes",
        numberOfTracks: 0,
        genre: "Synthpop",
        description: "An experimental album with dreamy and ethereal soundscapes.",
        albumRate: 8.5,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/c/c1/Grimes_-_Visions_album_cover.png"
    },
    {
        albumName: "Scorpion",
        artistName: "Drake",
        numberOfTracks: 0,
        genre: "Hip Hop",
        description: "A double album that showcases Drake's versatility as an artist.",
        albumRate: 8.9,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg"
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
    {
        artistName: "Grimes",
        firstPlaceHearIt: "Online",
        artistRate: 8.9,
        sawItLive: "YES",
        artistDescription: "A Canadian musician, singer, songwriter, and record producer.",
        artistPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Grimes_Governors_Ball_2014_03_%28cropped%29.png/330px-Grimes_Governors_Ball_2014_03_%28cropped%29.png"
    },
    {
        artistName: "Childish Gambino",
        firstPlaceHearIt: "TV Show",
        artistRate: 9.1,
        sawItLive: "NO :(",
        artistDescription: "An American actor, comedian, writer, producer, director, musician, and DJ.",
        artistPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Donald_Glover_TIFF_2015.jpg/330px-Donald_Glover_TIFF_2015.jpg"
    },
    {
        artistName: "The Weeknd",
        firstPlaceHearIt: "Friend",
        artistRate: 9.5,
        sawItLive: "YES",
        artistDescription: "A Canadian singer, songwriter, and record producer.",
        artistPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/The_Weeknd_Cannes_2023.png/330px-The_Weeknd_Cannes_2023.png"
    },
    {
        artistName: "Travis Scott",
        firstPlaceHearIt: "Concert",
        artistRate: 9.0,
        sawItLive: "YES",
        artistDescription: "An American rapper, singer, songwriter, and record producer.",
        artistPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Travis_Scott_-_Openair_Frauenfeld_2019_08.jpg/330px-Travis_Scott_-_Openair_Frauenfeld_2019_08.jpg"
    },
    {
        artistName: "Joji",
        firstPlaceHearIt: "YouTube",
        artistRate: 8.8,
        sawItLive: "NO :(",
        artistDescription: "A Japanese singer, songwriter, rapper, comedian, and former YouTuber.",
        artistPhoto: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Joji_Performing_Live_in_2018_%28cropped%29_%28better_quality%29.png"
    },
    {
        artistName: "Tame Impala",
        firstPlaceHearIt: "Festival",
        artistRate: 9.2,
        sawItLive: "YES",
        artistDescription: "An Australian psychedelic music project led by multi-instrumentalist Kevin Parker.",
        artistPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Tame_Impala_at_Flow_Festival_Helsinki_Aug_10_2019_-24.jpg/450px-Tame_Impala_at_Flow_Festival_Helsinki_Aug_10_2019_-24.jpg"
    },
    {
        artistName: "Kanye West",
        firstPlaceHearIt: "Radio",
        artistRate: 9.3,
        sawItLive: "YES",
        artistDescription: "An American rapper, singer, songwriter, record producer, and fashion designer.",
        artistPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg/330px-Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg"
    },
    {
        artistName: "The Smiths",
        firstPlaceHearIt: "Friend",
        artistRate: 8.7,
        sawItLive: "NO :(",
        artistDescription: "An English rock band formed in Manchester in 1982.",
        artistPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/The_Smiths_%281984_Sire_publicity_photo%29_002.jpg/390px-The_Smiths_%281984_Sire_publicity_photo%29_002.jpg"
    },
    {
        artistName: "Taylor Swift",
        firstPlaceHearIt: "Radio",
        artistRate: 9.4,
        sawItLive: "YES",
        artistDescription: "An American singer-songwriter.",
        artistPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_%283%29.png/330px-Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_%283%29.png"
    },
    {
        artistName: "Cigarettes After Sex",
        firstPlaceHearIt: "Online",
        artistRate: 8.6,
        sawItLive: "NO :(",
        artistDescription: "An American ambient pop band.",
        artistPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/POS17_%40Kristsll-197_%2835166607974%29.jpg/390px-POS17_%40Kristsll-197_%2835166607974%29.jpg"
    },
    {
        artistName: "Lana Del Rey",
        firstPlaceHearIt: "Friend",
        artistRate: 9.0,
        sawItLive: "NO :(",
        artistDescription: "An American singer, songwriter, and record producer.",
        artistPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Lana_Del_Rey_%40_Grammy_Museum_10_13_2019_%2849311023203%29.jpg/330px-Lana_Del_Rey_%40_Grammy_Museum_10_13_2019_%2849311023203%29.jpg"
    },
    {
        artistName: "TV Girl",
        firstPlaceHearIt: "Spotify",
        artistRate: 8.5,
        sawItLive: "NO :(",
        artistDescription: "An American indie pop band.",
        artistPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/TV_Girl_au_Casa_Del_Popolo_--_1.jpg/450px-TV_Girl_au_Casa_Del_Popolo_--_1.jpg"
    }
]


export {albumsToListening, albumsRated, artists} ;
