var primonumero, secondonumero;

//chiedo all'utente di inserire il primo numero
primonumero = parseInt(prompt("inserisci un numero"));

//chiedo all'utente di inserire il secondo numero
secondonumero = parseInt(prompt("inserisci un altro numero"));

if (primonumero > secondonumero ) {
  document.getElementById("numgrande").innerHTML = primonumero;

}else if (secondonumero > primonumero ) {
  document.getElementById("numgrande").innerHTML = secondonumero;
}
else {
  document.getElementById("numgrande").innerHTML = "i numeri sono uguali";
}
