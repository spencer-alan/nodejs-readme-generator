const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
    validate: function (response) {
      if (response === "") {
        return "Please enter a Username";
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is the title of the repositiory?",
    name: "title",
    validate: function (response) {
      if (response === "") {
        return "Please enter a Repo name";
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is the description of the project?",
    name: "discription",
  },
  {
    type: "input",
    message: "How do you install this project?",
    name: "install",
  },
  {
    type: "input",
    message: "How do you use this project?",
    name: "usage",
  },
  {
    type: "input",
    message: "Who did you work with on this project?",
    name: "contributing",
  },
  {
    type: "list",
    name: "license",
    message: "What license do you want to use for this project?",
    choices: [
      "ISC License",
      "MIT",
      "GNU GPLv3",
      "Apache License 2.0"
      ],
  },
  {
    type: "checkbox",
    name: "language",
    message: "Check each box for the languages that apply:",
    choices: [
      "HTML",
      "CSS",
      "Javascript",
    ],
    validate: function (response) {
      if (response.length < 1) {
        return "You must choose at leat one language";
      }
      return true;
    },
  },
];

function writeToFile(fileName, data) {
  
};

function init() {
  inquirer.prompt(questions).then((response) => {
    // console.log("\nRepo Answers:");
    // console.log(JSON.stringify(response, null, " "));
    let username = response.name;
    let title = response.title;
    let intro = `# Introduction \n ${title} made by ${username}. \n\n`;
    let discription = `## Discription \n ${response.discription}. \n\n`;
    let install = `## Install \n ${response.install}. \n\n`;
    let usage = `## Usage \n ${response.usage}. \n\n`;
    let contributing = `## Contributing \n ${response.contributing}. \n\n`;
    let license = `### License \n This work is licensed with ${response.license}.`;
    let fileArray = [discription, install, usage, contributing, license];

    fs.writeFile("README.md", intro, (error) => {
      if (error) throw error;
      console.log("README created.");
    });
    for (let i = 0; i < fileArray.length; i++) {
      fs.appendFile("README.md", fileArray[i], (error) => {
        if(error) throw error;
        console.log("Success");
      });
    };
  });
};

init();
