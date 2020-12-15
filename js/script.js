// Verifica indirizzo email
var mail = prompt('Qual è il tuo indirizzo email?');
var whitelist = ['mariorossi@gmail.com', 'ciao@hotmail.it', 'ok@libero.it']; // Lista di indirizzi consentiti
var mailVerified = document.getElementById('mail-verify');

/* Versione classica
for (var i = 0; i < whitelist.length; i++) {
  if (mail === whitelist[i]) {
    mailVerified.innerText = 'Complimenti! Puoi accedere al gioco.';
    mailVerified.className = 'text-green text-bold text-center font-30';
  } else {
    mailVerified.innerText = 'Scusa, non hai i permessi necessari ad accedere al gioco.';
    mailVerified.className = 'text-red text-bold text-center font-30';
  }
}
*/

// Versione alternativa
var checkMail = whitelist.includes(mail);
if (checkMail === true) {
  mailVerified.innerText = 'Complimenti! Puoi accedere al gioco.';
  mailVerified.className = 'text-green text-bold text-center font-30';
} else {
  mailVerified.innerText = 'Scusa, non hai i permessi necessari ad accedere al gioco.';
  mailVerified.className = 'text-red text-bold text-center font-30';
}
