//filesystem moduli built-in
const fs = require('fs'); //qui c'è cjs

fs.readFile('demoFile.html', 'utf8', (err, data) =>  {
    if(err) {
        console.error('x errore nella lettura del file', err.message);
        return;
    }
    console.log('contenuto di demoFile.html');
    console.log(data);
});
fs.appendFile('myNewFile.txt', 'Hello world', (err) => {
    if(err) {
        console.log('errore nella scrittura del file:', err.message);
        return;
    };
    console.log('file aggiornato e salvato');
})
//per eseguire questo codice dare comando in terminale node server1.js

