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
let temp = document.querySelector('.time');
let button = document.querySelector('button');
let timerDiv = document.querySelector('.time');
let scoreDiv = document.querySelector('.score');
let points = 0;
let seconds = 10;
let totalGuess = 0;
let wrongGuess= 10;
// button ID - play

const wordList = [ 'mask', 'pizza', 'covid', 'pliers', 'camera', 'vacuum',
  'pizazz', 'library', 'channel', 'vaccine', 'suburban', 'cemetery', 'calendar', 'separate', 'misspell', 'argument', 'assuming', 'definite', 'positive', 'negative', 'dachshund', 'necessary', 'possession', 'supposedly', 'quarantine', 'obstinance', 'millennium', 'processing', 'sovereignty', 'accommodate', 'fluorescent', 'mischievous', 'accidentally', 'questionnaire', 'pronunciation', 'capitalization' ];
console.log(wordList);

function countdown() {
  points = 0;
  let timer = setInterval(function() {
    button.disabled = true;
    seconds --;
    temp.gameHtml = seconds;
    if (seconds === 0) {
      alert ('Game Over! You score is' + {points});
    }
  }
  );
}
