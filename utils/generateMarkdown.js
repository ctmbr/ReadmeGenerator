
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // [[License: MIT]("https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT")
  // [[License: IPL]("https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0")
  //   [[License: ISC]("https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC")
  //   [[License: MPL]("https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0")
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) { if license else return "" }
const renderLicenseSection = (license) => {
  if (license === "IBM") return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  if (license === "ISC") return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  if (license === "MIT") return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  if (license === "Mozilla") return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"


  else return ""
}
// Planned even more dynamic generator. I'll return to this.
// const toc = []
// const headings = []
// function renderToc(data) {
// if (data.hasOwnProperty('description')) toc.push("[Description](#description)\"", headings.push("### Description"))
// if (data.hasOwnProperty('installation')) toc.push("[Installation](#installation)\"", headings.push("### Installation"))
// if (data.hasOwnProperty('usage')) toc.push("[Usage](#usage)\"", headings.push("### Usage"))
// if (data.hasOwnProperty('tests')) toc.push("[Tests](#tests)\"", headings.push("### Tests"))
// if (data.hasOwnProperty('contact')) toc.push("[Tests](#tests)\"", renderContacts()
// }



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${renderLicenseSection(data.license)}

* [Description](#description)

* [Installation](#installation)

* [Usage](#usage)

* [Test Information](#testinformation)

* [Contact](#contact)

### Description
${data.description}
### Installation
${data.installation}
### Usage
${data.usage}
### Test Information
${data.tests}
### Contributors
${data.contributing}

### Contact

Github: ${data.github}

Email: ${data.email}

`
}

module.exports = generateMarkdown;
