const fs = require('fs');
const inquirer = require('inquirer')
const questions = [
    { type: "input", name: "ProjectTitle", message: "What is your project name?" }, { type: "input", name: "Description", message: "Write a desciption for your project" }, { type: "input", name: "Installation", message: "Enter Installation Instructions" }
    , { type: "input", name: "usage", message: "Usage Instructions" }, { type: "list", name: "license", message: "Select a license.", choices: ["IBM", "ISC", "MIT", "Mozilla"] }, { type: "input", name: "contributing", message: "List Project Contrubtors" }, { type: "input", name: "Tests", message: "Enter Test Information" }, { type: "input", name: "Github", message: "Enter github username" }, { type: "input", name: "email", message: "Enter Email Address" },
]

// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
