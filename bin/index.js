#!/usr/bin/env node

import { program } from "commander";

program
    .version("1.0.0")
    .description("This is my test cli")
    .option("-n, --name <type>", "Say Your Name")
    .action((option) => {
        console.log(`Hey, ${option.name}`);
    });

program.parse(process.argv);