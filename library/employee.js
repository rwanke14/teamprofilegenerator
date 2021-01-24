class Employee {
    constructor(id, name, email, role) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.role = role;
    }
  
    
    getName(){
        return this.id;
    }


    getId(){
        return this.name;

    }

    getEmail(){
        return this.name;

    }

    getRole(){
        //returns employee
        return this.role;
    }

  }

  module.exports = Employee;











