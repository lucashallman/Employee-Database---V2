import * as Queries from '../queries.js';
import * as Main from './cli.js';
export async function deptIdSelector(input) {
    const deptOb = await Queries.fetchTableData('departments');
    for (let i = 0; i < deptOb.rows.length; i++) {
        if (deptOb.rows[i].name === input) {
            return i + 1;
        }
    }
    return -1;
}
export async function addDept() {
    const deptName = await Main.nameCli();
    Queries.createDept(deptName);
}
