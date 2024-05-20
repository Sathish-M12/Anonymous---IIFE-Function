// Anonymous Function

(function () {
    const arrayToRotate = [1, 2, 3, 4, 5];
    const k = 2;
    const rotatedArray = arrayToRotate.slice(k).concat(arrayToRotate.slice(0, k));
    console.log("Rotated Array:", rotatedArray);
})();