const Employee = require('./library/employee')
const Manager = require('./library/manager')
const Intern = require('./library/intern')
const Engineer = require('./library/engineer')
const inquirer = require('inquirer')
const fs = require('fs')
// const htmlrender = require('./htmlrenderer')



//prompts: name, employee ID, email address, office number, github

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?",
        },
        {
            type: 'list',
            name: 'title',
            message: "What is the employee's role?",
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the manager's office number?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the enigneer's github username?",
        },

    ]).then((responses) => {


        //     fs.writeFile('README-sample.md', responses, (err) =>
        //     err ? console.error(err) : console.log('Generating Readme file!')

        //   );

    });



// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
