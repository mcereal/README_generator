generateREAMDME = (answers) => {
  return `# ${answers.projectName} \n![License](https://img.shields.io/github/license/${answers.username}/${answers.repoName})\n## Description \n${answers.projectDetails} \n## Table of Contents \n\n- [Installation](##Instalation)\n- [Usage](##Usage)\n- [License](##License)\n- [Contributing](##Contributing)\n- [Tests](##Tests)\n- [Questions](##Questions) \n\n## Installation \n${answers.dependencies} \n## Usage \n${answers.userRepoKnowledge} \n## License \n${answers.license} \n## Contributing \n${answers.contributions} \n## Tests \n${answers.tests} \n## Questions \n- GitHub Profile: [${answers.username}](https://github.com/${answers.username}) \n- Contact information: ${answers.email}`;
};

module.exports = generateREAMDME;
