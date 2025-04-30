import {caesarCipher} from "./caesarCipher.js";

test('positive key', () => {
    expect(caesarCipher('My name is Jerin Moni Thomas. I love the number 7!', 4)).toBe('Qc reqi mw Nivmr Qsrm Xlsqew. M pszi xli ryqfiv 7!');
});
test('negative key', () => {
    expect(caesarCipher('Help us', -7)).toBe('Axei nl');
});
test('empty string', () => {
    expect(caesarCipher('', 4)).toBe('');
});
