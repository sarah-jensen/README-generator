// Prompts to collect userData
const questions = [
  {
    name: "title",
    message: "What is the title of your project?",
    type: "input",
  },
  {
    name: "description",
    message: "Why did you build this project?",
    type: "input",
  },
  {
    name: "installation",
    message: "Describe how a user should install this app.",
    type: "input",
  },
  {
    name: "usage",
    message: "Describe how this app is used",
    type: "input",
  },
  {
    name: "contributing",
    message: "Describe contribution guidelines for this project.",
    type: "input",
  },
  {
    name: "tests",
    message: "Describe how to run tests for this project.",
    type: "input",
  },
  {
    name: "license",
    message: "Which license(s) is this project covered under?",
    type: "list",
    choices: [
      "The MIT License",
      "Apache 2.0 License",
      "Boost Software License 1.0",
      "Eclipse Public License 1.0",
      "Mozilla Public License 2.0",
      "None of the above",
    ],
  },
  {
    name: "githubUserName",
    message: "Enter your github username",
    type: "input",
  },
  {
    name: "repoUrl",
    message: "Enter the github repository URL for this project",
    type: "input",
  }
];

module.exports = questions;