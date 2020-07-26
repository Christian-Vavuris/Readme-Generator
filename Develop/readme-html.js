
generateHtml = (data) => {
console.log(data)
    const { title, description, installation, usage, contribution, test, licenses, github, email } = data;
    return `
[![Generic badge](https://img.shields.io/badge/LICENSE-${licenses}-<BLUE>.svg)](https://shields.io/)
# Project Title: ${title}

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

## Tests

${test}

## Questions? Contact me here:

https://github.com/${github}

${email}
`;


};



