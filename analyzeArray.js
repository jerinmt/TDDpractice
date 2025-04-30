const findAverage = function (input, len) {
    let sum = input.reduce((total, value) => {
        return total + value;
    });
    return sum / len;
}

const findMinimum = function (input, len) {
    let minimum = input[0];
    for(let i = 1; i < len; i++) {
        if(minimum > input[i]) {
            minimum = input[i];
        }
    }
    return minimum;
}

const findMaximum = function (input, len) {
    let maximum = input[0];
    for(let i = 1; i < len; i++) {
        if(maximum < input[i]) {
            maximum = input[i];
        }
    }
    return maximum;
}

const findLength = function (input) {
    let length = 0;
    while(input[length]) {
        length += 1;
    }
    return length;
}


const analyzeArray = function (input) {
    const output = {};
    const len = findLength(input);
    output.average = findAverage(input, len);
    output.min = findMinimum(input, len);
    output.max = findMaximum(input, len);
    output.length = len;
    return output;
}

export {analyzeArray};