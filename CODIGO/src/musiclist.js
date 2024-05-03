import {writable} from 'svelte/store';

export const musicList = writable([
    { 
        image: "FOTO_1.jpg",
        audio: "MUSIC_1.mp3",
        name: "Dark Alley Deals",
        artist: "Aaron Kenny"

    },
    { 
        image: "FOTO_2.jpg",
        audio: "MUSIC_2.mp3",
        name: "Voyage",
        artist: "LEMMiNO"

    },
]);
