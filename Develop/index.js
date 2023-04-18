// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');


// TODO: Create an array of questions for user input
inquirer.prompt([  
  {
    name: 'title',
    message: 'What is the title of your project?',
    type: 'input',
  },
  {
    name: 'description',
    message: 'Why did you build this project?',
    type: 'input',
  },
  {
    name: 'installation',
    message: 'How is this used?',
    type: 'input',
  },
  {
    name: 'features',
    message: 'What special features are in your project?',
    type: 'input',
  },
  {
    name: 'credits',
    message: 'Which third-party assets did you use?',
    type: 'input',
  },
  {
    name: 'license',
    message: 'Which license will you be using?',
    type: 'checkbox',
    choices: [
      'MIT license',
      'other',
    ]
  },
]).then((response) => {
  console.log(response);
  fs.writeFile(`${response.title}.json`, JSON.stringify(response, null, 2),
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('success');
    });
  });


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
