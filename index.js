const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'github',
    message: '💾 Enter your Github username:' ,
  },
  {
    type: 'input',
    name: 'email',
    message: '🖋️ Enter contact email address:',
  },
  {
    type: 'input',
    name: 'title',
    message: '🏷️ Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: '📁 Enter a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: '📋 Enter installation instructions including dependencies:',
    default: 'npm i'
  },
  {
    type: 'input',
    name: 'usage',
    message: '✅ What does the user need to know about using the repo?',
  },
  {
    type: 'list',
    name: 'license',
    message: '🚧 Enter your project license from the following:',
    choices: ["None","Appache","GNU","MIT", "Creative Commons License Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0","GNU General Public License v2.0","GNU Lesser General Public License v2.1", "Mozilla Public License 2.0","The Unlicense"]
  },
  {
    type: 'input',
    name: 'contributing',
    message: '💡 How do users contribute to the repo?',
  },
  {
    type: 'input',
    name: 'tests',
    message: '🧪 Enter instructions for running tests:',
    default: 'npm test'
  }
];

// function to write README file
function writeToFile(fileName, data) {
  const content = generateMarkdown(data);
  const filePath = path.join(__dirname, fileName);
  return fs.promises.writeFile(filePath, content);
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(`Generating README...`)
      console.log(answers)
      return writeToFile('README.md', answers);
    })
    .then(() => console.log('README file created successfully.'))
    .catch((err) => console.error(err));
}

// function call to initialize program
init();

