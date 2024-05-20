

const ar1 = [1, 12, 15, 26, 38];
const ar2 = [2, 13, 17, 30, 45];

// IIFE to find the median
const median = (() => {
    ar1.sort((a, b) => a - b);
    ar2.sort((a, b) => a - b);
    return (ar1[ar1.length - 1] + ar2[0]) / 2;
})();

console.log("Median:", median);