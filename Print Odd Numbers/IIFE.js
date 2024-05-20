

// IIFE FUNCTION

const arr = [1, 2, 4, 9, 12, 13, 20];

const oddNumbers = (() => {
    return arr.filter(num => num % 2 === 1);
})();

console.log("Odd Numbers:", oddNumbers);