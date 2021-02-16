// generateReadme function populating the README.md
function generateReadme(answers) {
    return `
<h1 align="center">${answers.projectTitle} 👋</h1>
  
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
- Description
🔍 ${answers.description}
- Table of Contents
- [Description](#description)
- [Installation](#installationInstructions)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributors)
- [Tests](#test)
- [Links](#git)
<br>
-Installation Instructions:
 ${answers.installationInstructions}
- Usage
 ${answers.usage}
- License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 
- Contributing
 ${answers.contributing}
- Tests
 ${answers.tests}
<br />
- GitHub: [${answers.git}](https://github.com/${answers.git})<br />
<br />
- Email: ${answers.email}<br /><br />
`;
  }
  
  module.exports = generateReadme;


