// TODO: Include packages needed for this application
const fs =require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?',
        validate: projectNameInput => {
          if (projectNameInput) {
            return true;
          } else {
            console.log('Please enter your project name!');
            return false;
          }
        }
      },
      {
        type:'input',
        name:'description',
        message: 'Please provide a description for your project.',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter a description for your project!');
              return false;
            }
        }
    },
    {
        type:'input',
        name:'install',
        message: 'Provide installation instructions.',
        validate: installInput => {
            if (installInput) {
              return true;
            } else {
              console.log('You need to enter installation instructions!');
              return false;
            }
        }
    },
    {
        type:'input',
        name:'usage',
        message: 'How is this application used?',
        validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('You need to enter the way or ways this application is meant to be used!');
              return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err)
}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app
init();