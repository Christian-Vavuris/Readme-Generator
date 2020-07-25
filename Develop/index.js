
const inquirer = require ('inquirer');


const generateReadme = function () {
    console.log('butt');
inquirer
  .prompt([
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
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
};







// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
generateReadme();
