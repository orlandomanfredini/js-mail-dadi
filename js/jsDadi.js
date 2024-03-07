// ---- Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// collego bottone al mio js
const buttonStart = document.getElementById('btn-start');

// quando avviene il click sul button 
buttonStart.addEventListener('click', function(){
    const player = document.getElementById('number-box');
    const computer = document.getElementById('number-box-computer');
    const winner = document.getElementById('output-winner')

    const dado1 = Math.floor(Math.random()* 6) + 1; //number
    player.innerHTML = dado1

    const dado2 = Math.floor(Math.random()* 6) + 1; //number
    computer.innerHTML = dado2

    if (dado1 > dado2){
        winner.innerHTML = 'Player 1'
        
    }else if (dado1 === dado2){
        winner.innerHTML = 'Pareggio'
        
        
    }else{
        winner.innerHTML = 'Computer'
        
    }

    winner.classList.add('text-center')



    const playerWinner = dado1 > dado2;


    

})

