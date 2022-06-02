//This is Parent class- rest are subclasses
//name, id, email
//getName(), getId(), getEmail(),
//getRole(): returns employee

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    console.log(`The employee's name is ${this.name}`);
    return this.name;
  }
  getId() {
    console.log(`The employee's ID is ${this.id}`);
    return this.id;
  }
  getEmail() {
    console.log(`The employee's email is ${this.email}`);
    return this.email;
  }
  getRole() {
    console.log(`The employee's role is ${this.role}`);
    return "employee";
  }
}

module.exports = Employee;
