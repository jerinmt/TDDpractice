import {calculator} from "./calculator.js";

test('add', () => {
    expect(calculator.add(5, 4)).toBe(9);
});
test('subtract first number large', () => {
    expect(calculator.subtract(5, 4)).toBe(1);
});
test('subtract second number large', () => {
    expect(calculator.subtract(5, 7)).toBe(-2);
});
test('multiply', () => {
    expect(calculator.multiply(2, 4)).toBe(8);
});
test('divide', () => {
    expect(calculator.divide(8, 4)).toBe(2);
});
test('divide fractional', () => {
    expect(calculator.divide(7, 4)).toBeCloseTo(1.75);
});
test('divide by zero', () => {
    expect(calculator.divide(5, 0)).toBe("Don't divide by zero!");
});
