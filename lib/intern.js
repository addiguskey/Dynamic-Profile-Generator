//Intern
//getSchool()
//getRole()

const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getRole() {
    // console.log("Intern");
    return "intern";
  }
  getSchool() {
    // console.log(`This intern goes to ${this.school}`);
    return this.school;
  }
}

// const intern = new Intern(3, "Univeristy of Denver");

// console.log("-------intern-------");
// intern.getName();
// intern.getId();
// intern.getEmail();
// intern.getRole();
// intern.getSchool();

module.exports = Intern;
