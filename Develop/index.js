// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const questions = require("./utils/questions.js");
const generateMarkdown = require("./utils/generateMarkdown.js");

// // TODO: Create a function to initialize app
function readmeInit () {
  inquirer.prompt(
    questions
    )
    .then((userData) => {
    console.log(userData);
    fs.writeFile("README.md", generateMarkdown(userData), (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('success');
      });
    });
}

// Function call to initialize app
readmeInit();
