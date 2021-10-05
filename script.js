// generate random number
const randInd = n => Math.floor(Math.random()*n);

// create an object with music to recommend [artist-songs]

const music = {
    'honne' : ['free love', 'Me & You', 'Warm on a Cold Night'],
    'Keane' : ['Bedshaped', 'This Is The Last Time', 'Somewhere Only we know', 'Everybody\'s Changing', 'Love too Much', 'Disconnected'],
    'Harry Styles' : ['Girl Crush', 'Adore You', 'Falling', 'Sign of The Times', 'Golden', 'Watermelon Sugar'],
    'Bad Bunny': ['Amorfoda', 'Dakiti', 'Yo Perreo Sola'],
    'Paté de Fuá': ['Háblame de ti', 'Cien años', 'Llevame en un Beso'],
    'Siddhartha' : ['Únicos', 'A la Distancia', 'Ecos de Miel', 'Extraños', 'Algún día (Cap. 1)', 'Me Hace Falta (Cap. 2)', 'Buscándote (Cap.7)']
};

// function for select random artist and song

const randArtist = () => {
    const artists = Object.keys(music);
    return artists[randInd(artists.length)];
};

const randSong = (artist) => {
    const songs = music[artist];
    return songs[randInd(songs.length)];
};

// function for show random message

const showMsg = () => {
    const artist = randArtist(music);
    const song = randSong(artist);

    return `Recommended song of the day is: \n${song} by ${artist}.\nEnjoy it! :)`
}; 

console.log(showMsg());