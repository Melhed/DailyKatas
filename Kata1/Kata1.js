const formatters = [
    new RegExp(/[A-Z]/g),
    new RegExp(/[a-z]/g),
    new RegExp(/[0-9]/g)
];

function reorder(str) {
    let tempStr = "";
    for(let i = 0; i < formatters.length; i++) {
        str.match(formatters[i]).forEach(char => tempStr += char);
    }
    return tempStr;
}

console.log(reorder("JDjkaDjhjHsdjjSjd81932"));