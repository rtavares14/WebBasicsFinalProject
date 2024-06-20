const albumsRated = [
    {
        albumName: "Queen Is Dead",
        artistName: "The Smiths",
        numberOfTracks: 3,
        genre: "Indie Rock",
        description: "An iconic album known for its poetic lyrics and unique sound.",
        albumRate: 8.5,
        albumCover: "https://e.snmc.io/i/600/w/b57d980792b2598b1531872e0f7797ee/12056415/the-smiths-the-queen-is-dead-Cover-Art.png"
    },
    {
        albumName: "College Dropout",
        artistName: "Kanye West",
        numberOfTracks: 5,
        genre: "Hip Hop",
        description: "Kanye West's debut album, a mix of soul samples and introspective lyrics.",
        albumRate: 10,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/a/a3/Kanyewest_collegedropout.jpg"
    },
    {
        albumName: "Currents",
        artistName: "Tame Impala",
        numberOfTracks: 4,
        genre: "Psychedelic Rock",
        description: "A critically acclaimed album with a lush, dreamy soundscape.",
        albumRate: 10,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/9/9b/Tame_Impala_-_Currents.png"
    },
    {
        albumName: "The Slow Rush",
        artistName: "Tame Impala",
        numberOfTracks: 6,
        genre: "Psychedelic Pop",
        description: "A captivating album with themes of time and change.",
        albumRate: 9.2,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/5/54/Tame_Impala_-_The_Slow_Rush.png"
    },
    {
        albumName: "Nectar",
        artistName: "Joji",
        numberOfTracks: 2,
        genre: "R&B",
        description: "Joji's second studio album, featuring a blend of lo-fi and electronic sounds.",
        albumRate: 9.4,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/1/1b/Joji_-_Nectar.png"
    },
    {
        albumName: "Astroworld",
        artistName: "Travis Scott",
        numberOfTracks: 4,
        genre: "Hip Hop",
        description: "A highly praised album with atmospheric production and dynamic tracks.",
        albumRate: 9.8,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/4/4b/Travis_Scott_-_Astroworld.png"
    },
    {
        albumName: "Blonde",
        artistName: "Frank Ocean",
        numberOfTracks: 3,
        genre: "R&B",
        description: "Frank Ocean's introspective and genre-defying masterpiece.",
        albumRate: 9.8,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg"
    },
    {
        albumName: "After Hours",
        artistName: "The Weeknd",
        numberOfTracks: 6,
        genre: "Synthwave",
        description: "A dark and cinematic album from The Weeknd.",
        albumRate: 9.2,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png"
    },
    {
        albumName: "Take Care",
        artistName: "Drake",
        numberOfTracks: 5,
        genre: "Hip Hop",
        description: "Drake's breakthrough album, blending rap with R&B influences.",
        albumRate: 9.5,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/a/ae/Drake_-_Take_Care_cover.jpg"
    },
    {
        albumName: "Awaken, My Love!",
        artistName: "Childish Gambino",
        numberOfTracks: 4,
        genre: "Funk",
        description: "A genre-bending album with strong funk and soul influences.",
        albumRate: 9.1,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/1/10/Childish_Gambino_-_Awaken%2C_My_Love%21.png"
    },
    {
        albumName: "Art Angels",
        artistName: "Grimes",
        numberOfTracks: 5,
        genre: "Electropop",
        description: "A vibrant and eclectic album from Grimes.",
        albumRate: 8.6,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/d/d9/Grimes_-_Art_Angels.png"
    },
    {
        albumName: "Starboy",
        artistName: "The Weeknd",
        numberOfTracks: 3,
        genre: "R&B",
        description: "A slick and polished album with a mix of R&B and pop influences.",
        albumRate: 8.7,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png"
    },
    {
        albumName: "Channel Orange",
        artistName: "Frank Ocean",
        numberOfTracks: 6,
        genre: "R&B",
        description: "A critically acclaimed album known for its unique storytelling and production.",
        albumRate: 10,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg"
    },
    {
        albumName: "Because Internet",
        artistName: "Childish Gambino",
        numberOfTracks: 2,
        genre: "Hip Hop",
        description: "A concept album that delves into the digital age and its effects on modern life.",
        albumRate: 9,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/7/70/Childish-gambino-because-the-internet.gif"
    },
    {
        albumName: "Visions",
        artistName: "Grimes",
        numberOfTracks: 3,
        genre: "Synthpop",
        description: "An experimental album with dreamy and ethereal soundscapes.",
        albumRate: 8.5,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/c/c1/Grimes_-_Visions_album_cover.png"
    },
    {
        albumName: "Scorpion",
        artistName: "Drake",
        numberOfTracks: 6,
        genre: "Hip Hop",
        description: "A double album that showcases Drake's versatility as an artist.",
        albumRate: 8.9,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg"
    }
];

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

