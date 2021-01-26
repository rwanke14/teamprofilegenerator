class Employee {
    constructor(name, role, email, id) {
        this.name = name;
        this.role = role;
        this.email = email;
        this.id = id;
    }


    getName() {
        return this.name;
    }

    getRole() {
        //returns employee
        return this.role;
    }

    getEmail() {
        return this.email;

    }

    getId() {
        return this.id;

    }

}

module.exports = Employee;











