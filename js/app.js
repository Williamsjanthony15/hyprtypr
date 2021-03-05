'use strict';

console.log('WWLND');

// --- TODO  ---
// Username 
// Local Storage 
// Game Logic  ---- 
// Word Generator - Array (Hard Coded words) // DONE
// Appending Words to table
// Hangman Generator (pictures)
// Scoring method
// stretch goal -- Adding nested for loops seperate arrays

let wrongGuessAllow = 10;
let timePerWord = (10, 'seconds');




const wordList = [ 'mask', 'pizza', 'covid', 'pliers', 'camera', 'vacuum',
'pizazz', 'library', 'channel', 'vaccine', 'suburban', 'cemetery', 'calendar', 'separate', 'misspell', 'argument', 'assuming', 'definite', 'positive', 'negative', 'dachshund', 'necessary', 'possession', 'supposedly', 'quarantine', 'obstinance', 'millennium', 'processing', 'sovereignty', 'accommodate', 'fluorescent', 'mischievous', 'accidentally', 'questionnaire', 'pronunciation', 'capitalization' ];
console.log(wordList);

function getWord() {
  return Math.floor(Math.floor() * wordList.length);
}

function 




















// let word = document.querySelector('.word');
// let score = document.querySelector('.score');
// let button = document.querySelector('button');
// let timer = 10; //alotted amount of time per word 
// let points = 0;
// let totalGuess = 0;
// let wrongGuessAllowed= 10;

// function timerStart() {
//   if (startButton = 'true') {
//     for (let i = 0; i < 10; i--;) {
//       console.log(timerStart);
//     }
//     })
//   }
//   if (timer === 0) {
//     timerReset();
//   }
// }

// function timerReset() {
//   if (timer === 0) {
//     setTimeout(function(){
//       time--;
//       let seconds = Math.floor(time / 10);
//       if (seconds <=)
//     })
//   }
// }

// function incremental() {
//   if (timer === 1) {
//     setTimeout(function(){
//     time--;
//     let seconds = Math.floor(time / 10);
//     if (seconds <= 9) {
//       seconds = '0' + seconds;
//     }
//   };
// }
// }
// function wordTimer() {
//   points = 0;
//   let timer = setInterval(function(){
//     timeCounter --;
//     if (timeCounter === 0) {
//  }
//   });
// }
