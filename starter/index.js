const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'Enter your Github username 💾:' ,
  },
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project 🏷️:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project 📁:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions 📋:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage instructions 🗒️:',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Enter your project license 🔑:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines ⚙️:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions 🧪:',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Enter FAQs and contact information 🖋️:',
  },
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
      return writeToFile('README.md', answers);
    })
    .then(() => console.log('README file created successfully.'))
    .catch((err) => console.error(err));
}

// function call to initialize program
init();

