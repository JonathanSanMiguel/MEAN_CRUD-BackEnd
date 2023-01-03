const { response } = require('express');
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
const CreateEmployee = async(req, res = response) => {
    // Parametros del empleado
    const { name, position, office, salary } = req.body

    try {
        // Verificaion del Nombre
        let empleado = await Employee.findOne({name})

        // SI el empleado existe, termina el proceso
        if (empleado) {
            return res.status(400).json({
                msg: "Usuario ya registrado"
            })
        }

        // Crea un objeto con los parametros
        const newEmpleado = new Employee(req.body);

        // Guarda el objeto en la DB.
        await newEmpleado.save();

        // res if successful 
        res.status(201).send({
            msg: "Empleado creado"
        });
    } catch (error) {
        return res.status(500).json({
            msg: "Someting was Wrong..."
        })
    }
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