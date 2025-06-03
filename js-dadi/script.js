// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto. Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
// genero due numeri random con math.random e li salvo in due variabili, una per il pc e una per il giocatore

let playerNumber = (Math.random() * 100).toFixed(0), pcNumber = (Math.random() * 100).toFixed(0);
console.log(`Numero giocatore: ${playerNumber}; Numero computer: ${pcNumber}`, alert(`I dadi sono tratti! Chi vincerà?`));


// Stabilire il vincitore, in base a chi fa il punteggio più alto.

if (playerNumber > pcNumber) {
    console.log(alert('Congratulazioni, hai vinto!'));
} else if (pcNumber > playerNumber) {
    console.log(alert('Vince il computer!'));
} else {
    console.log(alert('Incredibile, è un pareggio!'));
};

// Correzione in classe:

let playerNumber1 = Math.floor(Math.random() * 6) + 1, pcNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(`Numero giocatore: ${playerNumber1}; Numero computer: ${pcNumber1}`, alert(`I dadi sono tratti! Chi vincerà?`));

if (playerNumber1 > pcNumber1) {
    console.log(alert('Congratulazioni, hai vinto!'));
} else if (pcNumber1 > playerNumber1) {
    console.log(alert('Vince il computer!'));
} else {
    console.log(alert('Incredibile, è un pareggio!'));
};