const Employee = require('./library/employee')
const Manager = require('./library/manager')
const Intern = require('./library/intern')
const Engineer = require('./library/engineer')
const inquirer = require('inquirer')
const fs = require('fs')
// const htmlrender = require('./htmlrenderer')

createTeam()

//prompts: name, employee ID, email address, office number, github

function createTeam() {
    console.log("I Work!")
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
                name: 'role',
                message: "What is the employee's role?",
                choices: ["Manager", "Engineer", "Intern"]
            },

        ]).then((responses) => {

            console.log("Hello")
            createMember(responses)


        });
}

function createMember(responses) {

    const role = responses.role

    switch (role) {

        case "Manager":
            console.log("working")
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'office',
                    message: "What is the manager's office number?",
                },
            ]).then((responses) => {

                console.log("Hello")
                addTeamMember(responses)  
    
            });
        break;

        case "Engineer":
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'github',
                    message: "What is the enigneer's github username?",
                },
            ]).then((responses) => {

                console.log("Hello")
                addTeamMember(responses)  
    
            });
        break;

        case "Intern":
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: "Where does the intern go to school?",
                },
            ]).then((responses) => {

                console.log("Hello")
                addTeamMember(responses)  
    
            });
        break;
    }
}

function addTeamMember() {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'team',
            message: "Do you have another team member to add",
        },
    ]).then((responses) => {

        if (responses.team){
            createTeam()
        } 

        // switch (responses.team) {
        //     case responses.team === true:
        //         createTeam();
        //     break;
        //     case responses.team === false:

        //     break;
        // }

    })
}



// GIVEN a command-line application that accepts user input
    //inqurier used to prompt quesitons
// WHEN I am prompted for my team members and their information
    //inqurier prompts with questions and list to ask for their role
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
