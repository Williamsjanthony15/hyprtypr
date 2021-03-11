'use strict';

let countdown = document.getElementById('time');
let timeRemaining = document.getElementById('timeRemaining');
let word = document.querySelector('word');
let scored = document.getElementById('score');
let points = 0;
let totalGuess = 0;
let wrongGuess = 10;
let score = 0;
let allScores= JSON.parse(localStorage.getItem('Allusers')) || [];
let typedWords = [];
let username = 'Tyler';
let usernameArray = [];
let timePerWord = '10';
let count = 0;
let timer;
let startTimer = document.getElementById('start');


// const wordList = ['mask', 'pizza', 'covid', 'pliers', 'camera', 'vacuum',
//   'pizazz', 'library', 'channel', 'vaccine', 'suburban', 'cemetery', 'calendar', 'separate', 'misspell', 'argument', 'assuming', 'definite', 'positive', 'negative', 'dachshund', 'necessary', 'possession', 'supposedly', 'quarantine', 'obstinance', 'millennium', 'processing', 'sovereignty', 'accommodate', 'fluorescent', 'mischievous', 'accidentally', 'questionnaire', 'pronunciation', 'capitalization'];

  const wordList = ['mask', 'pizza', 'covid', 'pliers', 'camera', 'vacuum'];

function renderName() {
  let nameSubmit = document.getElementById('userName').value;
  // console.log(nameSubmit);
  // let stringifiedWords = JSON.stringify(typedWords);
  localStorage.setItem('userName', nameSubmit);
}



function startGame() {
  // console.log(timePerWord);
  count++;
  timer = setInterval(function () {
    startTimer.disabled = true;
    timePerWord--;
    countdown.innerHTML = timePerWord;
    // console.log(countdown);
    if (timePerWord === 0) {
      startTimer.disabled = true;
      clearInterval(timer);
      if (count < wordList.length) {
        wordGuess();
        startGame();
      }
    }
  }, 1000);
  startTimer.removeEventListener('click', startGame);
  if (timePerWord === 0) {
    // console.log(timePerWord);
  }
}




function wordGuess() {
  var guessEntry = document.getElementById('guessText').value.toUpperCase();
  document.getElementById('entry').innerHTML = guessEntry;
  // renderWordGenerator();
  if (guessEntry === wordList[totalGuess].toUpperCase()) {
    score++;
    totalGuess++;
    // console.log('Great Success', score);
  }
  document.getElementById('score').innerHTML = score;
  document.getElementById('guessText').value = '';
  document.getElementById('wordGenerator').innerHTML = wordList[totalGuess];
  typedWords.push(guessEntry);
  timePerWord = 11;
}


let gameInput = document.getElementById('guessText');
gameInput.addEventListener('keyup', function (e) {
  e.preventDefault();
  // console.log(e);
  if (e.key === 'Enter') {
    let entry = document.getElementById('gameButton');
    entry.click();
  }
});


// document.getElementById('score').innerHTML = score;
console.log('success');
if (wordList[totalGuess]) {
  document.getElementById('guessText').value = '';
  document.getElementById('wordGenerator').innerHTML = wordList[totalGuess];
  timePerWord = 11;
} else {
  clearInterval(timer);
  new Leaderboard(username, score);
  console.log(username,score,allScores);
  localStorage.setItem('Allusers', JSON.stringify(allScores));
  document.getElementById('guessText').value = '';
  document.getElementById('wordGenerator').innerHTML = 'No more words remaining';
}




let stringifiedWords = JSON.stringify(typedWords);
localStorage.setItem('typedWords', stringifiedWords);
let stringifiedScore = JSON.stringify(allScores);
localStorage.setItem('all scores', stringifiedScore);



startTimer.addEventListener('click', startGame);



function Leaderboard(username, score) {
  this.username = username;
  this.score = score;
  allScores.push(this);
}



let retrievedUsers = localStorage.getItem('username');

function renderLeaderboardScores() {
  // let retrievedUsers = usernameArray;
  let tbody = document.getElementById('leaderboard-table').children[1];
  for (let i = 0; i < allScores.length; i++) {
    let trUser = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent = allScores[i].username;
    trUser.appendChild(td);
    let trScore = document.createElement('td');
    trScore.textContent = allScores[i].score;
    trUser.appendChild(trScore);
    tbody.appendChild(trUser);
  }
}


function renderWordGenerator() {
  document.getElementById('wordGenerator').innerHTML = wordList[totalGuess];
}


renderWordGenerator();
wordGuess();

startTimer.addEventListener('click', startGame);



renderWordGenerator();
renderLeaderboardScores();

