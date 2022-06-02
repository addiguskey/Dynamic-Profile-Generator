//Manager
//officeNumber
//getRole()
//getName, getId, getEmail from employee
const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    // console.log("Manager");
    return "manager";
  }
  getOfficeNumber() {
    // console.log(`The manager's office number is ${this.officeNumber}`);
    return this.officeNumber;
  }
}

// const manager = new Manager(1, 807);

// console.log("------manager------");
// manager.getName();
// manager.getId();
// manager.getEmail();
// manager.getRole();
// manager.getOfficeNumber();

module.exports = Manager;
