
const Employee = require('./employee')


class Engineer extends Employee {
    constructor(name, id, email, role, github) {
      super(name, id, email, role);
      this.github = github;

    }


    getGithub(){

        return this.github;

    }


    getRole(){
        //overrides Employee method with enigneer details
        this.role = new Employee ("Engineer")
    }



  }



  module.exports = Engineer