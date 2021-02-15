fs = require('fs');

var inquirer = require('inquirer');

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectTitle',
      },
      {
        type: 'input',
        message: 'Please describe your application:',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Necessary installation instruction/requirements?',
        name: 'installationInstructions',
      },
      {
        type: 'list',
        message: 'Please select a license for this application',
        choices: ["MIT","Open","Mozilla","ICS"],
        name: 'license',
      },
      {
        type: 'input',
        message: 'Please input test instructions:',
        name: 'test',
      },
      {
        type: 'input',
        message: 'Contributors?',
        name: 'contributors',
      },
      {
        type: 'input',
        message: 'Please input GitHub user name',
        name: 'git',
      },
      {
        type: 'input',
        message: 'Please input email address',
        name: 'email',
      },
  ])
  .then(answers => {
    fs.writeFile("README.MD",`<h1>
${answers.projectTitle}
</h1>
<br>
<h3>Table of Contents:
<ol>
        <li><a href="Application Description"></a>Application Description</li>
        <li><a href="Installation Instructions:"></a>Installation Instructions:</li>
        <li><a href="License Type:"></a>License Type:</li>
        <li><a href="Test Instructions:"></a>Test Instructions:</li>
        <li><a href="Contributors"></a>Contributors</li>
        <li><a href="GitHub Account"></a>GitHub Account</li>
        <li><a href="Email"></a>Email</li>
</h3>
<br>
<h2>Application Description</h2>
<p>
    ${answers.description}
</p>
<br>
<h3>Installation Instructions:</h3>
<p>${answers.installationInstructions}</p>
<br>
<h3>License Type:</h3>
<p>${answers.license}</p>
<br>
<h3>Test Instructions:</h3>
<p>${answers.test}</p>
<br>
<h3>Contributors</h3>
<p>${answers.contributors}</p>
<br>
<h3>GitHub Accounts</h3>
<p>${answers.git}</p>
<br>
<h3>Email</h3>
<p>${answers.email}</p>
    `, function (err,data) {
      if (err) {
        return console.log(err);
      }
      console.log(data);
    });
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });