// Assincrono - esse modo de callback pode tornar o codigo dificil de ler
console.log("Before");
getUser(1, (user) => {
  console.log("User", user);
  //ex. 1: getRepositories assincrono:
  getRepositories(user.gitHubUsername, (repositories) => {
    console.log("repositories: ", repositories);
    getCommits(repositories[0], (commits) => {
      console.log(commits);
    });
  });
});
console.log("After");

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
