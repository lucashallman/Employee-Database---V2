//import modules
import inquirer from 'inquirer';
import colors from 'colors';
import * as Queries from '../queries.js';
import * as Employee from './employeecli.js';
import * as Dept from './deptcli.js';
import * as Role from './rolecli.js';
import { connectToDb } from "../connection.js";
//Question arrays
//Choice arrays
const mainChoices = ['View Departments', 'View Roles', 'View Employees', 'Update Employee Information', 'Add Employee', 'Add Role', 'Add Department'];
//General use inquiries
export function returnCli(response) {
    inquirer
        .prompt({
        type: 'confirm',
        message: 'Return to Menu?',
        name: 'return'
    })
        .then((res) => {
        if (res.return) {
            mainCLI();
        }
        else {
            menuHandler(response);
        }
        ;
    });
}
;
export async function nameCli() {
    const name = await inquirer
        .prompt({
        type: 'input',
        message: colors.cyan('Enter Full Name.'),
        name: 'entryName'
    });
    console.log(name.entryName);
    return name.entryName;
}
export async function roleCli(deptID) {
    const roles = await Queries.fetchRoles(deptID);
    const { role } = await inquirer
        .prompt({
        type: 'list',
        message: colors.cyan('Select Role from Current Department.'),
        choices: roles.rows,
        name: 'role'
    });
    console.log(role);
    return role;
}
export async function deptCli() {
    const depts = await Queries.fetchTableData('departments');
    const dept = await inquirer
        .prompt({
        type: 'list',
        message: colors.cyan('Select Department.'),
        choices: depts.rows,
        name: 'dept'
    })
        .then((result) => {
        console.log(result.dept);
        const renderID = Dept.deptIdSelector(result.dept);
        return renderID;
    });
    return dept;
}
//main cli
function mainCLI() {
    inquirer
        .prompt([
        {
            type: 'list',
            message: colors.cyan('Select an Action.'),
            choices: mainChoices,
            name: 'action'
        }
    ])
        .then((response) => menuHandler(response));
}
;
//Menu Handling
async function menuHandler(response) {
    if (response.action === 'View Departments') {
        const display = await Queries.fetchTableData('departments');
        //display the result on console
        console.table(display.rows);
    }
    else if (response.action === 'View Roles') {
        //function to render roles table in pg
        const dept = await deptCli();
        const display = await Queries.fetchRoles(dept);
        console.table(display.rows);
    }
    else if (response.action === 'View Employees') {
        //function to render employees table from pg
        const dept = await deptCli();
        const display = await Queries.fetchEmpByDept(dept);
        console.table(display.rows);
    }
    else if (response.action === 'Update Employee Information') {
        //function to update employee information inside pg table
        await Employee.updateEmp();
    }
    else if (response.action === 'Add Employee') {
        //function to add entry to employee pg table
        await Employee.addEmp();
    }
    else if (response.action === 'Add Role') {
        //function to add entry to role pg table
        await Role.addRole();
    }
    else if (response.action === 'Add Department') {
        //function to add entry to department table
        await Dept.addDept();
    }
    returnCli(response);
}
//exports
export { mainCLI, menuHandler };
//Initiate DB connection and CLI
connectToDb();
mainCLI();
