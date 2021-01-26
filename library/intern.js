const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;

    }

    getSchool(){

        return this.school;
    }

    getRole(){

        return "Intern";
        //overrides employee get role with Intern details
    }

  }

  module.exports = Intern