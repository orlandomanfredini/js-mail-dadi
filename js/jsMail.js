// --- Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// creo collegamento con input e button (del DOM) dove utente inserisce mail

const emailUser = document.getElementById('mail-user'); 
const buttonCheck = document.getElementById('check-button')

// come richiesto...
 // controllo che utente inserisca mail valida:
 // ascoltando l'evento con il click sul button

 buttonCheck.addEventListener('click', function(){
    
    // dopo dichiaro array per lwegittimare le mail
    const listAccess = ['orlando.manfre1@gmail.com', 'lelemora@78.it', 'giovannipaolosecondo@gmail.com', 'cristiano.ronaldo@siuuu.com']
    
    // per poi eseguire la verifica con il ciclo
    for(let email = ''; email < listAccess.length; email ++ ){
        console.log(listAccess[email])
    }

    //SE mail coincide stampo email corretta
    // ALTRIMWENTI stampo mail non coincide  


 })
 
 

  