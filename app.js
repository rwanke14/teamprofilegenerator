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

const renderTeam = [];

createTeam()

//prompts: name, employee ID, email address, office number, github

function createTeam() {

    console.log("\x1b[34m", "Please set up your Manager's information first, before adding addiitonal employees!")

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the employee?',
                validate: async (input) => {
                    if (input == false) {
                        return 'Please enter employee name.';
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the employee's ID?",
                validate: async (input) => {
                    if (input == false) {
                        return 'Please enter employee ID.';
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the employee's email?",
                validate: async (input) => {
                    if (input == false) {
                        return 'Please enter employee email.';
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'list',
                name: 'role',
                message: "What is the employee's role?",
                choices: ["Manager", "Engineer", "Intern"],
                validate: async (list) => {
                    if (list == false) {
                        return 'Please select employee role.';
                    } else {
                        return true;
                    }
                }
            },

        ]).then((responses) => {

            createMember(responses)

        });
}

//function creates case statements for each role for additonal quesitons and triggers function for adding another team member.

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
                    validate: async (input) => {
                        if (input == false) {
                            return 'Please enter office number.';
                        } else {
                            return true;
                        }
                    }
                },
            ]).then((managerResponses) => {

                // const manager = new Manager (responses.name, responses.id,responses.email, managerResponses.office)
                // renderTeam.push(manager)

                renderTeam.push(new Manager(responses.name, responses.id, responses.email, responses.role, managerResponses.office))

                addTeamMember(responses)

            });
            break;

        case "Engineer":
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'github',
                    message: "What is the enigneer's github username?",
                    validate: async (input) => {
                        if (input == false) {
                            return 'Please enter employee username.';
                        } else {
                            return true;
                        }
                    }
                },
            ]).then((engineerResponses) => {


                renderTeam.push(new Engineer(responses.name, responses.id, responses.email, engineerResponses.github))

                addTeamMember(responses)

            });
            break;

        case "Intern":
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: "Where does the intern go to school?",
                    validate: async (input) => {
                        if (input == false) {
                            return 'Please enter school.';
                        } else {
                            return true;
                        }
                    }
                },
            ]).then((internResponses) => {


                renderTeam.push(new Intern(responses.name, responses.id, responses.email, internResponses.school))

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
            validate: async (input) => {
                if (input == false) {
                    return 'Please select yes or no.';
                } else {
                    return true;
                }
            }
        },
    ]).then((responses) => {

        switch (responses.team) {
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
