// Assincrono - esse modo de callback pode tornar o codigo dificil de ler
console.log("Before");
// getUser(1, (user) => {
//   console.log("User", user);
//   //ex. 1: getRepositories assincrono:
//   getRepositories(user.gitHubUsername, (repositories) => {
//     console.log("repositories: ", repositories);
//     getCommits(repositories[0], (commits) => {
//       console.log(commits);
//     });
//   });
// });
getUser(1)
  .then((user) => getRepositories(user.gitHubUsername))
  .then((repos) => getCommits(repos[0]))
  .then((commits) => {
    console.log(commits);
  })
  .catch((error) => console.log("Error", error));
console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    //funçao assincrona
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({ id: id, gitHubUsername: "mhid" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    //funçao assincrona
    setTimeout(() => {
      console.log("Searching repos...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    // função assincrona
    setTimeout(() => {
      resolve("Commits list...");
    }, 2000);
  });
}
