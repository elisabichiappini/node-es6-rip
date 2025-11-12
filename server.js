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

//operatore ternario
let nome1 = 'Mario';
console.log(nome1.startsWith('Ma') ? 'Il nome corrisponde' : 'Il nome non ha corrispondenza');

//classi
class User {
    constructor(nome = 'Elisa', cognome = 'Chiappini', age = 35 ){
    this.nome = nome;
    this.cognome = cognome;
    this.age = age;
}
sayHi(){
    console.log(`ciao sono ${this.nome} ${this.cognome} e ho ${this.age} anni`)
    }
}

const utente = new User();
const utente1 = new User('Sara', 'Davanzo', 40);

utente.sayHi();
utente1.sayHi();

class SuperUser {
    constructor(nome, cognome, age){
    this.nome = nome;
    this.cognome = cognome;
    this.age = age;
}
sayHi(){
    console.log(`ciao sono ${this.nome} ${this.cognome} e ho ${this.age} anni`)
    }
}

const a = new SuperUser('Giovanni', 'Rosa', 90);
const b = new SuperUser('Sara', 'Davanzo', 40);

a.sayHi();
b.sayHi();

class Genio {
    nome = 'Savana';
    cognome = "Tropicale";
    age = 11
};

const geniusss = new Genio();

console.log(`mi chiamo ${geniusss.nome} ${geniusss.cognome} e ho la bellezza di ${geniusss.age} anni`)