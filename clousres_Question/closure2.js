//  Shopping Cart Example
// without closures

// GLOBAL VARIABLES - Anyone can mess with these!
let cartItems = [];
let total = 0;

function addToCart(product, price) {
    cartItems.push({ product, price });
    total += price;
}

function getCartTotal() {
    return total;
}

function clearCart() {
    cartItems = [];
    total = 0;
}

// PROBLEMS:
addToCart("iPhone", 999);
console.log(getCartTotal()); // 999

// 😱 ANYONE CAN DO THIS:
cartItems = []; // Clear cart directly
total = 1000000; // Set fake total
cartItems.push({ product: "HACKED", price: -500 }); // Add invalid item

console.log(getCartTotal()); // 999500 - COMPLETELY WRONG!

// With closures
function createShoppingCart() {
    // PRIVATE VARIABLES - Only accessible to cart functions
    let cartItems = [];
    let total = 0;
    
    return {
        addToCart: function(product, price) {
            cartItems.push({ product, price });
            total += price;
        },
        getCartTotal: function() {
            return total;
        },
        clearCart: function() {
            cartItems = [];
            total = 0;
        },
        getItems: function() {
            return [...cartItems]; // Return copy, not original
        }
    };
}

// Usage:
const cart = createShoppingCart();
cart.addToCart("iPhone", 999);
console.log(cart.getCartTotal()); // 999

// 😊 CANNOT DO THIS:
cart.cartItems = []; // undefined - NO ACCESS!
cart.total = 1000000; // undefined - NO ACCESS!
console.log(cart.getCartTotal()); // Still 999 - SAFE!