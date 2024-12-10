import inquirer from 'inquirer';
import colors from 'colors';
import * as Queries from '../queries.js';
import * as Main from './cli.js';
import * as Role from './rolecli.js';
export async function empIdSelector(input) {
    const empOb = await Queries.fetchTableData('employees');
    for (let i = 0; i < empOb.rows.length; i++) {
        if (empOb.rows[i].name === input) {
            return i + 1;
        }
    }
    return -1;
}
export async function findEmployee() {
    const dept = await Main.deptCli();
    const display = await Queries.fetchEmpByDept(dept);
    const employee = await inquirer
        .prompt({
        type: 'list',
        message: 'Select Employee.',
        choices: display.rows,
        name: 'name'
    });
    return employee.name;
}
export async function findManager(deptID) {
    const employees = await Queries.fetchEmpByDept(deptID);
    if (!employees.rows) {
        return 'NULL';
    }
    else {
        const isHead = await inquirer
            .prompt({
            type: 'confirm',
            message: 'Is this employee Department Head?',
            name: 'deptHead',
        });
        if (isHead.deptHead) {
            return 'NULL';
        }
        else {
            const manager = await inquirer
                .prompt({
                type: 'list',
                message: `Select Employee's Manager.`,
                choices: employees.rows,
                name: 'name',
            });
            return manager.name;
        }
    }
}
export async function addEmp() {
    //gather data
    const empName = await Main.nameCli();
    const empDept = await Main.deptCli();
    const empRole = await Main.roleCli(empDept);
    //catch managerName null string and convert
    let managerName = await findManager(empDept);
    let managerID = null;
    if (managerName === 'NULL') {
        managerID === null;
    }
    else {
        managerID = await empIdSelector(managerName);
    }
    //convert role selection to corresponding ID
    const empRoleId = await Role.roleIdSelector(empRole);
    Queries.createEmployee(empName, empDept, empRoleId, managerID);
}
;
export async function updateEmp() {
    const employees = await Queries.fetchTableData('employees');
    const updateCli = await inquirer
        .prompt([
        {
            type: 'list',
            message: colors.cyan('Select Employee'),
            choices: employees.rows,
            name: 'emp'
        },
        {
            type: 'list',
            message: colors.cyan('What would you like to update?'),
            choices: ['Name', 'Role', 'Department'],
            name: 'upd'
        }
    ]);
    const updChoice = await updateCli.upd;
    const empName = await updateCli.emp;
    const empId = await empIdSelector(empName);
    if (updChoice === 'Name') {
        //get name choice, update
        const name = await Main.nameCli();
        Queries.updateEmpName(empId, name);
    }
    else if (updChoice === 'Role') {
        //Get department choice, update, get roles from department, update
        const empDept = await Main.deptCli();
        Queries.updateEmpDept(empId, empDept);
        const role = await Main.roleCli(empDept);
        const roleId = await Role.roleIdSelector(role);
        Queries.updateEmpRole(empId, roleId);
    }
    else if (updChoice === 'Department') {
        //get department choice, update, get role from department, update
        //redundant -- Role and Department cannot be updated seperately -- update dept to share roles?
        const empDept = await Main.deptCli();
        Queries.updateEmpDept(empId, empDept);
    }
}
;
