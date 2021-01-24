const Manager = require('../library/manager');

describe('Manager', () => {
    test('Can get office number of Manager', () => {
        const value = 220;
        const employee = new Manager(value);
        expect(employee.office).toBe(value);
    });

    test('Can pass office number name through officeNumber()', () => {
        const value = 220;
        const employee = new Manager(value);
        expect(employee.officeNumber()).toBe(value);
    });

    test('Can pass manager role through getRole()', () => {
        const value = this.role;
        const employee = new Manager(value);
        expect(employee.getRole()).toBe(value);
    });

});