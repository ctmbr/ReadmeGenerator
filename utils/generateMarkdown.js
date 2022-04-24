
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // [[License: MIT]("https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT")
  // [[License: IPL]("https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0")
  //   [[License: ISC]("https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC")
  //   [[License: MPL]("https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0")
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { if else return "" }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ##Table of Contents
  ${data.projectTitle}
  ${data.description}
`
  // renderLicenseBadge(license)
  // renderLicenseLink(license)
  // renderLicenseSection(license)
}

module.exports = generateMarkdown;
