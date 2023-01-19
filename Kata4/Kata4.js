const charMap = {a: 1, e: 2, i: 3, o: 4, u: 5}

const replaceVowels = (str) => {
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++) {
        if(["a", "e", "i", "o", "u"].indexOf(str.charAt(i)) !== -1) str = str.replace(str[i], charMap[str[i]]);
    }
    return str;
}

const replaceVowels2 = (str) => {
    str = str.toLowerCase();
    return [...str].map(e => e in charMap ? charMap[e] : e).join("");
}

console.log(replaceVowels2("huh"))