const Employee = require('../models/employee')

// Obtener todos los employees
const AllEmployees = async(req, res) => {
    const empleados = await Employee.find()
    res.json( empleados )
};


// Obtener un employee
const GetOneEmployee = (req, res) => {
    
    res.json('un empleado');
};


// Crear un employee
const CreateEmployee = async(req, res) => {
    // Crea un objeto con los parametros
    const newEmpleado = new Employee(req.body)
    // Guarda el objeto en la DB
    await newEmpleado.save()

    res.send({
        msg: "Empleado creado"
    })
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