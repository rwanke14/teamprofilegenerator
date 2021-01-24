const Employee = require("./employee");

class Intern extends Employee {
    constructor(school) {
      super("Rose", 5, "test@test.com");
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