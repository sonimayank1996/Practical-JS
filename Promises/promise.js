const test = new Promise((resolve, reject) => {
  if (true) {
    return resolve(2);
  } else {
    reject();
  }
});

test.then((res) => console.log(res)).catch((err) => console.log(err));

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(user => console.log("User:", user))
  .catch(error => console.log("Error:", error));

  // 6️⃣ Write a function that returns a Promise that resolves after 2 seconds.
  const myPromise = new Promise((resolve, reject) => {
      if(true) {
        setTimeout(() => {
           return resolve('after 2 sec')
        }, 2000)
      } else {
         return reject('reject')
      }
  })

  myPromise.then(res => console.log(res));
    