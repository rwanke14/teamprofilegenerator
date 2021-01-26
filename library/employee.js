class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
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











