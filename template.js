// generateReadme function populating the README.md
function generateReadme(answers) {
    return `
<h1 align="center">${answers.projectTitle} </h1>
  
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

 <br /><br />
- Table of Contents
- [Description](#description)
- [Installation](#installationInstructions)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributors)
- [Tests](#test)
- [Links](#git)
<br /><br />

##Description 
 ${answers.description}
##Installation Instructions:
 ${answers.installationInstructions}
 <br /><br />
##Usage
 ${answers.usage}
 <br /><br />
 ##License
 ${answers.license}
 <br /><br />
This application is covered by the ${answers.license} license. 
<br /><br />
##Contributing
 ${answers.contributors}
 <br /><br />
 ##Tests
 ${answers.test}
<br />
<br />
##GitHub:
<br />
[${answers.git}](https://github.com/${answers.git})<br />
<br />
##Email: <br />
${answers.email}<br /><br />
`;
  }
  
  module.exports = generateReadme;


