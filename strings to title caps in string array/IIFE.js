

const stringArray = ["hello world", "this is a test", "javascript is awesome"];

// IIFE to convert strings to title case
const titleCaseArray = (() => {
    return stringArray.map(str => {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    });
})();

console.log("Title Case Array:", titleCaseArray);