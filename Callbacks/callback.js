
function reachedHomm(callback) {
  setTimeout(() => {
    callback();
  }, 5000);
}
 // some function where api call takes 5 sec - but I dont want to block main thread we can use async browser api but the browser api only takes callback function the browser api need to know after my work is done what should I have to call so that is thing
function reachHome() {
  console.log("Hi I am reached the home");
}

reachedHomm(reachHome);
