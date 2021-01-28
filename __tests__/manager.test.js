const Manager = require('../library/manager');

describe('Manager', () => {
    test('Can get office number of Manager', () => {
        const value = 220;
        const employee = new Manager('Rose', 5, 'rose@text.com',value);
        expect(employee.office).toBe(value);
    });

    test('Can pass office number name through officeNumber()', () => {
        const value = 220;
        const employee = new Manager('Rose', 5, 'rose@text.com', value);
        expect(employee.getOfficeNumber()).toBe(value);
    });

    test('Can pass manager role through getRole()', () => {
        const value = "Manager";
        const employee = new Manager('Rose', 5, 'rose@text.com', 220);
        expect(employee.getRole()).toBe(value);
    });

});