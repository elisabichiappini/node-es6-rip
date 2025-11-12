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