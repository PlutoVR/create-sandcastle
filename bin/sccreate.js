#!/usr/bin/env node
const { execSync } = require('child_process');

// clone
console.log("-----------------------------------\nInitializing new Sandcastle project\n-----------------------------------");
const clone = execSync('git clone https://github.com/PlutoVR/sandcastle ' + process.argv[ 2 ], { stdio: 'inherit' });

// rename
console.log("-----------------------\nInstalling Dependencies\n-----------------------");

// npm install & remove .git
const en = execSync('cd ' + process.argv[ 2 ] + '&& npm i && rm -rf ./.git', { stdio: 'inherit' });

console.log("Sandcastle project \"" + process.argv[ 2 ] + "\" created!\n\n" +
    "starting Webpack dev server at http://localhost:1234/\n\n" +
    "hit [CTRL+C] to exit, `npm start` to restart the dev server");

// launch dev server
const st = execSync('cd ' + process.argv[ 2 ] + '&& npm start', { stdio: 'inherit' });


