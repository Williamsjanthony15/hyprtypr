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

let countdown = document.getElementById('time');
let timeRemaining = document.getElementById('timeRemaining');
let word = document.querySelector('word');
let scored = document.getElementById('score');
let points = 0;
let totalGuess = 0;
let wrongGuess = 10;
let score = 0;
let allScores = [];
let typedWords = [];
let username = 'Tyler';
let usernameArray = [];
let timePerWord = '10';
// let remaining = 10;
let startTimer = document.getElementById('start');


const wordList = ['mask', 'pizza', 'covid', 'pliers', 'camera', 'vacuum',
  'pizazz', 'library', 'channel', 'vaccine', 'suburban', 'cemetery', 'calendar', 'separate', 'misspell', 'argument', 'assuming', 'definite', 'positive', 'negative', 'dachshund', 'necessary', 'possession', 'supposedly', 'quarantine', 'obstinance', 'millennium', 'processing', 'sovereignty', 'accommodate', 'fluorescent', 'mischievous', 'accidentally', 'questionnaire', 'pronunciation', 'capitalization'];
// console.log(wordList);

// Index Page - Render Name to local Storage
// let nameLol = console.log('my Name');
function renderName() {
  document.getElementById('submitName').localStorage.setItem('User Name', nameLol);
}

// renderName();

// Game Page

function startGame() {
  let timer = setInterval(function () {
    startTimer.disabled = false;
    timePerWord--;
    countdown.innerHTML = timePerWord;
    if (timePerWord === 0) {
      console.log(points);
      // score.innerHTML = '0';
      // wordList.innerHTML = '';
      timeRemaining.innerHTML = '10';
      startTimer.disabled = true;
    }
  }, 1000);
  startTimer.removeEventListener('click', startGame);
}






//word generator and score -dj
function wordGuess() {
  var guessEntry = document.getElementById('guessText').value.toUpperCase();
  console.log(totalGuess);
  document.getElementById('entry').innerHTML = guessEntry;
  // renderWordGenerator();
  console.log(guessEntry, wordList[totalGuess]);
  if (guessEntry === wordList[totalGuess].toUpperCase()) {
    score++;
    console.log('success');
  }
  totalGuess++;
  document.getElementById('guessText').value = '';
  document.getElementById('wordGenerator').innerHTML = wordList[totalGuess];
  typedWords.push(guessEntry);
  timePerWord = 11;
}

//to be added at end of game to store
let stringifiedWords = JSON.stringify(typedWords);
localStorage.setItem('typedWords', stringifiedWords);
let stringifiedScore = JSON.stringify(allScores);
localStorage.setItem('all scores', stringifiedScore);



startTimer.addEventListener("click", startGame);





// startGame();






// LeaderBoard Page

//constructor to generate allScores array
//will then be saved to local storage
function Leaderboard(username, score) {
  this.username = username;
  this.score = score;
  allScores.push(this);
}


//render leaderboard table to the DOM
function renderLeaderboardHeader() {
  let header = document.getElementById('leaderboard-table');
  let thUser = document.createElement('th');
  thUser.textContent = 'Player';
  let thScore = document.createElement('th');
  thScore.textContent = 'Score';
  header.appendChild(thUser);
  header.appendChild(thScore);
}

// let retrievedUsers = localStorage.getItem('username');

function renderLeaderboardScores() {
  // let retrievedUsers = usernameArray;
  let tbody = document.getElementById('leaderboard-table');
  let trUser = document.createElement('tr');
  trUser.textContent = username;
  tbody.appendChild(trUser);
  let trScore = document.createElement('td');
  trUser.appendChild(trScore);
  trScore.textContent = score;
}


// word generator word-dj


function renderWordGenerator() {
  document.getElementById('wordGenerator').innerHTML = wordList[totalGuess];

}

renderWordGenerator();


// function renderLeaderboardScores
new Leaderboard('tyler', 10);
renderLeaderboardHeader();
renderLeaderboardScores();

