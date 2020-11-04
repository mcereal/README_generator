const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateREAMDME = require("./generateREADME");

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
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
      message: "What is your repository's name?",
      name: "repoName",
    },
    {
      type: "list",
      message: "What kind of license should your project have?",
      choices: [
        "None",
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "BSD 2-Clause 'Simplified' License",
        "BSD 3-Clause 'New' or 'Revised' License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
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
};

promptUser()
  .then((answers) => {
    const content = generateREAMDME(answers);

    return writeFileAsync("README.md", content);
  })
  .then(() => {
    console.log("Successfully wrote README.md");
  })
  .catch((err) => console.log(err));
