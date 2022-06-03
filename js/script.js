"use strict";
let numberOfFilms = 0;
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
// do {
personalMovieDB.count = +prompt("Cколько фильмов вы уже посмотрели?", "");
if (personalMovieDB.count >= 1 && personalMovieDB.count < 10) {
  alert("Просмотрено мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  alert("Вы киноман");
} else {
  alert("Произошла ошибка");
}
// } while (numberOfFilms == 0);

for (let i = 0; i < personalMovieDB.count; i++) {
  let a;
  do {
    a = prompt("Один из последних просмотренных фильмов", "");
    if (a.length == 0 && a.length > 50) {
      alert(`Введите ответ заного. Ваш ответ:${a.length} символов`);
    }
  } while (a.length == 0 || a.length > 50);

  personalMovieDB.movies[a] = prompt("На сколько его оцените?", "");
}

console.log(personalMovieDB);
// ---------------------------------------------
// ЗАДАЧА перед 24м уроком
// const lines = 5;
// let result = "";
// const z = "*";
// const k = " ";
// let probel = lines;
// let n = 1;

// for (let i = 1; i <= lines + 1; i++) {
//   for (let j = probel; j >= 0; j--) {
//     result += k;
//   }
//   probel--;
//   for (let b = 0; b < n; b++) {
//     result += z;
//   }
//   n += 2;
//   result += "\n";
// }

// console.log(result);
