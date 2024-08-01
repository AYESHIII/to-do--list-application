//#! user/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.yellowBright.bold("\n \t WELCOME TO TODO-LIST APPLICATION  \n \t"));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "enter your new task",
        }
    ]);
    todoList.push(addTask.task);
    console.log(chalk.greenBright.bold `${addTask.task} TASK ADDED IN TODO-LIST SUCCESSFULLY!`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addMore",
            type: "confirm",
            message: " DO YOU WANT TO ADD MORE TASK ?",
            default: false
        }
    ]);
    conditions = addMoreTask.addMore;
}
console.log(chalk.blueBright.bold("YOUR ADDED TASK IS ", todoList));
