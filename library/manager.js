class Manager extends Employee {
    constructor(officeNumber) {
      //super(id, 4, "beep");
      this.officeNumber = officeNumber
    }

    getRole() {

        //overrides employee getRole to write Manager details
    }

  }


  module.exports = Manager;