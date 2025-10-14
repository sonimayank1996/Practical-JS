// This is how React useState works internally using closure
function useState(initialValue) {
    let state = initialValue; // ← Private variable via closure
    
    function setState(newValue) {
        state = newValue;
        // React re-renders component here
    }
    
    function getState() {
        return state;
    }
    
    return [getState(), setState];
}

// Usage in React component:
function Counter() {
    const [count, setCount] = useState(0); // Each call gets its OWN state
    
    const increment = () => {
        setCount(count + 1); // Closure remembers 'count' between renders
    };
    
    return increment;
}