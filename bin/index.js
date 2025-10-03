#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import inquirer from "inquirer";

program.version("1.0.0").description("This is my test cli");

program.action(() => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        }
    ]).then((message) => {
        console.log(chalk.blue(`Hello! nice to meet you ${chalk.yellow(message.name)}`))
    })
})

program.parse(process.argv);