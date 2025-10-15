function createApiCache() {
    const cache = new Map();
    const MAX_AGE = 5 * 60 * 1000; // 5 minutes
    
    return async function cachedFetch(url) {
        const now = Date.now();
        const cached = cache.get(url);
        
        // Return cached if still valid
        if (cached && (now - cached.timestamp) < MAX_AGE) {
            console.log('🚀 Returning cached API response');
            return cached.data;
        }
        
        // Fetch fresh data
        console.log('🌐 Making actual API call');
        const response = await fetch(url);
        const data = await response.json();
        
        // Cache the result
        cache.set(url, {
            data: data,
            timestamp: now
        });
        
        return data;
    };
}

// Usage in React component:
const cachedApiCall = createApiCache();

// In your component:
async function fetchUserData(userId) {
    const data = await cachedApiCall(`/api/users/${userId}`);
    return data;
}

// First call - makes API request
fetchUserData(123); // "🌐 Making actual API call"

// Second call (within 5 minutes) - returns cached
fetchUserData(123); // "🚀 Returning cached API response"