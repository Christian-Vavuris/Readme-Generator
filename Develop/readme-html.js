
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
    <!DOCTYPE html>
    <html lang="en">
        <head></head>
        <body>
            <pre style="word-wrap, break-word; white-space: pre-wrap;">
                "# ${title}

                ## ${description}
                
                ## Table of Contents (Optional)
                
                If your README is very long, add a table of contents to make it easy for users to find what they need.
                
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
               
                ## Tests
                
                ${test}

                ## Questions

                ${github}

                ${email}
            
            </pre>
        </body>
    </HTML>
    `;


};

// this is a test to check to see if the info is going in

// console.log(generateHtml(answers));

