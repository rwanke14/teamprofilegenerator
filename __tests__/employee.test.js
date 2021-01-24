const Employee = require('../library/employee');

describe('Employee', () => {
    test('Can set up employee object', () => {
        const employee = new Employee()
        expect(typeof(employee)).toBe("object");
    });

    test('Can set up employee name', () => {
        const value = "Rose";
        const employee = new Employee(value)
        expect(employee.name).toBe(value)
    });
    test('Can set up employee id', () => {
        const value = 5;
        const employee = new Employee("Rose", value)
        expect(employee.id).toBe(value);
    });
    test('Can set up employee email', () => {
        const value = "rose@text.com";
        const employee = new Employee("Rose", 5, value)
        expect(employee.email).toBe(value);
    });
    test('Can set up employee role', () => {
        const value = "Manager";
        const employee = new Employee("Rose", 5, "rose@text.com", value)
        expect(employee.role).toBe(value);
    });
    test('Can get name through getName()', () => {
        const value = "Rose";
        const employee = new Employee(value)
        expect(employee.getName()).toBe(value);
    });
    test('Can get id through getID', () => {
        const value = 5;
        const employee = new Employee("Rose", value)
        expect(employee.getId()).toBe(value);
    });
    test('Can get email through getEmail()', () => {
        const value = "rose@text.com";
        const employee = new Employee ("Rose", 5, value)
        expect(employee.getEmail()).toBe(value);
    });
    test('Can get role through getRole()', () => {
        const value = "Manager";
        const employee = new Employee("Rose", 5, "rose@text.com", value)
        expect(employee.getRole()).toBe(value);
    });
});