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
        const { employeeId } = req.params;
        const { name, email, phone } = req.body;

        const updatedEmployee = await Employee.findByIdAndUpdate(
            employeeId,
            { name, email, phone },
            { new: true } // This option returns the updated document
        );

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

const getEmployee = async (req, res) => {
    try {
        const { employeeId } = req.params;
        const employee = await Employee.findById(employeeId);
        
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addEmployee, editEmployee, getAllEmployees, deleteEmployee, getEmployee };
