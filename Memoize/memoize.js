function memoizedCalculation(n) {
    if (!memoizedCalculation.cache) {
        memoizedCalculation.cache = {};
    }
    
    if (memoizedCalculation.cache[n] !== undefined) {
        console.log(`Returning cached result for ${n}`);
        return memoizedCalculation.cache[n];
    }
    
    console.log(`Calculating for ${n}...`);
    const result = n * n;
    memoizedCalculation.cache[n] = result;
    return result;
}

console.log(memoizedCalculation(5)); // "Calculating for 5..." → 25
console.log(memoizedCalculation(5)); // "Returning cached result for 5" → 25 🎉
console.log(memoizedCalculation(5)); // "Returning cached result for 5" → 25 🎉

function outer() {
    let cache = {};

    return function(n) {
       if(cache[n]) {
         return cache[n];
       }
       cache[n] = n+21;
       return cache[n];
    }
}

let test1 = outer();
test1(2);
test1(3);
test1(2);
