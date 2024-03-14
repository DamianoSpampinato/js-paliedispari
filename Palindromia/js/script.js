//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma
//Su internet ci sono soluzioni con join e reverse, non potete usarle!
let userWord = prompt('inserisci una parola');
let wordbackwards = makeWordReverse(userWord);
console.log(wordbackwards);


function makeWordReverse(word){
    let wordReverse = '';
    for(let i = word.length - 1; i >= 0; i--){
        let thisLetter = word[i];
        wordReverse += thisLetter;
    }
    return wordReverse;
}
