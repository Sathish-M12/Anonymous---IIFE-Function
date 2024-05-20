


const words = ["level", "hello", "radar", "world"];

// IIFE to find palindromes
const palindromes = (() => {
    const isPalindrome = str => str === str.split('').reverse().join('');
    return words.filter(isPalindrome);
})();

console.log("Palindromes:", palindromes);