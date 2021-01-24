const Intern = require('../library/intern')

describe('Intern', () => {
    test('Can get school name of intern', () => {
        const value = "Elon";
        const employee = new Intern(value);
        expect(employee.school).toBe(value);
    });

    test('Can pass school name through getSchool()', () => {
        const value = "Elon";
        const employee = new Intern(value);
        expect(employee.getSchool()).toBe(value);
    });

    test('Can pass intern role through getRole()', () => {
        const value = this.role;
        const employee = new Intern(value);
        expect(employee.getRole()).toBe(value);
    });

});