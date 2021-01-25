const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, role, school) {
      super(name, id, email, role);
      this.school = school;

    }

    getSchool(){

        return this.school;
    }

    getRole(){

        this.role = new Employee ("Intern")
        //overrides employee get role with Intern details
    }

  }

  module.exports = Intern