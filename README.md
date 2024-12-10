# Business Database Manager

## A simple program for handling departments, roles, and employees within a business.

## Description

"This program uses Inquirer to manage an SQL database via Postgres. The user navigates a series of menus, selecting various options to view and edit lists of employees, roles, and departments. Users can also set basic management structure. Program is controlled entirely through the command line."



- The Problem I hope to solve: This program is a quick and easy way to manage any number of employees, departments, or roles.

- The way I hope to solve it: This program keeps a postgres database with all the information, structuring and filtering the data as the User needs.

- Solving this problem was difficult for the following reasons: Postgres queries gave me some challenge, but the primary challenge was debugging Inquirer code

- I learned the following: I learned how to handle promises, asynchronous functions, and data tables. A very useful assignment!



## Table of Contents



- [Installation](#installation)

- [Usage](#usage)

- [License](#license)

- [Questions](#questions)



## Installation



Download the raw code from the github repository and extract it into a folder of your choice.



## Usage

See Video :

[![Tutorial Video](https://img.youtube.com/vi/gshKRHHGutE/0.jpg)](https://www.youtube.com/watch?v=gshKRHHGutE)


FULL EXPLANATION:

Before running the program, enter your postgres database and run the schema.sql, then the seeds.sql files.

Then, use the command 'npm run start' to launch the program.

Use the arrow keys to navigate the menu, and the keyboard to enter inputs when prompted.

    Adding an employee:

    To add an employee, use the 'add employee' option.

    First, enter the employee's name.

    Then, select their department.

    After that, select a role from within the department.

    If this employee is the lead of that role, type "Yes" or "y" and press enter. If not, type "No" or "n" and press enter.

    If the user is not the head of their role, you will be prompted to select an employee to be their manager.

    Once you have entered their Name, Department, Role, and Manager, they will be entered into the database and can be viewed via the selectable methods.


## License
 ----------------------
 Published under the MIT license.
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
 (https://opensource.org/licenses/MIT)
 ----------------------

## Questions



GitHub Repository: https://github.com/lucashallman/Employee-Database---V2



Contact me here: [lucas.hallmanc@gmail.com](lucas.hallmanc@gmail.com)