const artists = [
    {
        artistName: "Drake",
        firstPlaceHearIt: "Youtube",
        artistRate: 8.2,
        sawItLive: "NO :(",
        artistDescription: "A Canadian rapper, singer, songwriter, and actor.",
        artistPhoto: "https://i.discogs.com/XMLZGAbzEYSoyoKjfLMiqLAvUdC-u_UdlFz0TZTjFW0/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE1MTE5/OS0xNjU1NTczODc5/LTgyMDMuanBlZw.jpeg"
    },
    {
        artistName: "Frank Ocean",
        firstPlaceHearIt: "In a house party",
        artistRate: 10,
        sawItLive: "NO :(",
        artistDescription: "An American singer, songwriter, and rapper known for his unique musical style.",
        artistPhoto: "https://images.equipboard.com/uploads/user/image/10952/big_frank-ocean.jpeg?v=1718834256"
    },
    {
        artistName: "Steve Lacy",
        firstPlaceHearIt: "Radio",
        artistRate: 8.4,
        sawItLive: "NO :(",
        artistDescription: "An American musician, singer, songwriter, and record producer.",
        artistPhoto: "https://stanforddaily.com/wp-content/uploads/2022/08/Steve-Lacy-2022-Picture-Julian-Klincewicz-Press.jpeg?w=300&h=300&crop=1"
    },
    {
        artistName: "Grimes",
        firstPlaceHearIt: "Online",
        artistRate: 8.9,
        sawItLive: "YES",
        artistDescription: "A Canadian musician, singer, songwriter, and record producer.",
        artistPhoto: "https://cdn01.justjared.com/wp-content/uploads/headlines/2020/10/grimes-movie-she-watched-with-son.jpg"
    },
    {
        artistName: "Childish Gambino",
        firstPlaceHearIt: "TV Show",
        artistRate: 9.1,
        sawItLive: "NO :(",
        artistDescription: "An American actor, comedian, writer, producer, director, musician, and DJ.",
        artistPhoto: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84a92b0e8f1802c51240b3ed0c"
    },
    {
        artistName: "The Weeknd",
        firstPlaceHearIt: "Friend",
        artistRate: 9.5,
        sawItLive: "YES",
        artistDescription: "A Canadian singer, songwriter, and record producer.",
        artistPhoto: "https://images.sk-static.com/images/media/profile_images/artists/4363463/huge_avatar"
    },
    {
        artistName: "Travis Scott",
        firstPlaceHearIt: "Concert",
        artistRate: 9.0,
        sawItLive: "YES",
        artistDescription: "An American rapper, singer, songwriter, and record producer.",
        artistPhoto: "https://i.pinimg.com/originals/07/65/7f/07657fc0a1d29a79927fbe35f98e548e.jpg"
    },
    {
        artistName: "Joji",
        firstPlaceHearIt: "YouTube",
        artistRate: 8.8,
        sawItLive: "NO :(",
        artistDescription: "A Japanese singer, songwriter, rapper, comedian, and former YouTuber.",
        artistPhoto: "https://e.snmc.io/i/300/s/ac860e6336720504ccc53b9bfba53875/9292395"
    },
    {
        artistName: "Tame Impala",
        firstPlaceHearIt: "Festival",
        artistRate: 9.2,
        sawItLive: "YES",
        artistDescription: "An Australian psychedelic music project led by multi-instrumentalist Kevin Parker.",
        artistPhoto: "https://blog.seetickets.com/wp-content/uploads/tame-impala-1369463778-300x300.jpg"
    },
    {
        artistName: "Kanye West",
        firstPlaceHearIt: "Radio",
        artistRate: 9.3,
        sawItLive: "YES",
        artistDescription: "An American rapper, singer, songwriter, record producer, and fashion designer.",
        artistPhoto: "https://fghsnews.com/wp-content/uploads/2021/01/kanye-west-attends-the-christian-dior-show-as-part-of-the-paris-fashion-week-womenswear-fall-winter-2015-2016-on-march-6-2015-in-paris-france-photo-by-dominique-charriau-wireimage-square.jpg"
    },
    {
        artistName: "The Smiths",
        firstPlaceHearIt: "Friend",
        artistRate: 8.7,
        sawItLive: "NO :(",
        artistDescription: "An English rock band formed in Manchester in 1982.",
        artistPhoto: "https://photos.bandsintown.com/thumb/205833.jpeg"
    },
    {
        artistName: "Taylor Swift",
        firstPlaceHearIt: "Radio",
        artistRate: 9.4,
        sawItLive: "YES",
        artistDescription: "An American singer-songwriter.",
        artistPhoto: "https://resizing.flixster.com/v7rx64b6hdOdKMdpj-Ov1l-wt6I=/300x300/v2/https://resizing.flixster.com/8tk6CP6Wek1zsz-P7_d8poo1o48=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzFkZjVkYTgzLWI5MWEtNGIwNS1hYzU4LWU4ODk1ZWNjMmZlOS5qcGc="
    },
    {
        artistName: "Cigarettes After Sex",
        firstPlaceHearIt: "Online",
        artistRate: 8.6,
        sawItLive: "NO :(",
        artistDescription: "An American ambient pop band.",
        artistPhoto: "https://images.sk-static.com/images/media/profile_images/artists/4114466/huge_avatar"
    },
    {
        artistName: "Lana Del Rey",
        firstPlaceHearIt: "Friend",
        artistRate: 9.0,
        sawItLive: "NO :(",
        artistDescription: "An American singer, songwriter, and record producer.",
        artistPhoto: "https://i.scdn.co/image/ab6761610000e5ebb99cacf8acd5378206767261"
    },
    {
        artistName: "TV Girl",
        firstPlaceHearIt: "Spotify",
        artistRate: 8.5,
        sawItLive: "NO :(",
        artistDescription: "An American indie pop band.",
        artistPhoto: "https://f4.bcbits.com/img/a1540259462_2.jpg"
    }
]

