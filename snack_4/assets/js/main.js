/* 
Scrivi una funzione che fonda due array (aventi lo stesso numero di
elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

// creo un primo array
const songs = [
    'Alive',
    'Smells Like Teen Spirit',
    'Master Of Puppets',
    'Dentro Marilyn',
    'Rooster'
];
console.log(songs);

// creo un secondo array
const artists = [
    'Pearl Jam',
    'Nirvana',
    'Metallica',
    'Afterhours',
    'Alice In Chains'
];
console.log(artists);

// invoco la funzione per unire gli array
const songsAndArtists = mergeArray(songs, artists);
console.log(songsAndArtists);

// creo una funzione che mi permette di unire gli array
function mergeArray(firstArray, secondArray) {
    let thirdArray = [];
    
    for (let i = 0; i < firstArray.length; i++) {
        thirdArray.push(firstArray[i], secondArray[i])
    }
    
    return thirdArray;
};