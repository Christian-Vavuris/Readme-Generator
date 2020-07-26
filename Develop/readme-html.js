
// this is test data

// let things = {
//     title: "title",
//     description: "description", 
//     installation: "installation", 
//     usage: "usage", 
//     contribution: "contribution", 
//     test: "test", 
//     licenses: "licenses", 
//     github: "github", 
//     email: "email"
// };


// this is getting test data passed in at thee moment
generateHtml = (data) => {
console.log(data)
    const { title, description, installation, usage, contribution, test, licenses, github, email } = data;
    return `
        "# Project Title: ${title}

        ## Description of the application
        
        ${description}

        ## Table of Contents (Optional)

        * [Installation](#installation)
        * [Usage](#usage)
        * [Contribution](#contribution)
        * [Test](#test)
        * [License](#license)
        * [Questions] (#questions)


        ## Installation

        ${installation} 


        ## Usage 

        ${usage}


        ## Credits

        ${contribution}

        ## License

        ${licenses}

        ![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

        ## Tests

        ${test}

        ## Questions? Contact me here:

        https://github.com/${github}

        ${email}
        `;


};



