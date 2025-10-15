function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            console.log('📦 Returning cached result');
            return cache.get(key);
        }
        
        console.log('⚡ Calculating fresh result');
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

// Usage:
const slowFunction = (a, b) => {
    // Simulate expensive calculation
    for (let i = 0; i < 1000000000; i++) {} 
    return a + b;
};

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(2,3)); // "⚡ Calculating fresh result" → 5
console.log(memoizedSlowFunction(2, 3)); // "📦 Returning cached result" → 5 🎉