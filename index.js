//necessary requires. File save. inquirer. & the javascript template for our read me file.
fs = require('fs');

const inquirer = require('inquirer');
const template = require("./template")

//function to generate the prompts in the terminal to grab user input
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
        message: 'Questions?',
        name: 'questions',
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

    //creating a variable that is equivalent to running the answers object created from user input in the prompts to pass through javascript template for our read me file.

    const content = template(answers);

    //fileSave. write file with the title "README.MD" that contains the content of the variable content. 

    fs.writeFile("README.MD",content,function (err,data) {
      if (err) {
        return console.log(err);
      }
      console.log(data);
    });
  });
};

//run the generate user input function on node index.js
generateUserInput();
 