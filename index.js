const inquirer = require(`inquirer`);
const fs = require(`fs`);

const MITBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
const ApacheBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
const GPL2 = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
const GPL3 = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;

console.log(`Please add information about your project to generate a Readme\n Leave query blank to omit`);
inquirer.prompt([
    {
        type: `input`,
        message: `Title of the Project`,
        name: `title`
    },
    {
        type: `input`,
        message: `Description of the Project`,
        name: `description`
    },
    {
        type: `input`,
        message: `Installation Instructions`,
        name: `installation`
    },
    {
        type: `input`,
        message: `Project Usage`,
        name: `project-usage`
    },
    {
        type: `input`,
        message: `Contribution Guidelines`,
        name: `contributing`
    },
    {
        type: `input`,
        message: `Testing Instructions`,
        name: `tests`
    },
    {
        type: `list`,
        message: `License`,
        choices: [`MIT License`, `GNU General Public License (GPL) 2.0`, `Apache License 2.0`, `GNU General Public License (GPL) 3.0`],
        name: `license`
    },
    {
        type: `input`,
        message: `GitHub Username`,
        name: `github`
    },
    {
        type: `input`,
        message: `E-mail`,
        name: `email`
    },
])
    .then(data => {
        console.log()
        let readmeHeader = ``
        let readmeBody = ``;
        let questions = `#### Questions\n***`;
        let tableOfContents = `## Table of Contents`


        for (const property in data) {
            console.log(`${property}: ${data[property]}`);
            if (data[property] !== '') {
                switch (property) {
                    case `github`:
                        questions += `\nGithub: ${data[property]}\n`;
                        break;
                    case `email`:
                        questions += `\nE-mail: ${data[property]}\n`; 
                        break;
                    case `title`:
                        readmeHeader += `# ${formatText(data[property])}\n`;
                        break;
                    case `description`:
                        readmeHeader += `## ${data[property]} \n`;
                        break;
                    case `license`:
                        readmeBody += `## ${formatText(property)}\n***\n${GetBadge(data[property])}\n${data[property]}\n`;
                        tableOfContents += ` \n[${property}](#${property})\n`;
                        break;
                    default:
                        readmeBody += `## ${formatText(property)}\n***\n${data[property]}\n`;
                        tableOfContents += ` \n[${property}](#${property})\n`;
                        break;
                }
                
            }
        }
        tableOfContents += ` \n[Questions](#Questions) \n`;
        readmeBody = `${readmeHeader}\n${tableOfContents}\n${readmeBody}\n\n${questions}`;
        fs.writeFile(`README.md`, readmeBody, () => console.log("Readme generated"));
    });


const formatText = (text) => {
    let substrings = text.split(`-`);
    let title = ``;
    for (const s of substrings) {
        title += s.charAt(0).toUpperCase() + s.substring(1) + ` `;
    }
    return title.trim();
}

const GetBadge = (propertyValue) => {
    switch (propertyValue) {
        case `MIT License`: return MITBadge;

        case `GNU General Public License (GPL) 2.0`: return GPL2;

        case `Apache License 2.0`: return ApacheBadge;

        case `GNU General Public License (GPL) 3.0`: return GPL3;
    }
}