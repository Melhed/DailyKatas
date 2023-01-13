let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let tempNumArr = [];
let tempSum = 0;


function consecutiveSum(num) {

    for(let i = 0; i < numArr.length; i++) {
        tempNumArr.push(numArr[i]);

        for(let j = i+1; j < numArr.length; j++) {
            tempSum = calculateSum();
            if(tempSum + numArr[j] === num) {
                tempNumArr.push(numArr[j]);
                console.log(tempNumArr);
                return true;
            }

            if(tempSum + numArr[j] < num) {
                tempNumArr.push(numArr[j]);
            }
            
            if(tempSum + numArr[j] > num) {
                tempNumArr = [];
                tempSum = 0;
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

consecutiveSum(35);