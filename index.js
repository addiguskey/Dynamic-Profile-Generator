// TODO: Include packages needed for this application
// import class file
// const
const inquirer = require("inquirer");
const fs = require("fs");
const { log } = require("console");
const ExpandPrompt = require("inquirer/lib/prompts/expand");
const employees = [];
managerPrompts();

// TODO: Create an array of questions for user input
//function for each position
function managerPrompts(manager) {
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
      //import manager class and create manager class type
      newMember();
      // employees.push(newManager);
    });
}
function engPrompts(eng) {
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
      newMember();
    });
}
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
      newMember();
    });
}
//

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
      if (response.nextMember === "Engineer") {
        engPrompts();
      } else if (response.nextMember === "Intern") {
        intPrompts();
      } else {
        htmlGenerator();
      }
    });
}

//     fs.writeFile("index.html", htmlTemplate, (err) => {
//       err ? console.log(err) : console.log("html has been generated!");

//separate functions for creating intern/eng cards

function genManagerCard(manager) {
  const templateManager = `<div class="card employee-card">
               <div class="card-header bg-dark text-light">
                 <h2 class="manager card-title">${manager.managerName}</h2>
                 <h3 class="card-title">
                   <img
                    src="../images/manager.png"
                    style="width: 12%; height: 12%"
                  />Manager
                </h3>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID:${manager.managerID}</li>
                  <li class="list-group-item">
                    Email:<a href="mailto:${manager.managerEmail}"
                      >${manager.managerEmail}</a
                    >
                  </li>
                  <li class="list-group-item">Office Number:</li>
                </ul>
              </div>
            </div>`;
  return templateManager;
}
function genEngCard(eng) {
  const templateEng = `<div class="card employee-card">
              <div class="card-header bg-dark text-light">
                <h2 class="manager card-title">NAME</h2>
                <h3 class="card-title">
                  <img
                    src="../images/dev.png"
                    style="width: 11%; height: 11%"
                  />Engineer
                </h3>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID:${eng.engID}</li>
                  <li class="list-group-item">
                    Email:<a href="mailto:${eng.engEmail}"
                      >${eng.engEmail}</a
                    >
                  </li>
                  <li class="list-group-item">
                    GitHub:
                    <a href="${eng.engGithub}" target="_blank"
                      >@addiguskey</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            `;
  return templateEng;
}

function genIntCard(int) {
  const templateInt = `<div class="card employee-card">
              <div class="card-header bg-dark text-light">
                <h2 class="manager card-title">${int.intName}</h2>
                <h3 class="card-title">
                  <img
                    src="../images/intern.png"
                    style="width: 12%; height: 12%"
                  />Intern
                </h3>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID:${int.intID}</li>
                  <li class="list-group-item">
                    Email:<a href="mailto:${int.intEmail}"
                      >${int.intEmail}</a>
                  </li>
                  <li class="list-group-item">School:${int.intSchool}</li>
                </ul>
              </div>
            </div>`;
  return templateInt;
}

function htmlGenerator(employees) {
  const htmlTemp1 = `<!DOCTYPE html>
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
          <div class="tem-area col-12 d-flex justify-content-center"> ${genManagerCard()}
          ${genEngCard()}
          ${genIntCard()}
           </div>
        </div>
      </div>
    </body>
  </html>`;
  // for (let i = 0; i < employees.length; i++) {
  //   //each employee obj nees getRole()
  //   if (employees[i].getRole() === "Manager") {
  //     htmlTemp1 += genManagerCard(employees[i]);
  //   } else if (employees[i].getRole() === "Engineer") {
  //     htmlTemp1 += genEngCard(employees[i]);
  //   } else if (employees[i].getRole() === "Intern") {
  //     htmlTemp1 += genIntCard(employees[i]);
  //   }
  // }
}
