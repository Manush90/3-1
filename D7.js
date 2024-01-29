/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
function concatenaParole(str1, str2) {
  let parola1 = str1.substring(0, 2); // Seleziono i primi 2 caratteri della seconda stringa
  let parola2 = str2.substring(str2.length - 3); // Seleziono gli ultimi 3 caratteri della seconda stringa
  let risultato = parola1 + parola2; // unisco le due parole

  risultato = risultato.toUpperCase(); // Converto il risultato in maiuscolo

  console.log(risultato); // mostro le due parole
}

concatenaParole("forza", "roma");
/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
function RandomArray() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    const numeroCasuale = Math.floor(Math.random() * 101); // inserisco 101 perchè arrotondando per difetto il 101 non è compreso
    array.push(numeroCasuale);
  }
  return array;
}

const arrayCasuale = RandomArray();
console.log(arrayCasuale);

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
function trovaPari(array) {
  const pari = array.filter(function (numero) {
    return numero % 2 === 0;
  });
  return pari;
}

let arrayNumerico = [10, 41, 35, 44, 55, 78, 73, 82, 49, 10];
let pari = trovaPari(arrayNumerico);
console.log("Valori pari:", pari);

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
function sommaArray(array) {
  const somma = 0;

  array.forEach(function (elemento) {
    if (typeof elemento === "number" && !isNaN(elemento)) {
      somma += elemento;
    }
  });
  return somma;
}

var arrayNumbers = [5, 7, 45, 49, 90];
var risultato = sommaArray(arrayNumbers);
console.log("La somma dell'array è:", risultato);

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
function sommaArray(array) {
  const somma = array.reduce(function (accumulatore, elemento) {
    if (typeof elemento === "number" && !isNaN(elemento)) {
      return accumulatore + elemento; // Aggiungo l'accumulatore
    } else {
      return accumulatore; // Se l'elemento non è un numero, ritorna solo l'accumulatore
    }
  }, 0); // L'accumulatore inizia da 0

  return somma;
}

var risultato = sommaArray(arrayNumbers);
console.log("La somma dell'array è:", risultato);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
function lunghezzaStringhe(arrayDiStringhe) {
  const lunghezze = arrayDiStringhe.map(function (stringa) {
    return stringa.length;
  });
  return lunghezze;
}

const arrayDiStringhe = ["EPICODE", "is", "great"];
const lunghezze = lunghezzaStringhe(arrayDiStringhe);
console.log("Lunghezze delle stringhe:", lunghezze);

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
function newArrayDispari() {
  let arrayDispari = [];
  for (let i = 1; i <= 99; i += 2) {
    //i=a 1 per far partire il ciclo da 1 fino a <=99 quindi compreso aumentando di 2 in modo che praticamente salti i numeri pari
    arrayDispari.push(i);
  }
  return arrayDispari;
}

const arrayDispari = newArrayDispari();
console.log("Array di soli numeri dispari da 1 a 99:", arrayDispari);

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
function findOldestFilm(movies) {
  let oldestFilm = movies[0];

  for (let i = 1; i < movies.length; i++) {
    // scorro l'array attraverso i film
    if (parseInt(movies[i].Year) < parseInt(oldestFilm.Year)) {
      // confronto l'anno di rilascio del film entrando in movies.year  utilizzo parseint per far si che il dato sia numerico e non in stringhe
      oldestFilm = movies[i];
    }
  }
  return oldestFilm;
}

let oldestFilm = findOldestFilm(movies);
console.log("Il film più vecchio è:", oldestFilm.Title, "uscito nel", oldestFilm.Year);

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
function numbersOfFilm(arrayDiFilm) {
  return arrayDiFilm.length; // voglio che mi ritorni il numero di film contenuti nell'array
}

let numeroFilm = numbersOfFilm(movies);
console.log("Il numero di film nell'array è:", numeroFilm);

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
function ottieniTitoli(arrayDiFilm) {
  let titoli = arrayDiFilm.map(function (film) {
    //utilizzo map per attraversare l'array ed estrarre e far ritornare solo i titoli
    return film.Title;
  });
  return titoli;
}

let titoliDeiFilm = ottieniTitoli(movies);
console.log("I titoli contenuti nell'array sono:", titoliDeiFilm);

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
function filmDelMillennioCorrente(arrayDiFilm) {
  // Utilizzo il metodo filter per selezionare solo i film usciti dopo il 2000
  var FilmsPostduemila = arrayDiFilm.filter(function (film) {
    return parseInt(film.Year) > 2000;
  });
  return FilmsPostduemila;
}

var FilmsPostduemila = filmDelMillennioCorrente(movies);
console.log("Film usciti nel millennio corrente:", FilmsPostduemila);

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
function SumYearsOfProduction(arrayDiFilm) {
  let yearsSum = arrayDiFilm.reduce(function (accumulatore, film) {
    return accumulatore + parseInt(film.Year);
  }, 0);

  return yearsSum;
}

let yearsSum = SumYearsOfProduction(movies);
console.log("La somma degli anni è:", yearsSum);

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
