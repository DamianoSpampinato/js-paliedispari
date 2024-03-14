//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.
const userSelection = prompt('Scegli pari o dispari');
let userNumber = parseInt(prompt('Inserisci un numero'));

let randomNumber = getRndInteger (1, 5);
    console.log(randomNumber);
let sum = randomNumber + userNumber;
let EvenOrOddResult = isEvenOrOdd(sum);
alert(sum + ' ' +EvenOrOddResult);

let outputMessage;
if(userSelection === 'pari' && EvenOrOddResult === 'è uscito Pari' || userSelection === 'dispari' && EvenOrOddResult === "è uscito Dispari!"){
    outputMessage = 'Hai vinto!'
} else {
    outputMessage = 'Hai perso!'
}
alert(outputMessage);


//functions
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function isEvenOrOdd (sumDone, result){
    if (sumDone % 2 === 0){
        result = "è uscito Pari!";
    } else {
        result = "è uscito Dispari!";
    }
    return result;

}