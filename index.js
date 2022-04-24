const fs = require('fs');
const path = require('path')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
const questions = [
    { type: "input", name: "projectTitle", message: "What is your project name?" }, { type: "input", name: "description", message: "Write a desciption for your project" }, { type: "input", name: "installation", message: "Enter Installation Instructions" }
    , { type: "input", name: "usage", message: "Usage Instructions" }, { type: "list", name: "license", message: "Select a license.", choices: ["IBM", "ISC", "MIT", "Mozilla"] }, { type: "input", name: "contributing", message: "List Project Contrubtors" }, { type: "input", name: "tests", message: "Enter Test Information" }, { type: "input", name: "github", message: "Enter github username" }, { type: "input", name: "email", message: "Enter Email Address" },
]

// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
function init() {
    inquirer.prompt(questions).then((answers) => {

        fs.writeFileSync(path.join(process.cwd(), "README.md"), generateMarkdown(answers))

        console.log(generateMarkdown(answers))
    }).catch((error) => { console.log(error) })
}
init()
