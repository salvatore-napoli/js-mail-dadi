// Verifica indirizzo email
var mail = prompt('Qual è il tuo indirizzo email?');
var whitelist = ['mariorossi@gmail.com', 'ciao@hotmail.it', 'ok@libero.it']; // Lista di indirizzi consentiti
var mailOutput = document.getElementById('mail-output');
var diceGame = document.getElementById('dice-game');
var mailVerified = false;

// Versione classica
mailOutput.innerText = 'Scusa, non hai i permessi necessari ad accedere al gioco.';
mailOutput.className = 'text-red text-bold text-center font-30';

for (var i = 0; i < whitelist.length; i++) {
  if (mail === whitelist[i]) {
    mailVerified = true;
  }
}

if (mailVerified) {
  mailOutput.innerText = 'Complimenti! Puoi accedere al gioco.';
  mailOutput.className = 'text-green text-bold text-center font-30';
  diceGame.style.display = 'block';
}

// // Versione alternativa
// var checkMail = whitelist.includes(mail);
// if (checkMail === true) {
//   mailOutput.innerText = 'Complimenti! Puoi accedere al gioco.';
//   mailOutput.className = 'text-green text-bold text-center font-30';
//   diceGame.style.display = 'block';
// } else {
//   mailOutput.innerText = 'Scusa, non hai i permessi necessari ad accedere al gioco.';
//   mailOutput.className = 'text-red text-bold text-center font-30';
// }


// Gioco dei dadi
var yourDice = document.getElementById('your-dice');
var yourResult = document.getElementById('your-result');
var opponentResult = document.getElementById('opponent-result');
var gameResult = document.getElementById('game-result');

document.getElementsByTagName('img')[0].addEventListener('click', function rollDice () {
  var min, max, yourDiceResult, opponentDiceResult;
  min = 1;
  max = 6;
  yourDiceResult = Math.floor(Math.random() * (max + 1 - min) + min);
  opponentDiceResult = Math.floor(Math.random() * (max + 1 - min) + min);
  yourResult.innerText = yourDiceResult;
  opponentResult.innerText = opponentDiceResult;
  if (yourDiceResult > opponentDiceResult) {
    gameResult.innerText = 'VITTORIA';
  } else if (yourDiceResult < opponentDiceResult) {
    gameResult.innerText = 'SCONFITTA';
  } else {
    gameResult.innerText = 'PAREGGIO';
  }
}
)
