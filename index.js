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
        name: 'contributors',
      },
      {
        type: 'input',
        message: 'Contributors?',
        name: 'contributors',
      },
  ])
  .then(answers => {
    fs.writeFile("README.MD",`<h1>${answers.projectTitle}</h1>`, function (err,data) {
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