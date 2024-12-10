import { pool } from './connection.js';
// Function to fetch table data
export async function fetchTableData(tableName) {
    try {
        // Dynamically construct the query string with the sanitized table name
        const query = `SELECT * FROM ${tableName}`;
        // Execute the query and wait for the result
        const result = await pool.query(query);
        return result; // Return the query result
    }
    catch (err) {
        console.error('Error fetching table data:', err);
        throw err; // Rethrow the error for the caller to handle
    }
}
;
export async function fetchbyID(table, id) {
    // const idFetch = await pool.query('SELECT FROM $1 WHERE id = $2', [table, id], (err: Error) => {
    //     if (err) {
    //         console.log(err)
    //         return;
    //     }
    // })
    // console.log(idFetch);
    // return idFetch;
    try {
        const query = `SELECT FROM ${table} WHERE id = ${id}`;
        const result = await pool.query(query);
        return result;
    }
    catch (err) {
        console.error('Error fetching table data:', err);
        throw err;
    }
}
;
export async function fetchRoles(deptID) {
    // const roleFetch = pool.query('SELECT FROM roles WHERE dept_id = $1', [deptID], (err: Error) => {
    //     if (err) {
    //         console.log(err)
    //         return;
    //     }
    // })
    // console.log(roleFetch);
    // return roleFetch;
    try {
        const query = `SELECT * FROM roles WHERE dept_id = ${deptID}`;
        const result = await pool.query(query);
        return result;
    }
    catch (err) {
        console.error('Error fetching table data:', err);
        throw err;
    }
}
;
export async function fetchEmpByDept(deptId, roleId) {
    try {
        let query = `SELECT * FROM employees WHERE dept_id = ${deptId}`;
        const params = [deptId];
        if (roleId !== undefined) {
            query += ` AND role_id = ${roleId}`;
            params.push(roleId);
        }
        const result = await pool.query(query);
        return result;
    }
    catch (err) {
        console.error('Error fetching Employee by Department.', err);
        throw err;
    }
}
// Functions to update employee info
export function updateEmpName(id, newName) {
    pool.query('UPDATE employees SET name = $1 WHERE id = $2', [newName, id], (err) => {
        if (err) {
            console.log(err);
            return;
        }
    });
}
;
export async function updateEmpRole(id, newRoleId) {
    // pool.query('UPDATE employees SET role_id = $1 WHERE id = $2', [newRoleId, id], (err: Error) => {
    //     if (err) {
    //         console.log(err)
    //         return;
    //     }
    // })
    try {
        const query = `UPDATE employees SET role_id = ${newRoleId} WHERE id = ${id}`;
        pool.query(query);
    }
    catch (err) {
        console.error('Error updating employee role_id', err);
        throw err;
    }
}
;
export function updateEmpDept(id, newDeptId) {
    pool.query('UPDATE employees SET dept_id = $1 WHERE id = $2', [newDeptId, id], (err) => {
        if (err) {
            console.log(err);
            return;
        }
    });
}
;
//functions to create new entries in existing table
export function createEmployee(name, dept, role, managerID) {
    pool.query('INSERT INTO employees (name, dept_id, role_id, manager_id) VALUES ($1, $2, $3, $4)', [name, dept, role, managerID], (err) => {
        if (err) {
            console.log(err);
            return;
        }
    });
}
;
export function createRole(name, dept) {
    pool.query('INSERT INTO roles (name, dept_id) VALUES ($1, $2)', [name, dept], (err) => {
        if (err) {
            console.log(err);
            return;
        }
    });
}
;
export function createDept(name) {
    pool.query('INSERT INTO departments (name) VALUES ($1)', [name], (err) => {
        if (err) {
            console.log(err);
            return;
        }
    });
}
;
