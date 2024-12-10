import * as Queries from '../queries.js';
import * as Main from './cli.js';
export async function roleIdSelector(input) {
    const roleOb = await Queries.fetchTableData('roles');
    for (let i = 0; i < roleOb.rows.length; i++) {
        if (roleOb.rows[i].name === input) {
            return i + 1;
        }
    }
    return -1;
}
export async function addRole() {
    const roleDept = await Main.deptCli();
    const roleName = await Main.nameCli();
    const roleId = await roleIdSelector(roleName);
    Queries.createRole(roleName, roleDept);
}
