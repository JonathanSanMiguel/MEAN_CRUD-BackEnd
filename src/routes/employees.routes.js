const { Router } = require('express');
const router = Router();
const { AllEmployees, GetOneEmployee, CreateEmployee, UpdateEmployee, DeleteEmployee } = require('../controllers/employees.controllers');

// Routes
// Obtener todos los employees
router.get('/employees', AllEmployees);

// Obtener un employee
router.get('/employee', GetOneEmployee);

// Crear un empleado
router.post('/create:id', CreateEmployee);

// Actualizar un employee
router.put('update:id', UpdateEmployee)

// Borrar un empleado
router.delete('/delete:id', DeleteEmployee)


module.exports = router