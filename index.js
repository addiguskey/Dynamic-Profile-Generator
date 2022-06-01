// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { log } = require("console");

// TODO: Create an array of questions for user input
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
    {
      type: "checkbox",
      message: "Please choose a team member you would like to add",
      choices: [
        "Engineer",
        "Intern",
        "I don't want to add any more team members",
      ],
      name: "nextMember2",
    },
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
    {
      type: "checkbox",
      message: "Please choose a team member you would like to add",
      choices: [
        "Engineer",
        "Intern",
        "I don't want to add any more team members",
      ],
      name: "nextMember3",
    },
  ])
  .then((response) => {
    console.log(response);
    let htmlTemplate = `<!DOCTYPE html>
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
        <div class="tem-area col-12 d-flex justify-content-center">
          <!-- CARD 1 : Manager-->
          <div class="card employee-card">
            <div class="card-header bg-dark text-light">
              <h2 class="manager card-title">NAME</h2>
              <h3 class="card-title">
                <img
                  src="../images/manager.png"
                  style="width: 12%; height: 12%"
                />Manager
              </h3>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:</li>
                <li class="list-group-item">
                  Email:<a href="mailto:addisonguskey@gmail.com"
                    >addisonguskey@gmail.com</a
                  >
                </li>
                <li class="list-group-item">Office Number:</li>
              </ul>
            </div>
          </div>

          <!-- CARD2 : Engineer -->
          <div class="card employee-card">
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
                <li class="list-group-item">ID:</li>
                <li class="list-group-item">
                  Email:<a href="mailto:addisonguskey@gmail.com"
                    >addisonguskey@gmail.com</a
                  >
                </li>
                <li class="list-group-item">
                  GitHub:
                  <a href="https://github.com/addiguskey" target="_blank"
                    >@addiguskey</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <!-- CARD3 : Intern-->
          <div class="card employee-card">
            <div class="card-header bg-dark text-light">
              <h2 class="manager card-title">NAME</h2>
              <h3 class="card-title">
                <img
                  src="../images/intern.png"
                  style="width: 12%; height: 12%"
                />Intern
              </h3>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:</li>
                <li class="list-group-item">
                  Email:<a href="mailto:addisonguskey@gmail.com"
                    >addisonguskey@gmail.com</a
                  >
                </li>
                <li class="list-group-item">School:</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
`;
    fs.writeFile("index.html", htmlTemplate, (err) => {
      err ? console.log(err) : console.log("html has been generated!");
    });
  });
