'use strict';

const students = ['Anna', 'Sara', 'Paolo'];
const numeri = [1,3,4,6,7,8,11];
//forEach
const user = (array) => {
    array.forEach((element, index) => {
        console.log(`studente di nome ${element}, con il codice ${index}`);
    });
} 
//richiamo la funzione
user(students);

//map
const multipli = (array) => {
    return array.map((element) => element*element);
}
console.log(multipli(numeri));

//filter
const filtro = (array) => {
    const pari = array.filter(element => element % 2 ===0);
    return pari;
}
console.log(filtro(numeri));

//truthly
let nome = 'Elisa';
let price = 0;
let age = null;

if(nome) {
    //viene eseguito perchè la stringa per essere vera deve non essere vuota
    console.log(`Il nostro personaggio ha un nome: ${nome}`);
}
if(price) {
    //non viene eseguito perchè 0 non è un valore numerico
    console.log(`il nostro personaggio ha acquistato una mela a ${price} €`)
}

if(age) {
    //non viene eseguito perchè null con undefined non ha valore di tipo
    console.log('questo utente non ha un\'eta precisa');
}