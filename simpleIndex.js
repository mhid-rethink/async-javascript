// Tornando codigo assincrono mais simples de ler
console.log("----------Impressao codigo mais simples----------");
console.log("Before");
getUser(1, gRepositories);
console.log("After");

//Funcoes aninhadas simplificadas
function gRepositories(user) {
  console.log("User: ", user);
  getRepositories(user.gitHubUsername, gCommits);
}
function gCommits(repos) {
  console.log("Repositories: ", repos);
  getCommits(repos[0], displayCommits);
}
function displayCommits(commits) {
  console.log("Commits: ", commits);
}

//Funcoes principais
function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database...");
    callback({ id: id, gitHubUsername: "mhid" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Searching repos...");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

function getCommits(repo, callback) {
  setTimeout(() => {
    callback("Commits list...");
  }, 2000);
}
