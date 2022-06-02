"use strict";

// const numberOfFilms = +prompt("Cколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const a = prompt("Один из последних просмотренных фильмов", ""),
//   b = prompt("На сколько его оцените?", ""),
//   c = prompt("Один из последних просмотренных фильмов", ""),
//   d = prompt("На сколько его оцените?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

const lines = 5;
let result = "";
const z = "*";
const k = " ";
let probel = lines;
let n = 1;

for (let i = 1; i <= lines + 1; i++) {
  for (let j = probel; j >= 0; j--) {
    result += k;
  }
  probel--;
  for (n; n < n - 1; n++) {
    result += z;
  }
  n += 2;
  result += "\n";
}

console.log(result);
