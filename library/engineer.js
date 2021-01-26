
const Employee = require('./employee')


class Engineer extends Employee {
    constructor(name, role, email, id, github) {
      super(name, role, email, id);
      this.github = github;

    }


    getGithub(){

        return this.github;

    }


    getRole(){
        //overrides Employee method with enigneer details
        this.role = "Engineer"
    }



  }



  module.exports = Engineer