const myPromise = new Promise((resolve, reject) => {
  // funcoes assincronas
  // ...
  setTimeout(() => {
    // resolve(1);
    reject(new Error("message"));
  }, 2000);
});

myPromise
  .then((result) => console.log("Result: ", result))
  .catch((err) => console.log("Error:", err.message));
