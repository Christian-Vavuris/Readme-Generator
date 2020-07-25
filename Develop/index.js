const fs = require('fs');
const inquirer = require ('inquirer');
const generatePage = require('./readme-html');


const collectData = function () {

    var readmeData = [];

    return inquirer.prompt([
    {
        type: 'input',
        name:'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name:'description',
        message: 'Please describe your project.'
    },
    {
        type: 'input',
        name:'instllation-information',
        message: 'What is required to install and run this application?'
    },
    {
        type: 'input',
        name:'usage-information',
        message: 'What is the intended use of your application?'
    },
    {
        type: 'input',
        name:'contribution-guidelines',
        message: 'What are the guidelines for contributing to this project?'
    },
    {
        type: 'input',
        name:'test-instructions',
        message: 'How does a developer test this application?'
    },
    {
        type: 'input',
        name:'licenses',
        message: 'How is this project Licensed?'
    },
    {
        type: 'input',
        name:'github-username',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name:'email',
        message: 'What is your email address?'
    },
  ])
  .then(answers => {
    readmeData.push(answers);
    return readmeData;
  });
//   .catch(error => {
//     if(error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else when wrong
//     }
//   });
};









// function to write README file
function writeToFile(fileName, data) {
}

collectData() 
    .then(generateHtml = (readmeData) => {
    return writeFile(pageHTML);
    });

