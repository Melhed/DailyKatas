function bestFriend(str, targetChar, trailingChar) {
    const arr = Array.from(str.toLowerCase());

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === targetChar) {
            if(arr[i+1] !== trailingChar) return false;
        }
    };
    return true;
}

console.log(bestFriend("Harry had a great hallway", "h", "a"));