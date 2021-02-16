// generateReadme function populating the README.md
function generateReadme(answers) {
    return `
<h1 align="center">${answers.projectTitle} </h1>
  
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

##Description 
 ${answers.description}
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
<h3>Installation Instructions:</h3>
 ${answers.installationInstructions}
 <br /><br />
<h3>Usage</h3>
 ${answers.usage}
 <br /><br />
 <h3>License</h3>
 ${answers.license}
 <br /><br />
This application is covered by the ${answers.license} license. 
<br /><br />
<h3>Contributing</h3>
 ${answers.contributors}
 <br /><br />
 <h3>Tests</h3>
 ${answers.test}
<br />
<br />
<h3>GitHub</h3>:
<br />
[${answers.git}](https://github.com/${answers.git})<br />
<br />
<h3>Email:</h3> <br />
${answers.email}<br /><br />
`;
  }
  
  module.exports = generateReadme;


