fs = require('fs');

const inquirer = require('inquirer');
const template = require("./template")

function generateUserInput() {
  
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
        type: 'input',
        message: 'Usage?',
        name: 'usage',
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

    const content = template(answers);

    fs.writeFile("README.MD",content,function (err,data) {
      if (err) {
        return console.log(err);
      }
      console.log(data);
    });
  });
};

generateUserInput();
 