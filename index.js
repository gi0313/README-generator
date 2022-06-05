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
    {
      type: 'checkbox',
      name: 'license',
      message: 'What license does your have?',
      choices:['MIT', 'Apache', 'ISC'],
      validate: licenseInput => {
        if (licenseInput) {
          return true;
        } else { //doesn't account for nothing entered
          console.log('Please enter license information!(If not using a license please select "None")');
          return false;
        }
    }   
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please enter information on how the user can contribute to the repo.',
      validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter contribution information!');
            return false;
          }
      }   
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please enter instructions to test your project',
      validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter testing instructions!');
            return false;
          }
      }   
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your github where people can reach you at for queastions.',
      validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your github!');
            return false;
          }
      }   
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter an email where people can reach you for queastions.',
      validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter an email!');
            return false;
          }
      }   
    }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), err => {
  if(err) {
    throw err;
  }
  //outputs successful readme generation
  console.log('README Created Successfully');
})

}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(data => {
    console.log(data);
    writeToFile('finishedREADME.md', data)
  })
}

// Function call to initialize app
init();