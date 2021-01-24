const Engineer = require('../library/engineer');

describe('Engineer', () => {
    test('Can pass github account name through getGithub()', () => {
        const value = "rwanke14";
        const employee = new Engineer(value);
        expect(employee.github).toBe(value);
    });

    test('Can pass github account name through getGithub()', () => {
        const value = "rwanke14";
        const employee = new Engineer(value);
        expect(employee.getGithub()).toBe(value);
    });

    test('Can override and set getRole()', () => {
        const value = this.role;
        const employee = new Engineer(value);
        expect(employee.getRole()).toBe(value);
    });

});