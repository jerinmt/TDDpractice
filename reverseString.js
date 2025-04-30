const reverseString = function (string) {
    let result = '';
    for(let i = 0; i < string.length; i++) {
        result = result + string.at(-(i+1));
    }
    return result;
}

export {reverseString};