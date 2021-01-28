const Engineer = require('../library/engineer');

describe('Engineer', () => {
    test('Can pass github account name through getGithub()', () => {
        const value = "rwanke14";
        const employee = new Engineer('Rose', 5, 'rose@text.com', value);
        expect(employee.github).toBe(value);
    });

    test('Can pass github account name through getGithub()', () => {
        const value = "rwanke14";
        const employee = new Engineer('Rose', 5, 'rose@text.com', value);
        expect(employee.getGithub()).toBe(value);
    });

    test('Can override and set getRole()', () => {
        const value = "Engineer";
        const employee = new Engineer('Rose', 5, 'rose@text.com', 'rwanke14');
        expect(employee.getRole()).toBe(value);
    });

});