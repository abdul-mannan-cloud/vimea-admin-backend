const Employee = require('../models/Employee');

const addEmployee = async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const employee = new Employee({ name, email, phone });
        const savedEmployee = await employee.save();
        res.status(200).json(savedEmployee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const editEmployee = async (req, res) => {
    try {
        const { id, name, email, phone } = req.body;
        const updatedEmployee = await Employee.findByIdAndUpdate(id, { name, email, phone }, { new: true });
        res.status(200).json(updatedEmployee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEmployee = await Employee.findByIdAndRemove(id);
        res.status(200).json(deletedEmployee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addEmployee, editEmployee, getAllEmployees, deleteEmployee };
