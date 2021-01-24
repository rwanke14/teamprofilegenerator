
const Employee = require('./employee')


class Engineer extends Employee {
    constructor(github) {
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