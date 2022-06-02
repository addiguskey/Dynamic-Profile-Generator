//Eng
//githubUsername
//getHitHub()
//getRole()
const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }
  getRole() {
    // console.log("Engineer");
    return "engineer";
  }
  getGithub() {
    // console.log(`This Engineer's GitHub username is @${this.gitHub}`);
    return this.gitHub;
  }
}

// const engineer = new Engineer(2, "khionelovesfetch22");

// console.log("-------engineer-------");
// engineer.getName();
// engineer.getId();
// engineer.getEmail();
// engineer.getRole();
// engineer.getGithub();

module.exports = Engineer;
