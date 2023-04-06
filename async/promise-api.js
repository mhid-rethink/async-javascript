// const pResolved = Promise.resolve({ id: 1 });
// pResolved.then((result) => console.log(result));

// const pRejected = Promise.reject(new Error("motivo da rejeição"));
// pRejected.then((error) => console.log(error));

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Operação assincrona 1...");
    resolve(1);
    // reject(new Error("something failed"));
  }, 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Operação assincrona 2...");
    resolve(2);
  }, 2000);
});

Promise.all([p1, p2]) // so é chamado quando todas forem cumpridas
  .then((result) => console.log(result))
  .catch((err) => console.log("Error", err.message));

Promise.race([p1, p2]) // chamado quando qualquer uma das promessas for cumprida
  .then((result) => console.log(result))
  .catch((err) => console.log("Error", err.message));
