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
        name:'instllation',
        message: 'What is required to install and run this application?'
    },
    {
        type: 'input',
        name:'usage',
        message: 'What is the intended use of your application?'
    },
    {
        type: 'input',
        name:'contribution',
        message: 'What are the guidelines for contributing to this project?'
    },
    {
        type: 'input',
        name:'test',
        message: 'How does a developer test this application?'
    },
    {
        type: 'input',
        name:'licenses',
        message: 'How is this project Licensed?'
    },
    {
        type: 'input',
        name:'github',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name:'email',
        message: 'What is your email address?'
    },
  ])
  .then(answers => {
    // console.log(answers)
    return console.log(generateHtml(answers));
  });
};

collectData()
    // .then(console.log(generateHtml(answers)))
    //  .then(generateHtml(answers));
    // return writeFile(pageHTML);
    // });

