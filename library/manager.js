
const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, role, office) {
      super(name, id, email, role);
      this.office = office;
    }

    officeNumber(){
        return this.office;
    }

    getRole() {
        this.role = new Employee ("Manager")
        //overrides employee getRole to write Manager details
    }

  }


  module.exports = Manager;