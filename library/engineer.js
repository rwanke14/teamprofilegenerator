
const Employee = require('./employee')


class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name, id, email);
      this.github = github;

    }


    getGithub(){

        return this.github;

    }


    getRole(){
        //overrides Employee method with enigneer details
        return "Engineer"
    }



  }



  module.exports = Engineer