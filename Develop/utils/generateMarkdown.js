// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function getLicenseBadge(license) {
  switch (license) {
    case "The MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
    case "Boost Software License 1.0":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]";
    case "Eclipse Public License 1.0":
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]";
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
    case "None of the above":
      return "";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function getLicenseLink(license) {
  switch (license) {
    case "The MIT License":
      return "(https://opensource.org/licenses/MIT)";
    case "Apache 2.0":
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "Boost Software License 1.0":
      return "(https://www.boost.org/LICENSE_1_0.txt)";
    case "Eclipse Public License 1.0":
      return "(https://opensource.org/licenses/EPL-1.0)";
    case "Mozilla Public License 2.0":
      return "(https://opensource.org/licenses/MPL-2.0)";
    case "None of the above":
      return "";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "The MIT License":
      return `## License
      This project is licensed under the MIT License - see the License file for details.`;
    case "Apache 2.0":
      return `## License
      This project is licensed under the Apache License 2.0 - see the License file for details.`;
    case "Boost Software License 1.0":
      return `## License
        This project is licensed under the Boost Software License 1.0 - see the License file for details.`;
    case "Eclipse Public License 1.0":
      return `## License
        This project is licensed under the Eclipse Public License 1.0 - see the License file for details.`;
    case "Mozilla Public License 2.0":
      return `## License
          This project is licensed under the Mozilla Public License 2.0 - see the License file for details.`;
    case "None of the above":
      return "";
    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${getLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## License
  ${getLicenseLink(data.license)}
  
  ## Questions
  If you have any questions or issues with the repo, please reach out to ${
    data.email
  } or create an issue in the [repo](${data.repoUrl}).
`;
}

module.exports = generateMarkdown;
