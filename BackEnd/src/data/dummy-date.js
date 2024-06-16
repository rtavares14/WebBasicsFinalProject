const albumsToListening = [
    {
        albumId: 1,
        albumName: "French Exit",
        artistName: "TV Girl",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/9/96/TV_Girl_-_French_Exit.png",
    },
    {
        albumId: 2,
        albumName: "Who Really Cares",
        artistName: "TV Girl",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/5/57/TV_Girl_-_Who_Really_Cares.png",
    },
    {
        albumId: 3,
        albumName: "Who Really Cares",
        artistName: "Lana Del Rey",
        albumImg: "https://upload.wikimedia.org/wikipedia/pt/thumb/c/cd/Lust_for_Life_-_Lana_Del_Rey.png/220px-Lust_for_Life_-_Lana_Del_Rey.png",
    },
    {
        albumId: 4,
        albumName: "Blue Banisters",
        artistName: "Lana Del Rey",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/1/10/Lana_Del_Rey_-_Blue_Banisters_cover.png",
    },
    {
        albumId: 5,
        albumName: "Honeymoon",
        artistName: "Lana Del Rey",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/7/75/Lana_Del_Rey_-_Honeymoon_%28Official_Album_Cover%29.png",
    },
    {
        albumId: 6,
        albumName: "Cigarettes After Sex",
        artistName: "Cigarettes After Sex",
        albumImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Cigarettes_After_Sex_%28album%29.svg/330px-Cigarettes_After_Sex_%28album%29.svg.png",
    },
    {
        albumId: 7,
        albumName: "Cry",
        artistName: "Cigarettes After Sex",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/4/4c/Cigarettes_After_Sex_-_Cry.png",
    },
    {
        albumId: 8,
        albumName: "Abbey Road",
        artistName: "The Beatles",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg",
    },
    {
        albumId: 9,
        albumName: "The Dark Side of the Moon",
        artistName: "Pink Floyd",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
    },
    {
        albumId: 10,
        albumName: "1989",
        artistName: "Taylor Swift",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png",
    },
    {
        albumId: 11,
        albumName: "Rumours",
        artistName: "Fleetwood Mac",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG",
    },
    {
        albumId: 12,
        albumName: "Thriller",
        artistName: "Michael Jackson",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png",
    },
    {
        albumId: 13,
        albumName: "Hotel California",
        artistName: "Eagles",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/4/49/Hotelcalifornia.jpg",
    },
    {
        albumId: 14,
        albumName: "Rumors",
        artistName: "Fleetwood Mac",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG",
    },
    {
        albumId: 15,
        albumName: "Nevermind",
        artistName: "Nirvana",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg",
    },
    {
        albumId: 16,
        albumName: "The Velvet Underground & Nico",
        artistName: "The Velvet Underground",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/0/0c/Velvet_Underground_and_Nico.jpg",
    },
    {
        albumId: 17,
        albumName: "The Beatles (White Album)",
        artistName: "The Beatles",
        albumImg: "https://upload.wikimedia.org/wikipedia/commons/2/20/TheBeatles68LP.jpg",
    },
    {
        albumId: 18,
        albumName: "My Beautiful Dark Twisted Fantasy",
        artistName: "Kanye West",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/f/f0/My_Beautiful_Dark_Twisted_Fantasy.jpg",
    },
    {
        albumId: 19,
        albumName: "Illmatic",
        artistName: "Nas",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/2/27/IllmaticNas.jpg",
    },
];

const albumsRated = [
    {
        albumName: "OK Computer",
        artistName: "Radiohead",
        albumImg: "https://e.snmc.io/i/600/w/612455e369c40dcbb26f19dec0142cdc/11993756/radiohead-ok-computer-Cover-Art.jpg",
        albumRate: 9.8
    },
    {
        albumName: "Queen Is Dead",
        artistName: "The Smiths",
        albumImg: "https://e.snmc.io/i/600/w/b57d980792b2598b1531872e0f7797ee/12056415/the-smiths-the-queen-is-dead-Cover-Art.png",
        albumRate: 8.5
    },
    {
        albumName: "College Dropout",
        artistName: "Kanye West",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/a/a3/Kanyewest_collegedropout.jpg",
        albumRate: 10
    },
    {
        albumName: "Currents",
        artistName: "Tame Impala",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/9/9b/Tame_Impala_-_Currents.png",
        albumRate: 10
    },
    {
        albumName: "The Slow Rush",
        artistName: "Tame Impala",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/5/54/Tame_Impala_-_The_Slow_Rush.png",
        albumRate: 9.2
    },
    {
        albumName: "Nectar",
        artistName: "Joji",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/1/1b/Joji_-_Nectar.png",
        albumRate: 9.4
    },
    {
        albumName: "Astroworld",
        artistName: "Travis Scott",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/4/4b/Travis_Scott_-_Astroworld.png",
        albumRate: 9.8
    },
    {
        albumName: "Blonde",
        artistName: "Frank Ocean",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg",
        albumRate: 9.8
    },
    {
        albumName: "After Hours",
        artistName: "The Weekend",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png",
        albumRate: 9.2
    },
    {
        albumName: "Take Care",
        artistName: "Drake",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/a/ae/Drake_-_Take_Care_cover.jpg",
        albumRate: 9.5
    },
    {
        albumName: "Awaken, My Love!",
        artistName: "Childish Gambino",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/1/10/Childish_Gambino_-_Awaken%2C_My_Love%21.png",
        albumRate: 9.1
    },
    {
        albumName: "Art Angels",
        artistName: "Grimes",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/d/d9/Grimes_-_Art_Angels.png",
        albumRate: 8.6
    },
    {
        albumName: "Starboy",
        artistName: "The Weeknd",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png",
        albumRate: 8.7
    },
    {
        albumName: "Channel Orange",
        artistName: "Frank Ocean",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg",
        albumRate: 10
    },
    {
        albumName: "Because Internet",
        artistName: "Childish Gambino",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/7/70/Childish-gambino-because-the-internet.gif",
        albumRate: 9
    },
    {
        albumName: "Visions",
        artistName: "Grimes",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/c/c1/Grimes_-_Visions_album_cover.png",
        albumRate: 8.5
    },
    {
        albumName: "Scorpion",
        artistName: "Drake",
        albumImg: "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg",
        albumRate: 8.9
    },
];

const artists = [
    {
        artistName: "Drake",
        artistRate: 8.2,
        sawItLive: "NO :(",
        artistPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Drake_July_2016.jpg/330px-Drake_July_2016.jpg"
    },
    {
        artistName: "Frank Ocean",
        artistRate: 10,
        sawItLive: "NO :(",
        artistPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Frank_Ocean_2022_Blonded.jpg/330px-Frank_Ocean_2022_Blonded.jpg"
    },
    {
        artistName: "Steve Lacy",
        artistRate: 8.4,
        sawItLive: "NO :(",
        artistPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Steve_Lacy_%40_Rialto_Theatre.jpg/330px-Steve_Lacy_%40_Rialto_Theatre.jpg"
    },
]


export {albumsToListening , albumsRated , artists} ;
