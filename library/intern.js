const Employee = require("./employee");

class Intern extends Employee {
    constructor(school) {
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