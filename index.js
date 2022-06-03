//packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const employees = [];
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
managerPrompts();

//array of questions for user input
//function for each position
function managerPrompts() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your manager's name?",
        name: "managerName",
      },
      {
        type: "input",
        message: "What is the team manager's id?",
        name: "managerID",
      },

      {
        type: "input",
        message: "What is the team manager's email?",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "What is the team manager's office number?",
        name: "managerOffice",
      },
    ])
    .then((manager) => {
      console.log(manager);
      const manager2 = new Manager(
        manager.managerName,
        manager.managerID,
        manager.managerEmail,
        manager.managerOffice
      );
      employees.push(manager2);
      newMember();
    });
}
//Engineer Prompts
function engPrompts() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your engineer's name?",
        name: "engName",
      },
      {
        type: "input",
        message: "What is your engineer's id?",
        name: "engID",
      },
      {
        type: "input",
        message: "What is your engineer's email?",
        name: "engEmail",
      },
      {
        type: "input",
        message: "What is your engineer's GitHub username?",
        name: "engGithub",
      },
    ])
    .then((eng) => {
      console.log(eng);
      //import eng class and create eng class type
      const engineer2 = new Engineer(
        eng.engName,
        eng.engID,
        eng.engEmail,
        eng.engGithub
      );
      employees.push(engineer2);
      newMember();
    });
}

//Intern Prompts
function intPrompts() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your intern's name?",
        name: "intName",
      },
      {
        type: "input",
        message: "What is your intern's id?",
        name: "intID",
      },
      {
        type: "input",
        message: "What is your intern's email?",
        name: "intEmail",
      },
      {
        type: "input",
        message: "What is your intern's school?",
        name: "intSchool",
      },
    ])
    .then((int) => {
      console.log(int);
      //import int class and create int class type
      const intern2 = new Intern(
        int.intName,
        int.intID,
        int.intEmail,
        int.intSchool
      );
      employees.push(intern2);

      newMember();
    });
}

//New Member function
function newMember() {
  inquirer
    .prompt([
      {
        type: "checkbox",
        message: "Please choose a team member you would like to add",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members",
        ],
        name: "nextMember",
      },
    ])
    .then((response) => {
      console.log(response);
      if (response.nextMember[0] === "Engineer") {
        engPrompts();
      } else if (response.nextMember[0] === "Intern") {
        intPrompts();
      } else {
        htmlGenerator(employees);
      }
    });
}

//separate functions for creating different roles' cards

//Manager Card
function genManagerCard(manager) {
  const templateManager = `<div class="card employee-card">
               <div class="card-header bg-dark text-light">
                 <h2 class="manager card-title">${manager.name}</h2>
                 <h3 class="card-title">
                   <img
                    src="../images/manager.png"
                    style="width: 12%; height: 12%"
                  />Manager
                </h3>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${manager.id}</li>
                  <li class="list-group-item">
                    Email: <a href="mailto:${manager.email}"
                      >${manager.email}</a
                    >
                  </li>
                  <li class="list-group-item">Office Number: #${manager.officeNumber}</li>
                </ul>
              </div>
            </div>`;
  return templateManager;
}

//Engineer Card
function genEngCard(eng) {
  const templateEng = `<div class="card employee-card">
              <div class="card-header bg-dark text-light">
                <h2 class="manager card-title">${eng.name}</h2>
                <h3 class="card-title">
                  <img
                    src="../images/dev.png"
                    style="width: 11%; height: 11%"
                  />Engineer
                </h3>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${eng.id}</li>
                  <li class="list-group-item">
                    Email: <a href="mailto:${eng.email}"
                      >${eng.email}</a
                    >
                  </li>
                  <li class="list-group-item">
                    GitHub:
                    <a href="https://github.com/${eng.gitHub}" target="_blank"
                      >@${eng.gitHub}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            `;
  return templateEng;
}

//Intern Cards
function genIntCard(int) {
  const templateInt = `<div class="card employee-card">
              <div class="card-header bg-dark text-light">
                <h2 class="manager card-title">${int.name}</h2>
                <h3 class="card-title">
                  <img
                    src="../images/intern.png"
                    style="width: 13%; height: 13%"
                  />Intern
                </h3>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${int.id}</li>
                  <li class="list-group-item">
                    Email: <a href="mailto:${int.email}"
                      >${int.email}</a>
                  </li>
                  <li class="list-group-item">School: ${int.school}</li>
                </ul>
              </div>
            </div>`;
  return templateInt;
}

//function for HTML generator
function htmlGenerator(employees) {
  let htmlTemp1 = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!-- Bootstrap -->
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
      />
      <title>Dynamic Profile Generator</title>
    </head>
    <!-- BODY -->
    <body>
      <!-- JUMBOTRON DIV -->
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">My Team</h1>
          <h3 class="lead">
            <img src="../images/team.png" style="width: 6%; height: 6%" />
            Meet our team members!
          </h3>
        </div>
      </div>
      <!-- DIV FOR ALL CARDS -->
      <div class="container">
        <div id="all-cards" class="row">
          <div class="tem-area col-12 d-flex justify-content-center">`;

  const htmlTemp2 = `</div>
        </div>
      </div>
    </body>
  </html>`;

  for (let i = 0; i < employees.length; i++) {
    //each employee obj nees getRole()
    if (employees[i].getRole() === "Manager") {
      htmlTemp1 += genManagerCard(employees[i]);
    } else if (employees[i].getRole() === "Engineer") {
      htmlTemp1 += genEngCard(employees[i]);
    } else if (employees[i].getRole() === "Intern") {
      htmlTemp1 += genIntCard(employees[i]);
    }
  }
  htmlTemp1 += htmlTemp2;
  fs.writeFile("index.html", htmlTemp1, (err) => {
    err ? console.log(err) : console.log("html has been generated!");
  });
}
