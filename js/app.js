'use strict';

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
let count = 0;
let timer;
let startTimer = document.getElementById('start');


// const wordList = ['mask', 'pizza', 'covid', 'pliers', 'camera', 'vacuum',
//   'pizazz', 'library', 'channel', 'vaccine', 'suburban', 'cemetery', 'calendar', 'separate', 'misspell', 'argument', 'assuming', 'definite', 'positive', 'negative', 'dachshund', 'necessary', 'possession', 'supposedly', 'quarantine', 'obstinance', 'millennium', 'processing', 'sovereignty', 'accommodate', 'fluorescent', 'mischievous', 'accidentally', 'questionnaire', 'pronunciation', 'capitalization'];

  const wordList = ['mask', 'pizza', 'covid', 'pliers', 'camera', 'vacuum',];


function startGame() {
  console.log(timePerWord);
  count++;
  timer = setInterval(function () {
    startTimer.disabled = true;
    timePerWord--;
    countdown.innerHTML = timePerWord;
    console.log(countdown);
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
    console.log(timePerWord);
  }
}




function wordGuess() {
  var guessEntry = document.getElementById('guessText').value.toUpperCase();
  // console.log(guessEntry, wordList[totalGuess].toUpperCase);
  document.getElementById('entry').innerHTML = guessEntry;
  // renderWordGenerator();
  console.log(guessEntry, wordList[totalGuess].toUpperCase());
  if (guessEntry === wordList[totalGuess].toUpperCase()) {
    score++;
    document.getElementById('score').innerHTML = score;
    console.log('success');
  }
  totalGuess++;
  if (wordList[totalGuess]) {
    document.getElementById('guessText').value = '';
    document.getElementById('wordGenerator').innerHTML = wordList[totalGuess];
    typedWords.push(guessEntry);
    timePerWord = 11;
  } else {
    clearInterval(timer);
    document.getElementById('guessText').value = '';
    document.getElementById('wordGenerator').innerHTML = 'No more words remaining';
  }
}


let stringifiedWords = JSON.stringify(typedWords);
localStorage.setItem('typedWords', stringifiedWords);
let stringifiedScore = JSON.stringify(allScores);
localStorage.setItem('all scores', stringifiedScore);



startTimer.addEventListener('click', startGame);


//constructor to generate allScores array
//will then be saved to local storage
function Leaderboard(username, score) {
  this.username = username;
  this.score = score;
  allScores.push(this);
}

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
  for (let i = 0; i < allScores.length; i++) {
    let trUser = document.createElement('tr');
    trUser.textContent = allScores[i].username;
    tbody.appendChild(trUser);
    let trScore = document.createElement('td');
    trUser.appendChild(trScore);
    trScore.textContent = allScores[i].score;
  }
}


function renderWordGenerator() {
  document.getElementById('wordGenerator').innerHTML = wordList[totalGuess];
}

startTimer.addEventListener('click', startGame);


renderWordGenerator();
// function renderLeaderboardScores
new Leaderboard('tyler', 10);
renderLeaderboardHeader();
renderLeaderboardScores();
