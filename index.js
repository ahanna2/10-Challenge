const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outPut = path.resolve(__dirname, "output");
const outputPath = path.join(outPut, "team.html");

const render = require("./library/htmlDisplay");

const engagementTeam = [];

const confirmName = async (name) => {
	if (name === "") {
		return "Wrong answer";
	}
	return true;
};

const confirmNumber = async (name) => {
	if (name === "") {
		return "Wrong answer";
	}
	return true;
};

function validateEmail(name) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(name)) {
		return true;
	}
	return "invalid email address!";
}

function teamMember() {
	inquirer
		.prompt([
			{
				type: "input",
				message: "What is your manager's name?",
				name: "name",
				validate: confirmName,
			},
			{
				type: "input",
				message: "What is your manager's id number?",
				name: "id",
				validate: confirmNumber,
			},
			{
				type: "input",
				message: "What is your manager's email address?",
				name: "email",
				validate: validateEmail,
			},
			{
				type: "input",
				message: "What is your manager's office number?",
				name: "officeNumber",
				validate: confirmNumber,
			},
		])

		.then(function (answers) {
			let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
			engagementTeam.push(manager);
			chooseMemberNext();
		})
		.catch(function (error) {
			console.log(error);
		});

	async function chooseMemberNext() {
		try {
			let teamChoice = await inquirer.prompt([
				{
					type: "list",
					name: "team",
					message: "Which team member you like to add?",
					choices: ["Engineer", "Intern", "I don't want to add any team members."],
				},
			]);

			if (teamChoice.team === "Engineer") {
				inquirer
					.prompt([
						{
							type: "input",
							message: "What is your engineer's name?",
							name: "name",
							validate: confirmName,
						},
						{
							type: "input",
							message: "What is your engineer's id number?",
							name: "id",
							validate: confirmNumber,
						},
						{
							type: "input",
							message: "What is your engineer's email address?",
							name: "email",
							validate: validateEmail,
						},
						{
							type: "input",
							message: "What is your engineer's GitHub username?",
							name: "github",
							validate: confirmName,
						},
					])

					.then(function (answers) {
						let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
						engagementTeam.push(engineer);
						chooseMemberNext();
					})
					.catch(function (error) {
						console.log(error);
					});
			} else if (teamChoice.team === "Intern") {
				inquirer
					.prompt([
						{
							type: "input",
							message: "What is your intern's name?",
							name: "name",
							validate: confirmName,
						},
						{
							type: "input",
							message: "What is your intern's id number?",
							name: "id",
							validate: confirmNumber,
						},
						{
							type: "input",
							message: "What is your intern's email address?",
							name: "email",
							validate: validateEmail,
						},
						{
							type: "input",
							message: "What is your intern's school name?",
							name: "school",
							validate: confirmName,
						},
					])
					.then(function (answers) {
						let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
						engagementTeam.push(intern);
						chooseMemberNext();
					})
					.catch(function (error) {
						console.log(error);
					});
			} else {
				generateFile();
			}
		} catch (error) {
			console.log(error);
		}
	}
}

teamMember();

function generateFile() {
	fs.writeFileSync(outputPath, render(engagementTeam));
}
