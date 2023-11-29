const express = require('express');
const router = express.Router();
const {  addEmployee, editEmployee, getAllEmployees, deleteEmployee, getEmployee ,signin} = require('../Controllers/employeeController');

router.post('/addemployee', addEmployee);
router.post('/editemployee/:employeeId', editEmployee);
router.get('/getemployee/:employeeId', getEmployee);
router.get('/getallemployee', getAllEmployees);
router.delete('/deleteemployee/:id', deleteEmployee);
router.post('/signin', signin);


module.exports = router;
