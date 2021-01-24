
const Employee = require('./employee')

class Manager extends Employee {
    constructor(office) {
      //super(id, 4, "beep");
      this.office= office
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