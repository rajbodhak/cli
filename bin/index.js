#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import inquirer from "inquirer";
import ora from "ora";
import figlet from "figlet";

program.version("1.0.0").description("This is my test cli");
console.log(
    chalk.yellow(figlet.textSync("This is My First CLI".toUpperCase(), { horizontalLayout: "full" }))
)

program.action(() => {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What is your favorite season?",
            choices: ["Spring", "Summer", "Winter", "Monsoon", "Autumn"],
        },
    ]).then((result) => {
        const spinner = ora(`Let me check if really your favorite season is ${chalk.yellow(result.choice)} or not`).start();

        setTimeout(() => {
            spinner.succeed(chalk.green("I think you are Right✅"));
        }, 3000)
    })
})

program.parse(process.argv);