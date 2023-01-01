const Employee = require('../models/employee')

// Obtener todos los employees
const AllEmployees = async(req, res) => {
    const empleados = await Employee.find()
    res.json( empleados )
};


// Obtener un employee
const GetOneEmployee = async(req, res) => {
    const empleado = await Employee.findById(req.params.id);
    res.json(empleado);
};


// Crear un employee
const CreateEmployee = async(req, res) => {
    // Crea un objeto con los parametros
    const newEmpleado = new Employee(req.body);
    // Guarda el objeto en la DB.
    await newEmpleado.save();

    res.send({
        msg: "Empleado creado"
    });
};


// Actualizar un employee
const UpdateEmployee = async(req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.send({
        msg: "Empleado Actualizado"
    });
};


// Borrar un employee
const DeleteEmployee = async(req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({
        msg: "Empleado borrado"
    })
};


module.exports = {
    AllEmployees,
    GetOneEmployee,
    CreateEmployee,
    UpdateEmployee,
    DeleteEmployee
}