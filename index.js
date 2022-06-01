// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { log } = require("console");

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "projTitle",
    },
    {
      type: "input",
      message: "What is your motivation behind your project?",
      name: "projMotivation",
    },

    {
      type: "input",
      message: "Why did you build this project?",
      name: "projPurpose",
    },
    {
      type: "input",
      message: "What problem does it solve?",
      name: "projObjective",
    },
    {
      type: "input",
      message: "What did you learn?",
      name: "projLessons",
    },
    // {
    //   type: "checkbox",
    //   message: "What languages were used to build this project?",
    //   choices: [
    //     "HTML",
    //     "CSS",
    //     "BootstrapCSS",
    //     "jQuery",
    //     "JS",
    //     "Java",
    //     "Python",
    //     "C++",
    //   ],
    //   name: "projBuiltWith",
    // },
    {
      type: "input",
      message:
        "Please provide a step-by-step description of how to get the development environment running",
      name: "projInstallation",
    },
    {
      type: "input",
      message:
        "Please enter Image File Name, a screenshot of your appplication",
      name: "projUsage",
    },
    {
      type: "input",
      message:
        "Please list the names of all of your collaborators and their GitHub Links",
      name: "projCredits",
    },
    {
      type: "checkbox",
      message:
        "Please choose your license. Use the ⬆⬇ arrows on your keyboard to navigate through the options& hit the Space bar to Select",
      choices: [
        "MIT",
        "Apache 2.0",
        "GNU General Public License (GPL) 2.0",
        "GNU General Public License (GPL) 3.0",
        "ISC",
      ],
      name: "projLicense",
    },
    {
      type: "input",
      message: "If you have utilized any Badges, please list them here",
      name: "projBadges",
    },
    {
      type: "Features",
      message: "If your project has a lot of features, please list them here.",
      name: "projFeatures",
    },
    {
      type: "input",
      message:
        "Include guidelines for how other developers can contribute to you project if you wish",
      name: "projContribute",
    },
    {
      type: "input",
      message: "Provide examples on how to run tests for you application here.",
      name: "projTests",
    },
    {
      type: "input",
      message: "Please provide your gitHub username",
      name: "userGitHub",
    },
    {
      type: "input",
      message: "Please provide your giuHub Link",
      name: "userGHLink",
    },
    {
      type: "input",
      message: "Please provide your email address",
      name: "userEmail",
    },
  ])
  .then((response) => {
    console.log(response);
    let readMeTemplate = `# <${response.projTitle}>
${renderLicenseBadge(response)}
# Description

The main motivation for this project was ${
      response.projMotivation
    }. The purpose of this project is ${response.projectPurpose} to solve ${
      response.projObjective
    }. 
From this process I have leared these follwoing lessons: ${
      response.projLessons
    }.

# Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [How to Cotribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

# Installation

Here are the steps required to install this application. ${
      response.projInstallation
    }

# Usage

![alt text](./images/${response.projUsage})

# Credits

${response.projCredits}

# License

This application is covered under ${response.projLicense}

---

# Badges

${response.projBadges} 

# Features

${response.projFeatures}

# How to Contribute

${response.projContribute}

# Tests

${response.projTests}

# Questions

For any questions, you can either reach out to me on GitHub or via e-mail
- Username: @${response.userGitHub}
- GitHub Link: ${response.userGHLink}
- E-mail: ${response.userEmail}
`;
    fs.writeFile("index.html", readMeTemplate, (err) => {
      err ? console.log(err) : console.log("readME has been generated!");
    });
  });
