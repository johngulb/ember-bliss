#!/usr/bin/env node

const program = require("commander");
const inquirer = require("inquirer");

program.version('0.0.1')
       .command('deploy [environment]', 'deploy code')
       .command('test', 'run tests')
       .command('init', 'initialize bliss ember application')
       .option('-d, --dist [dist]', 'The directory to place build files')
       .parse(process.argv)

if(program.args[0] == 'deploy'){
  console.log("Deploying to production")
  console.log("ember build --production")
  console.log("cd dist/")
  console.log("gcloud app deploy")
  console.log("Deployed")
} else {
  console.log("UNKNOWN COMMAND")
}
