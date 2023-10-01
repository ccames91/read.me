// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type:"input",
    message:"what is the project title",
    name:"title",
},
{
    type:"input",
    message:"Table of contents",
    name:"Title",
},
{
    type:"input",
    message:"what is the description",
    name:"description",
},
{
    type:"input",
    message:"usage",
    name:"usage",
},
{
    type:"input",
    message:"resource",
    name:"resource",
},
{
    type:"input",
    message:"test instructions",
    name:"test",
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        console.log(data)
        var md = generateMarkdown(data)
        console.log(md);
        writeToFile("README.md", md);
       
    })
}

// Function call to initialize app
init();
