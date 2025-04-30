import {capitalize} from "./capitalize.js";

test('First letter need to be capitalised', () => {
    expect(capitalize('jerin')).toBe('Jerin');
});
test('First letter already capitalised', () => {
    expect(capitalize('Thomas')).toBe('Thomas');
});