
const things = [
    {name: "title"}, 
    {name: "description"}, 
    {name: "installation"}, 
    {name: "usage"}, 
    {name: "contribution"}, 
    {name: "test"}, 
    {name: "licenses"}, 
    {name: "github"}, 
    {name: "email"}
];
// generate the readme HTML code

generateHtml = (data) => {

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

console.log(generateHtml(things));

