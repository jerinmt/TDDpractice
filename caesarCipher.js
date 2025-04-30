const shiftChar = function(code, key) {
    if(code >= 65 && code <= 90) {
        let newCode = code + key;
        if(newCode > 90) {
            newCode = 64 + newCode - 90;
        }
        if(newCode < 65) {
            newCode = 91 - 65 + newCode;
        }
        return newCode;
    }
    if(code >= 97 && code <= 122) {
        let newCode = code + key;
        if(newCode > 122) {
            newCode = 96 + newCode - 122;
        }
        if(newCode < 97) {
            newCode = 123 - 97 + newCode;
        }
        return newCode;
    }
    return code;
}
const caesarCipher = function(str, key) {
    if(str == '') {
        return '';
    }
    let result = '';
    for(let i = 0; i < str.length; i++) {
        let current = str.charCodeAt(i);
        let shifted = shiftChar(current, key);
        let newChar = String.fromCharCode(shifted);
        result += newChar;
    }
    return result;
}

export {caesarCipher};