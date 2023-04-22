// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function getLicenseBadge({license}) {
  let licenseBadge = '';
  if (license === "The MIT License") {
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0 License") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "Boost Software License 1.0") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license === "Eclipse Public License 1.0") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  } else if (license === "Mozilla Public License 2.0") {
    licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "None of the above") {
    licenseBadge = "";
  } else {
    licenseBadge = "";
  }

  return licenseBadge;
}

// Function that returns the license link
// If there is no license, return an empty string
function getLicenseLink({license}) {
  let licenseLink = '';
  if (license === "The MIT License") {
    licenseLink = "(https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0 License") {
    licenseLink = "(https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "Boost Software License 1.0") {
    licenseLink = "(https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license === "Eclipse Public License 1.0") {
    licenseLink = "(https://opensource.org/licenses/EPL-1.0)";
  } else if (license === "Mozilla Public License 2.0") {
    licenseLink = "(https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "None of the above") {
    licenseLink = "";
  } else {
    licenseLink = "";
  }

  return licenseLink;
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection({license}) {
  console.log(`${license} renderLicenseSection`)
  let licenseSection ;

  if (license === "The MIT License") {
    licenseSection = `This project is licensed under the MIT License - see ${getLicenseLink(license)} for details.`;
    } else if (license === "Apache 2.0 License") {
      licenseSection = `This project is licensed under the Apache License 2.0 - see ${getLicenseLink(license)} for details.`;
    } else if (license === "Boost Software License 1.0") {
      licenseSection = `This project is licensed under the Boost Software License 1.0 - see ${getLicenseLink(license)} for details.`;
    } else if (license === "Eclipse Public License 1.0") {
        licenseSection = `This project is licensed under the Eclipse Public License 1.0 - see ${getLicenseLink(license)} for details.`;
    } else if (license === "Mozilla Public License 2.0") {
        licenseSection = `This project is licensed under the Mozilla Public License 2.0 - see ${getLicenseLink(license)} for details.`;
      } else if (license === "None of the above") {
          licenseSection = "";
      } else {
          licenseSection = "---";
      }

      return licenseSection;
  }


// Function to generate markdown for README
function generateMarkdown(userData) {
  const licenseBadge = getLicenseBadge(userData);
  const licenseSection = renderLicenseSection(userData);

  return `
  ${licenseBadge}
  # ${userData.title}
  
  ## Description
  ${userData.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
  ${userData.installation}
  
  ## Usage
  ${userData.usage}
  
  ## Contributing
  ${userData.contributing}
  
  ## Tests
  ${userData.tests}
  
  ## License
  ${licenseSection}
  
  ## Questions
  If you have any questions or issues with the repo, please reach out to "[${userData.githubUserName}]("https://github.com/${userData.githubUserName}")" or create an issue in the "["repo"](${userData.repoUrl})".
`;
}

module.exports = generateMarkdown;
