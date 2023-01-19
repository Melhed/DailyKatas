const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const numInStr = (arr) => {
    const tempArr = [];
    arr.map(str => Array.from(str).map(char => 
        numbers.indexOf(char) !== -1 && tempArr.indexOf(str) === -1 ? tempArr.push(str) : null
        ));
    return tempArr;
}

console.log(numInStr(["w", "a", "4234", "ksk as2l"]));