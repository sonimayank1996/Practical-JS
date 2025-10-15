function createProductCalculator() {
    const cache = new Map();
    
    return {
        calculateTotal: memoize(function(cartItems, taxRate, discount) {
            console.log('🧮 Calculating cart total...');
            
            const subtotal = cartItems.reduce((sum, item) => 
                sum + (item.price * item.quantity), 0);
            
            const tax = subtotal * (taxRate / 100);
            const total = subtotal + tax - discount;
            
            return {
                subtotal,
                tax,
                discount,
                total
            };
        }),
        
        clearCache: function() {
            cache.clear();
            console.log('🗑️ Cache cleared');
        }
    };
}

// Usage:
const calculator = createProductCalculator();

const cart = [
    { id: 1, name: "Laptop", price: 999, quantity: 1 },
    { id: 2, name: "Mouse", price: 25, quantity: 2 }
];

// First calculation
console.log(calculator.calculateTotal(cart, 8, 50)); 
// "🧮 Calculating cart total..." → {subtotal: 1049, tax: 83.92, total: 1082.92}

// Same inputs - cached result
console.log(calculator.calculateTotal(cart, 8, 50)); 
// Returns cached instantly → {subtotal: 1049, tax: 83.92, total: 1082.92}