const Intern = require('../library/intern')

describe('Intern', () => {
    test('Can get school name of intern', () => {
        const value = "Elon";
        const employee = new Intern('Rose', 5, 'rose@text.com', value);
        expect(employee.school).toBe(value);
    });

    test('Can pass school name through getSchool()', () => {
        const value = "Elon";
        const employee = new Intern('Rose', 5, 'rose@text.com', value);
        expect(employee.getSchool()).toBe(value);
    });

    test('Can pass intern role through getRole()', () => {
        const value = 'Intern';
        const employee = new Intern('Rose', 5, 'rose@text.com', 'Elon');
        expect(employee.getRole()).toBe(value);
    });

});