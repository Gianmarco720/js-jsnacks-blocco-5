/* 
Scrivi una funzione che accetti una stringa come argomento e la ritorni
girata (es. Ciao -> oaiC)
*/

// chiedo all'utente una parola da girare
const userWord = prompt('Inserisci una parola che verrà invertita');

// invoco la funzione
const invertedStr = reverseWord(userWord);

// comunico la parola invertita tramite alert()
alert(invertedStr);
console.log(invertedStr);

// creo una funzione per girare la stringa
function reverseWord(str) {

    const newArray = str.split('');
    const reverseArray = newArray.reverse();
    const joinArray = reverseArray.join('');

    return joinArray;
}