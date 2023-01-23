const countBoomerangs = (arr) => {
    if(arr.length < 3) throw new Error("Error: Array is too short to contain any boomerangs!");
    
    const tempArr = [];

    for(let i = 0; i < arr.length - 2; i++) {
        if(!parseInt(arr[i])) throw new Error("Error: Array cannot contain any strings!");
        if(arr[i] === arr[i+2] && arr[i] !== arr[i+1]) tempArr.push([arr[i], arr[i+1], arr[i+2]]);
    }

    return tempArr.length;
}

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));