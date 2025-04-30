import {reverseString} from "./reverseString.js";

test('A normal string', () => {
    expect(reverseString('My name is Jerin')).toBe('nireJ si eman yM');
});
test('A palindrome', () => {
    expect(reverseString('malayalam')).toBe('malayalam');
});