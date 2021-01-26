const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, role, email, id, school) {
      super(name, role, email, id);
      this.school = school;

    }

    getSchool(){

        return this.school;
    }

    getRole(){

        this.role = "Intern"
        //overrides employee get role with Intern details
    }

  }

  module.exports = Intern