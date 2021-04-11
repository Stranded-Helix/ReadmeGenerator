const inquirer = require(`inquirer`);
const fs = require(`fs`);

const MITBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
const ApacheBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
const GPL2 =  `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
const GPL3 = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;

console.log(`Please add information about your project to generate a Readme`);
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
        message: `Project Usage`,
        name: `usage`
    },
    {
        type: `input`,
        message: `Contribution Guidelines`,
        name: `contibutions`
    },
    {
        type: `input`,
        message: `Testing Instructions`,
        name: `testing`
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
.then(data => console.log(data));

const createSection = (title, data, link) => {

}