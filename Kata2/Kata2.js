let tempNumArr = [];
let tempSum = 0;

function consecutiveSum(num) {
    for(let i = 1; i < (num / 2) + 1; i++) {
        tempNumArr = [];
        tempSum = 0;

        for(let j = i; j < num / 2; j++) {
            tempNumArr.push(j);
            if(calculateSum() === num) {
                console.log(tempNumArr);
                return true;
            }
        }
    }
}

function calculateSum() {
    let tempSum = 0;
    for(let i = 0; i < tempNumArr.length; i++) {
        tempSum += tempNumArr[i];
    }
    return tempSum;
}

consecutiveSum(34);