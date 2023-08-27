const removeFromArray = function(array, ...values) {
    // Create a new array to store the result.
    const newArray = [...array];

    // Remove desired elements.
    for (const value of values) {
        for (let i = newArray.length - 1; i >= 0; i--) {
            if (value === newArray[i]) {
                newArray.splice(i, 1);
            }
        }
    }
    
    return newArray;
};

result = removeFromArray([1, 2, 3, 4], 1, 2);

console.log(result);

// Do not edit below this line
module.exports = removeFromArray;
