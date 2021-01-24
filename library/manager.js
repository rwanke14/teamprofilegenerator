
const Employee = require('./employee')

class Manager extends Employee {
    constructor(office) {
      super("Rose", 5, "test@test.com");
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