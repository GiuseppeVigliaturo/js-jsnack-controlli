//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

var somma, sommafinale;
//inizializzo il ciclo for

/*
sommafinale = 0;
somma = 0;
for (var i = 0; i <5; i++) {
  num = parseInt(prompt("inserisci un numero"));
  console.log(num);
  somma += num;
}
sommafinale = somma;
console.log("la somma è: ",sommafinale)
*/
somma = 0;
sommafinale = 0;
var i = 0;
while (i < 5) {
  num = parseInt(prompt("inserisci un numero"));
  console.log(num);
  somma += num;
  i++;
}
sommafinale = somma;
console.log("la somma è: ",sommafinale);