const tracks = [
    { trackName: "The Queen Is Dead", trackDuration: "6:24", trackRate: 9, trackNumber: 1, album_id: 1 },
    { trackName: "Frankly, Mr. Shankly", trackDuration: "2:17", trackRate: 8, trackNumber: 2, album_id: 1 },
    { trackName: "I Know It's Over", trackDuration: "5:48", trackRate: 9, trackNumber: 3, album_id: 1 },
    { trackName: "We Don't Care", trackDuration: "3:59", trackRate: 9, trackNumber: 1, album_id: 2 },
    { trackName: "Graduation Day", trackDuration: "1:22", trackRate: 8, trackNumber: 2, album_id: 2 },
    { trackName: "All Falls Down", trackDuration: "3:43", trackRate: 10, trackNumber: 3, album_id: 2 },
    { trackName: "Spaceship", trackDuration: "5:24", trackRate: 9, trackNumber: 4, album_id: 2 },
    { trackName: "Jesus Walks", trackDuration: "3:13", trackRate: 10, trackNumber: 5, album_id: 2 },
    { trackName: "Let It Happen", trackDuration: "7:46", trackRate: 10, trackNumber: 1, album_id: 3 },
    { trackName: "Nangs", trackDuration: "1:48", trackRate: 8, trackNumber: 2, album_id: 3 },
    { trackName: "The Moment", trackDuration: "4:15", trackRate: 9, trackNumber: 3, album_id: 3 },
    { trackName: "Yes I'm Changing", trackDuration: "4:30", trackRate: 10, trackNumber: 4, album_id: 3 },
    { trackName: "One More Year", trackDuration: "5:22", trackRate: 9, trackNumber: 1, album_id: 4 },
    { trackName: "Instant Destiny", trackDuration: "3:39", trackRate: 8, trackNumber: 2, album_id: 4 },
    { trackName: "Borderline", trackDuration: "4:34", trackRate: 9, trackNumber: 3, album_id: 4 },
    { trackName: "Posthumous Forgiveness", trackDuration: "6:06", trackRate: 10, trackNumber: 4, album_id: 4 },
    { trackName: "Breathe Deeper", trackDuration: "6:13", trackRate: 9, trackNumber: 5, album_id: 4 },
    { trackName: "Tomorrow's Dust", trackDuration: "5:26", trackRate: 8, trackNumber: 6, album_id: 4 },
    { trackName: "Ew", trackDuration: "3:32", trackRate: 9, trackNumber: 1, album_id: 5 },
    { trackName: "MODUS", trackDuration: "3:27", trackRate: 8, trackNumber: 2, album_id: 5 },
    { trackName: "STARGAZING", trackDuration: "4:30", trackRate: 10, trackNumber: 1, album_id: 6 },
    { trackName: "CAROUSEL", trackDuration: "3:00", trackRate: 9, trackNumber: 2, album_id: 6 },
    { trackName: "SICKO MODE", trackDuration: "5:12", trackRate: 10, trackNumber: 3, album_id: 6 },
    { trackName: "STOP TRYING TO BE GOD", trackDuration: "5:38", trackRate: 9, trackNumber: 4, album_id: 6 },
    { trackName: "Nikes", trackDuration: "5:14", trackRate: 9, trackNumber: 1, album_id: 7 },
    { trackName: "Ivy", trackDuration: "4:09", trackRate: 10, trackNumber: 2, album_id: 7 },
    { trackName: "Pink + White", trackDuration: "3:04", trackRate: 10, trackNumber: 3, album_id: 7 },
    { trackName: "Alone Again", trackDuration: "4:10", trackRate: 9, trackNumber: 1, album_id: 8 },
    { trackName: "Too Late", trackDuration: "3:59", trackRate: 8, trackNumber: 2, album_id: 8 },
    { trackName: "Hardest to Love", trackDuration: "3:31", trackRate: 9, trackNumber: 3, album_id: 8 },
    { trackName: "Scared to Live", trackDuration: "3:11", trackRate: 8, trackNumber: 4, album_id: 8 },
    { trackName: "Snowchild", trackDuration: "4:08", trackRate: 9, trackNumber: 5, album_id: 8 },
    { trackName: "Escape from LA", trackDuration: "5:55", trackRate: 9, trackNumber: 6, album_id: 8 },
    { trackName: "Over My Dead Body", trackDuration: "4:32", trackRate: 9, trackNumber: 1, album_id: 9 },
    { trackName: "Shot for Me", trackDuration: "3:44", trackRate: 8, trackNumber: 2, album_id: 9 },
    { trackName: "Headlines", trackDuration: "3:56", trackRate: 9, trackNumber: 3, album_id: 9 },
    { trackName: "Crew Love", trackDuration: "3:28", trackRate: 9, trackNumber: 4, album_id: 9 },
    { trackName: "Take Care", trackDuration: "4:37", trackRate: 10, trackNumber: 5, album_id: 9 },
    { trackName: "Me and Your Mama", trackDuration: "6:19", trackRate: 9, trackNumber: 1, album_id: 10 },
    { trackName: "Have Some Love", trackDuration: "3:44", trackRate: 8, trackNumber: 2, album_id: 10 },
    { trackName: "Boogieman", trackDuration: "3:36", trackRate: 9, trackNumber: 3, album_id: 10 },
    { trackName: "Zombies", trackDuration: "4:42", trackRate: 8, trackNumber: 4, album_id: 10 },
    { trackName: "California", trackDuration: "3:18", trackRate: 9, trackNumber: 1, album_id: 11 },
    { trackName: "Scream", trackDuration: "2:22", trackRate: 8, trackNumber: 2, album_id: 11 },
    { trackName: "Flesh Without Blood", trackDuration: "4:24", trackRate: 9, trackNumber: 3, album_id: 11 },
    { trackName: "Belly of the Beat", trackDuration: "3:25", trackRate: 8, trackNumber: 4, album_id: 11 },
    { trackName: "Kill V. Maim", trackDuration: "4:06", trackRate: 10, trackNumber: 5, album_id: 11 },
    { trackName: "Starboy", trackDuration: "3:50", trackRate: 9, trackNumber: 1, album_id: 12 },
    { trackName: "Party Monster", trackDuration: "4:09", trackRate: 8, trackNumber: 2, album_id: 12 },
    { trackName: "False Alarm", trackDuration: "3:40", trackRate: 8, trackNumber: 3, album_id: 12 },
    { trackName: "Thinkin Bout You", trackDuration: "3:20", trackRate: 10, trackNumber: 1, album_id: 13 },
    { trackName: "Sierra Leone", trackDuration: "2:28", trackRate: 8, trackNumber: 2, album_id: 13 },
    { trackName: "Sweet Life", trackDuration: "4:22", trackRate: 9, trackNumber: 3, album_id: 13 },
    { trackName: "Super Rich Kids", trackDuration: "5:04", trackRate: 9, trackNumber: 4, album_id: 13 },
    { trackName: "Pilot Jones", trackDuration: "3:04", trackRate: 8, trackNumber: 5, album_id: 13 },
    { trackName: "Crack Rock", trackDuration: "3:44", trackRate: 9, trackNumber: 6, album_id: 13 },
    { trackName: "Crawl", trackDuration: "3:29", trackRate: 9, trackNumber: 1, album_id: 14 },
    { trackName: "WORLDSTAR", trackDuration: "4:05", trackRate: 8, trackNumber: 2, album_id: 14 },
    { trackName: "Genesis", trackDuration: "4:15", trackRate: 9, trackNumber: 1, album_id: 15 },
    { trackName: "Oblivion", trackDuration: "4:12", trackRate: 9, trackNumber: 2, album_id: 15 },
    { trackName: "Eight", trackDuration: "1:50", trackRate: 8, trackNumber: 3, album_id: 15 },
    { trackName: "Survival", trackDuration: "2:16", trackRate: 9, trackNumber: 1, album_id: 16 },
    { trackName: "Nonstop", trackDuration: "3:58", trackRate: 8, trackNumber: 2, album_id: 16 },
    { trackName: "Elevate", trackDuration: "3:04", trackRate: 8, trackNumber: 3, album_id: 16 },
    { trackName: "Emotionless", trackDuration: "5:02", trackRate: 9, trackNumber: 4, album_id: 16 },
    { trackName: "God's Plan", trackDuration: "3:18", trackRate: 10, trackNumber: 5, album_id: 16 },
    { trackName: "I'm Upset", trackDuration: "3:34", trackRate: 8, trackNumber: 6, album_id: 16 }
];


export {albumsToListening, albumsRated, artists, tracks} ;
