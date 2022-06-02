//Eng
//githubUsername
//getHitHub()
//getRole()
const Employee = require("./employee");

class Engineer extends Employee {
  constructor(id, gitHub) {
    super("Khione", 2, "khione@fetchqueen.com");
    this.id = id;
    this.gitHub = gitHub;
  }
  getRole() {
    console.log("Engineer");
  }
  getGithub() {
    console.log(`This Engineer's GitHub username is @${this.gitHub}`);
  }
}

const engineer = new Engineer(2, "khionelovesfetch22");

console.log("-------engineer-------");
engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getRole();
engineer.getGithub();
