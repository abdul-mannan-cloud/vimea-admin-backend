const express = require('express');
const router = express.Router();
const {  addEmployee, editEmployee, getAllEmployees, deleteEmployee,signin } = require('../Controllers/employeeController');

router.post('/addemployee', addEmployee);
router.post('/editemployee', editEmployee);
router.get('/getallemployee', getAllEmployees);
router.delete('/deleteemployee/:employeeId', deleteEmployee);
router.post('/signin', signin);

module.exports = router;
