//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

//creo una lista di nomi
var lista =["Rossi","Verdi","Gialli","Viola"];
//chiedo all'utente di inserire un cognome
var nome = prompt("Ciao inserisci un nome");

var invitato = false;
for (var i = 0; i < lista.length; i++) {
  if (lista[i] === nome) {
    invitato = true;
  }
}

if (invitato) {
console.log("sei in lista");
} else {
  console.log("non sei in lista");
}
