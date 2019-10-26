//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array
//creo un array vuoto
var listanum = [];
var numero;

//inizializzo un ciclo for per chiedere 6 volte un unmero, uso il modulo per vedere se è pari o dispari
for (var i = 0; i <6 ; i++)
{
  numero = parseInt(prompt("inserisci un numero"));

  if (numero % 2 == 0) {
    console.log("il numero inserito è pari");
  }else {
    //inserisco il numero nella lista
    listanum.push(numero);
  }
}

console.log(listanum);
