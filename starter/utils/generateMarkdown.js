// function to generate markdown for README
function getBadge (licence){

  if (licence != "None") {
    return `![Github licence](https://img.shields.io/badge/licence-${licence}-blue.svg)`
  }
  return '';
}

function generateMarkdown(data) {
  return `
  # ${data.title}

  ${getBadge(data.licence)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  ${data.questions}
`;
}

module.exports = generateMarkdown;



