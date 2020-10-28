const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your Github username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your project's name?",
      name: "projectName",
    },
    {
      type: "input",
      message: "Please write a brief description of your project",
      name: "projectDetails",
    },
    {
      type: "input",
      message: "What kind of license should your project have?",
      name: "license",
    },
    {
      type: "input",
      message: "What command should be run to install dependencies?",
      name: "dependencies",
    },
    {
      type: "input",
      message: "What command should be run to run tests?",
      name: "tests",
    },
    {
      type: "input",
      message: "What does the user need to know about using the repo?",
      name: "userRepoKnowledge",
    },
    {
      type: "input",
      message:
        "What does the user need to know about contributing to the repo?",
      name: "contributions",
    },
  ]);
}

function generateReadMe(answers) {
  return `#${answers.username}#${answers.email}#${answers.projectName}#${answers.projectDetails}#${answers.license}#${answers.dependencies}`;
}

async function init() {
  try {
    const answers = await promptUser();

    const readMeContent = generateReadMe(answers);

    await writeFileAsync("README.md", readMeContent);

    console.log("Successfully wrote to README.md");
  } catch (err) {
    console.log(err);
  }
}

init();
