const sumAll = function(a, b) {
    if (typeof(a) !== "number" || typeof(b) !== "number") return "ERROR";
    if (a < 0 || b < 0) return "ERROR";

    const array = [a, b].sort(function(a, b) {
        return a - b
    });
    const low = array[0];
    const high = array[1];
    
    let sum = 0;
    for (let i = high; i >= low; i--) {
        sum += i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
