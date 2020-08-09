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
    name: "description",
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
    console.log("\nRepo Answers:");
    console.log(JSON.stringify(response, null, " "));
  });
};

init();
