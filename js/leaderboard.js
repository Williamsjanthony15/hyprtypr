'use strict';

let allScores = JSON.parse(localStorage.getItem('Allusers')) || [];
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
renderLeaderboardScores();