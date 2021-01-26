//const Employee = require('./library/employee')
const Manager = require('./library/manager')
const Intern = require('./library/intern')
const Engineer = require('./library/engineer')

const inquirer = require('inquirer')
const fs = require('fs')
const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./library/htmlRenderer");


//Start prompts when app.js is run in terminal.

// const renderManager = {};

// const renderEngineer = {};

// const renderIntern = {};
const renderTeam = [];

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

//function creates case statements for each role for additonal quesitons and triggers function for adding another team member.

function createMember(responses) {

    const role = responses.role
    console.log(responses)

    switch (role) {

        case "Manager":
            console.log("working")
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'office',
                    message: "What is the manager's office number?",
                },
            ]).then((managerResponses) => {

                const manager = new Manager (responses.name, responses.id,responses.email, managerResponses.office)
                renderTeam.push(manager)
                
                //renderTeam.push(new Manager(responses.name, responses.id,responses.email,responses.role, managerResponses.office))
                
                console.log("Hello")
                console.log("Render Team: " + renderTeam)
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
            ]).then((engineerResponses) => {

                // const engineer = new Engineer (responses.name, responses.role, responses.email, responses.id, responses.github)
                // renderTeam.push(engineer)
                
                renderTeam.push(new Engineer(responses.name, responses.id,responses.email, engineerResponses.github))

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
            ]).then((internResponses) => {

                // const intern = new Intern (responses.name, responses.role, responses.email, responses.id, responses.school)
                // renderTeam.push(intern)
                renderTeam.push(new Intern(responses.name, responses.id,responses.email, internResponses.school))

                console.log("Hello")
                addTeamMember(responses)

            });
            break;
    }
}

//function triggers add a team member and calls prompts again. If no more team members are added it renders the html.

function addTeamMember() {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'team',
            message: "Do you have another team member to add?",
        },
    ]).then((responses) => {
        console.log(render(renderTeam))
        console.log("Testing: " + JSON.stringify(renderTeam))
        switch(responses.team){
            case true:
                createTeam()
            break;

            case false:
                if (fs.existsSync(OUTPUT_DIR) != true) {
                    fs.mkdirSync(OUTPUT_DIR)
                }
            
                fs.writeFile(outputPath, render(renderTeam), (err) =>
                err ? console.log(err) : console.log('Generating HTML!'));
             
            break;
        }

    })
}


// function renderDetails () {

//     if (fs.existsSync(OUTPUT_DIR) != true) {
//         fs.mkdirSync(OUTPUT_DIR)
//     }

//     fs.writeFile(outputPath, render(renderTeam), (err) =>
//     err ? console.error(err) : console.log('Generating HTML!'));

    
// }

//add functions to create html code



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
