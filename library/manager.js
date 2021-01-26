
const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, office) {
      super(name, id, email);
      this.office = office;
    }

    getOfficeNumber(){
        return this.office;
    }

    getRole() {
        return "Manager"
        //overrides employee getRole to write Manager details
    }

  }


  module.exports = Manager;