//Intern
//getSchool()
//getRole()

const Employee = require("./employee");

class Intern extends Employee {
  constructor(id, school) {
    super("Jack", 3, "jack@du.edu");
    this.id = id;
    this.school = school;
  }
  getRole() {
    console.log("Intern");
  }
  getSchool() {
    console.log(`This intern goes to ${this.school}`);
  }
}

const intern = new Intern(3, "Univeristy of Denver");

console.log("-------intern-------");
intern.getName();
intern.getId();
intern.getEmail();
intern.getRole();
intern.getSchool();
