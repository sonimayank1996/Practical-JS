// GLOBAL COUNTER - EASY TO RESET! - API Rate Limiter
let requestCount = 0;
const MAX_REQUESTS = 5;

function checkRateLimit() {
    requestCount++;
    return requestCount <= MAX_REQUESTS;
}

function resetCounter() {
    requestCount = 0;
}

// PROBLEMS:
console.log(checkRateLimit()); // true (1/5)
console.log(checkRateLimit()); // true (2/5)

// 😱 ATTACKER CAN:
requestCount = 0; // Reset counter!
resetCounter(); // Or use the function!

console.log(checkRateLimit()); // true (1/5) - LIMIT BYPASSED!

/////////////////////////////////////////////////////

function createRateLimiter(maxRequests) {
    // PRIVATE COUNTER - Cannot be reset from outside
    let requestCount = 0;
    let lastReset = Date.now();
    const RESET_INTERVAL = 60000; // 1 minute
    
    return {
        checkLimit: function() {
            // Auto-reset after interval
            if (Date.now() - lastReset > RESET_INTERVAL) {
                requestCount = 0;
                lastReset = Date.now();
            }
            
            requestCount++;
            return requestCount <= maxRequests;
        },
        getRemainingRequests: function() {
            return Math.max(0, maxRequests - requestCount);
        }
        // NO reset function exposed!
    };
}

// Usage:
const rateLimiter = createRateLimiter(5);
console.log(rateLimiter.checkLimit()); // true (1/5)
console.log(rateLimiter.checkLimit()); // true (2/5)

// 😊 SECURE - CANNOT RESET:
rateLimiter.requestCount = 0; // No effect
console.log(rateLimiter.checkLimit()); // true (3/5) - STILL COUNTING!