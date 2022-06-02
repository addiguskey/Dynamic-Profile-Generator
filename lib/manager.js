//Manager
//officeNumber
//getRole()
//getName, getId, getEmail from employee
const Employee = require("./employee");

class Manager extends Employee {
  constructor(id, officeNumber) {
    super("Udon", 1, "udon@lovesfetch.com");
    this.id = id;
    this.officeNumber = officeNumber;
  }
  getRole() {
    console.log("Manager");
  }
  getOfficeNumber() {
    console.log(`The manager's office number is ${this.officeNumber}`);
  }
}

const manager = new Manager(1, 807);

console.log("------manager------");
manager.getName();
manager.getId();
manager.getEmail();
manager.getRole();
manager.getOfficeNumber();
