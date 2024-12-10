import inquirer from "inquirer";
import { connectToDb } from "../connection.js";
function logCDB() {
    console.log('Initiating Database Connection...');
    connectToDb;
}
;
function test() {
    console.log('Initiating Inquiry...');
    inquirer
        .prompt([{
            type: 'confirm',
            message: 'Do you see this message?',
            name: 'confirm'
        }])
        .then(result => {
        if (result.confirm) {
            console.log('Prompt Acknowledged.');
        }
        ;
    });
    console.log('Inquiry Complete.');
}
logCDB();
test();
