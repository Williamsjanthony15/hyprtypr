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

let button = document.querySelector('button');
let timeRemaining = document.querySelector('timeRemaining');
let score = document.querySelector('score');
let countdown = document.querySelector('time');
let points = 0;
let totalGuess = 0;
let wrongGuess= 10;
let allScores = [];
let username = 'tyler';
let timePerWord = 10;



const wordList = ['mask', 'pizza', 'covid', 'pliers', 'camera', 'vacuum',
'pizazz', 'library', 'channel', 'vaccine', 'suburban', 'cemetery', 'calendar', 'separate', 'misspell', 'argument', 'assuming', 'definite', 'positive', 'negative', 'dachshund', 'necessary', 'possession', 'supposedly', 'quarantine', 'obstinance', 'millennium', 'processing', 'sovereignty', 'accommodate', 'fluorescent', 'mischievous', 'accidentally', 'questionnaire', 'pronunciation', 'capitalization'];
// console.log(wordList);

// Game Page


function startGame() {
  let timer = setInterval(function(){
    button.disabled = true;
    timePerWord --; 
    countdown.innerHTML = timePerWord;
    if(timePerWord === 0){
      score.innerHTML = '0';
      wordList.innerHTML = '';
      button.innerHTML = false;
      clearInterval(timer);
      timePerWord = 10;
      timeRemaining.innerHTML = '10';
      button.disabled = false;
    }
  }, 1000);
}


function wordGuess() {
  var guessEntry = document.getElementById('guessText').value;
  document.getElementById('entry').innerHTML = guessEntry;
}


// LeaderBoard Page
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

