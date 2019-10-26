//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
var parolauno, paroladue;

//chiedo all'utente di inserire la prima parola

parolauno = prompt("Ciao utente inserisci una parola");

//chiedo all'utente di inserire la seconda parola

paroladue = prompt("Ciao utente inserisci una seconda parola");

if (parolauno.length > paroladue.length ) {
  console.log(paroladue, " ", parolauno);

}else if (paroladue.length > parolauno.length) {
  console.log(parolauno, " ", paroladue);

}else if (parolauno.length = paroladue.length){

console.log("le due parole sono lunghe uguali");
}
else if (parolauno === paroladue ) {
  console.log("hai inserito la stessa parola ma dai non vale");

}
