

const array = [1, 1, 2, 2, 3, 3, 4, 4, 5];
const seen = {};
const uniqueArray = array.filter(item => {
    if (!seen[item]) {
        seen[item] = true;
        return true;
    }
    return false;
});
console.log("Unique Array:", uniqueArray);