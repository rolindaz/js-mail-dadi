//Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). Si può fare? Certo che si basta ragionare un po’. Nota: Non è necessario provvedere alla validazione delle email

// Crea una lista di email di invitati ad una festa.
// Procederei creando un array 'guests'

let guests = [
    "rolinda@duck.com",
    "saverio@duck.com",
    "fatih@duck.com",
    "giorgia@duck.com",
    "giulia@duck.com",
    "serena@duck.com",
    "bianca@duck.com",
    "michele@duck.com",
    "francesco@duck.com",
    "angelo@duck.com",
    "edoardo@duck.com",
    "gianni@duck.com",
    "sorina@duck.com"
];

// Chiedi all’utente la sua email
// Procederei creando un prompt con richiesta email - verificare se c'è un tipo specifico - e salvando il dato in una variabile 'userEmail'

let userEmail = prompt('Hi! Please enter your email address');

// controlla che sia nella lista di chi può accedere
// Creerei una variabile vuota isPresent che mi dia un valore booleano di ritorno una volta verificata

let isPresent = null

for (i = 0; i < guests.length; i++) {
    // Poi verificherei che userEmail sia presente in guests abbinando a isPresent il valore true
    if (userEmail === guests[i]) {
        isPresent = true;
        // stampa un messaggio appropriato sull’esito del controllo
        // Farei un console.log con un messaggio positivo in caso l'inclusione sia verificata 
        console.log(alert("Congrats! You're going to attend our awesome party!"));
        break;
        // e bloccherei il ciclo
    } else {
        isPresent = false;
        // e negativo in caso contrario
        console.log(alert("We're sorry but it looks like you were not invited, maybe next time!"));
        break;
    };
};






