/**
 * Callback and Asynchronous function
 * - Synchronous and Asynchronous
 * - setTimeout
 */

// function sumFunction(a, b, displayCallback) {
//     displayCallback(a+b);
//     return;
// }

// function displayResultInConsole(result) {
//     console.log(result);
//     return;
// }
// function displayResultInPage(result) {
//     document.getElementById('result').innerText = result;
//     return;
// }
// sumFunction(1, 2, displayResultInConsole);
let i = 0;
const myPromise = new Promise((resolve, reject) => {
  if(i == 0) {
    resolve("yes")
  } else {
    reject('no');
  }
});

myPromise.then(
  (accepted) => {
    console.log(accepted);
  },
  (rejected) => {
    console.log(rejected);
  }
);
