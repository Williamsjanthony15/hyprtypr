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
let score = 0;
let allScores = [];
let username = 'tyler';
// button ID - play

const wordList = [ 'mask', 'pizza', 'covid', 'pliers', 'camera', 'vacuum',
  'pizazz', 'library', 'channel', 'vaccine', 'suburban', 'cemetery', 'calendar', 'separate', 'misspell', 'argument', 'assuming', 'definite', 'positive', 'negative', 'dachshund', 'necessary', 'possession', 'supposedly', 'quarantine', 'obstinance', 'millennium', 'processing', 'sovereignty', 'accommodate', 'fluorescent', 'mischievous', 'accidentally', 'questionnaire', 'pronunciation', 'capitalization' ];
//console.log(wordList);

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

//constructor to generate allScores array
//will then be saved to local storage
function Leaderboard(username, score) {
  this.username = username;
  this.score = score;
  allScores.push(this);
}

//saving allScores to local storage
let stringifiedScore = JSON.stringify(allScores);
localStorage.setItem('hyprtypr', stringifiedScore);

//render leaderboard table to the DOM
function renderLeaderboardHeader () {
  let header = document.getElementById('leaderboard-table');
  let th = document.createElement('th');
  th.textContent = `${username} 10`;
  header.appendChild(th);
}

// function renderLeaderboardScores
new Leaderboard('tyler', 10);
renderLeaderboardHeader();
