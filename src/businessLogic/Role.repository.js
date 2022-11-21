import Role from "../schemas/Role.Schema";

const addRole = async (role) => {
    const roleAux = new Role(role);
    const roleCreated = await roleAux.save();
    return roleCreated;
};

const updateRole = async (id, role) => {
    const roleUpdated = await Role.findOneAndUpdate({ _id: id }, role);
    return roleUpdated;
};

const deleteRole = async (id) => {
    const roleDeleted = await Role.findOneAndDelete({ _id: id });
    return roleDeleted;
};
const getRoleById = async (id) => {
    const role = await Role.findOne({ _id: id });
    return role;
};

const getAllRoles = async () => {
    const allRoles = await Role.find({});
    return allRoles;
};

module.exports = {
    addRole, updateRole, deleteRole, getRoleById, getAllRoles,
}