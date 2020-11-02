// JSnack 1
// Creare un array di oggetti
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore con handlebars.

var biciclette = [
  {
    nome: 'Luciano',
    peso: 30
  },
  {
    nome: 'Emanuele',
    peso: 12
  },
  {
    nome: 'Maria',
    peso: 21
  },
  {
    nome: 'Felicia',
    peso: 9
  }
];

//handlebars
var source = $('#bike-template').html();
var template = Handlebars.compile(source);

//Default
var biciclettaLeggera = biciclette[0];

for (var i = 0; i < biciclette.length; i++) {
  if (biciclette[i].peso < biciclettaLeggera.peso) {
    biciclettaLeggera = biciclette[i];
  }
}

console.log(biciclettaLeggera);

//Stampare i risultati
var data = {
  nome: biciclettaLeggera.nome,
  peso: biciclettaLeggera.peso
};

var html = template(data);
$('.container').append(html);


// JSnack 2
// Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
// Chiedere due numeri all'utente per definire la posizione iniziale e finale dal quale estrarre i valori dall'array originale.
// Il nuovo array deve contenere gli elementi dell'array originale aventi la posizione (indice array)  compresa tra i due numeri inseriti dall'utente.

//Array nomi scelti da me
var mioArray = ['Gabriele', 'Gennaro', 'Elisabetta', 'Massimo', 'Cinzia'];
var index = mioArray.length - 1;
var minimo = parseInt( prompt('Indici di inizio, tra 0 e ' + index) );
var massimo = parseInt( prompt('Indici di fine(superiore a indice inizio), tra 0 e ' + index) );

//Nuovo Array
var nuovoArray = [];

for (var i = 0; i < mioArray.length; i++) {
  if (minimo <= i && massimo >= i) {
    nuovoArray.push(mioArray[i]);
  }
}

console.log(mioArray);
console.log(nuovoArray);


// JSnack 3
// Creiamo un array di oggetti (scelti da voi)
// Creiamo una copia da questo array di partenza e aggiungiamo ai singoli elementi una nuova proprietà position che contiene una lettera casuale.
// Non dobbiamo modificare l'array iniziale.

//Array di oggetti creato da me
var arrayCreato = [
  {nome: 'Tommaso', cognome: 'Crippa', eta: '26'},
  {nome: 'Giulia', cognome: 'Settembrini', eta: '48'},
  {nome: 'Antonella', cognome: 'Rossi', eta: '17'}
];

var nuovoArrayCreato = [];

// nuovoArrayCreato[i].position = 'c'
for (var i = 0; i < arrayCreato.length; i++) {
  var ogg = {
    nome: arrayCreato[i].nome,
    cognome: arrayCreato[i].cognome,
    eta: arrayCreato[i].eta,
    position: genPosition()
  }

  nuovoArrayCreato.push(ogg);
}

console.table(arrayCreato);
console.table(nuovoArrayCreato);

//Random position
function genPosition() {
  var letters = 'abcdefghijklmnopqrstuvwxyz';
  var letter = letters[randNumero(0, letters.length - 1)];
  return letter;
}

//Randon number
function randNumero(min, max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}
