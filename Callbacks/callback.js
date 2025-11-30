
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

// Write a simple API simulation using setTimeout and a callback.
setTimeout(() => {
   console.log('data fetch');
}, 2000)

// 5️⃣ Convert this callback hell into promises
getUser(function(user) {
  getOrders(user.id, function(orders) {
    getCart(orders[0], function(cart) {
      console.log(cart);
    });
  });
});

getUser().then(res => res.json()).then((user) => {
    return getOrders(user.id).then((res) => res.json().then(orders => {
        return getCart(orders[0]).then(res => res.json().then(cart) => {
            return cart;
        })
    }
})