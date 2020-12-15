// Verifica indirizzo email e password
var mail = prompt('Qual è il tuo indirizzo email?');
var password = prompt('Qual è la password?');
var whitelist = ['mariorossi@gmail.com', 'ciao@hotmail.it', 'ok@libero.it']; // Lista di indirizzi consentiti
var correctPassword = 'lanciadadi';
var mailOutput = document.getElementById('mail-output');
var diceGame = document.getElementById('dice-game');
var mailVerified = false;

// Versione classica
mailOutput.innerText = 'Scusa, non hai i permessi necessari ad accedere al gioco.';
mailOutput.className = 'text-red text-bold text-center font-30';

for (var i = 0; i < whitelist.length; i++) {
  if (mail === whitelist[i] && password === correctPassword) {
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
// if (checkMail === true && password === correctPassword) {
//   mailOutput.innerText = 'Complimenti! Puoi accedere al gioco.';
//   mailOutput.className = 'text-green text-bold text-center font-30';
//   diceGame.style.display = 'block';
// } else {
//   mailOutput.innerText = 'Scusa, non hai i permessi necessari ad accedere al gioco.';
//   mailOutput.className = 'text-red text-bold text-center font-30';
// }


// Gioco dei dadi
var yourDice = document.getElementById('your-dice');
var yourResults = document.getElementsByClassName('your-result');
var opponentResults = document.getElementsByClassName('opponent-result');
var gameResult = document.getElementById('game-result');

document.getElementsByTagName('img')[0].addEventListener('click', function rollDice () {
  var min, max, yourDiceResult, opponentDiceResult;
  min = 1;
  max = 6;

  for (var i = 0; i < yourResults.length; i++) {
    yourDiceResult = Math.floor(Math.random() * (max + 1 - min) + min);
    yourResults[i].innerText = yourDiceResult;
    opponentDiceResult = Math.floor(Math.random() * (max + 1 - min) + min);
    opponentResults[i].innerText = opponentDiceResult;
  }
}
)
