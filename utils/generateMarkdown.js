
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }else if(license === 'Apache'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }else if(license === 'ISC'){
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license){
    return '';
  }
  
  return `![License](${renderLicenseLink(license)})
  `
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {name, description, install, usage, license, contribution, tests, github, email} = data;
  return `
  # ${name}
  # Table of contents
  * [License](#license)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  ## ${description}

  # Installation
  ## ${install}

  # Usage
  ## ${usage} 

  # License
  - ${license}
  ## ${renderLicenseSection(license)}

  # Contributing
  ## ${contribution}

  # Tests
  ## ${tests}

  # Questions
  ## [Visit my Github](https://www.github.com/${github})

  ## [Send me an email:](${email})
`;
}

module.exports = generateMarkdown;
