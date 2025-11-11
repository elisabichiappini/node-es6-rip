'use strict';
console.log('ciao');
const students = ['Anna', 'Sara', 'Paolo'];
//map
const user = (array) => {
    array.forEach((element, index) => {
        console.log(element, index);
    });
} 
//richiamo la funzione
user(students);