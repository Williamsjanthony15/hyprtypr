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


Let wordList = ['mask', 'pizza', 'covid', 'pliers', 'camera', 'vacuum',
  'pizazz', 'library', 'channel', 'vaccine', 'suburban', 'cemetery', 'calendar', 'separate', 'misspell', 'argument', 'assuming', 'definite', 'positive', 'negative', 'dachshund', 'necessary', 'possession', 'supposedly', 'quarantine', 'obstinance', 'millennium', 'processing', 'sovereignty', 'accommodate', 'fluorescent', 'mischievous', 'accidentally', 'questionnaire', 'pronunciation', 'capitalization']

function Data(name) {
  this.name = name; 
}

let getData = localStorage.getItem('Data');
