const capitalize = function (string) {
    let first = string.at(0);
    let rest = string.slice(1);
    first = first.toUpperCase();
    let result = `${first}${rest}`;
    return result;
}

export {capitalize};