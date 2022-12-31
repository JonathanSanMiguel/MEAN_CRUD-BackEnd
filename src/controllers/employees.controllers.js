// Obtener todos los employees
const AllEmployees = (req, res) => {
    res.send('hello')
};

// Obtener un employee
const GetOneEmployee = (req, res) => {
    res.send('one employee')
};

// Crear un employee
const CreateEmployee = (req, res) => {
    res.send('create employee')
};

// Actualizar un employee
const UpdateEmployee = (req, res) => {
    res.send('update')
};

// Borrar un employee
const DeleteEmployee = (req, res) => {
    res.send('delete employee')
};


module.exports = {
    AllEmployees,
    GetOneEmployee,
    CreateEmployee,
    UpdateEmployee,
    DeleteEmployee
}