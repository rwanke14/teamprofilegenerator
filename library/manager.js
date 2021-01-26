
const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, role, email, id, office) {
      super(name, role, email, id);
      this.office = office;
    }

    officeNumber(){
        return this.office;
    }

    getRole() {
        this.role = "Manager"
        //overrides employee getRole to write Manager details
    }

  }


  module.exports = Manager;