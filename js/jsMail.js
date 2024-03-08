// --- Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// creo collegamento con input e button (del DOM) dove utente inserisce mail

const emailUser = document.getElementById('mail-user'); 
const buttonCheck = document.getElementById('check-button');

// come richiesto...
 // controllo che utente inserisca mail valida:
 // ascoltando l'evento con il click sul button

 buttonCheck.addEventListener('click', function(){

    const esitEmail = document.getElementById('box-mail');
    
    // dopo dichiaro array per lwegittimare le mail
    const listAccess = ['orlando.manfre1@gmail.com', 'lelemora@78.it', 'giovannipaolosecondo@gmail.com', 'cristiano.ronaldo@siuuu.com']
    
    // per poi eseguire la verifica con il ciclo
    for(let i = 0; i <= listAccess.length; i ++ ){
        
        
        //SE mail coincide stampo email corretta
        if(listAccess.includes(emailUser.value)){
            esitEmail.innerHTML = 'Email corretta'
        }else{
            esitEmail.innerHTML = 'Email non trovata'
        }
         
        // ALTRIMWENTI stampo mail non coincide  
          
        

        
        
        
    
    }

    
     


 })
 
 

  
