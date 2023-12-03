const Employee = require('../Models/Employee');
const {sign} = require("jsonwebtoken");

const addEmployee = async (req, res) => {
    try {
        const { name, email, phone,password } = req.body;
        const employee = new Employee({ name, email, phone,password,role:"employee" });
        const savedEmployee = await employee.save();
        res.status(200).json(savedEmployee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const editEmployee = async (req, res) => {
    try {
        const { employeeId } = req.params;
        const { name, email, phone,password } = req.body;

        const updatedEmployee = await Employee.findByIdAndUpdate(
            employeeId,
            { name, email, phone,password },
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

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const employee = await Employee.findOne({ email });
        if (!employee) {
            res.status(404).json({ message: 'Employee not found' });
        } else {
            if (employee.password === password) {
                const payload = {
                    email: employee.email,
                    role: employee.role
                };
                sign( payload,process.env.REACT_SECRET, (err, token) => {
                    if (err) {
                        res.status(500).json({ message: err.message });
                    } else {
                        res.status(200).json({ email:employee.email,name:employee.name,role:employee.role,token:token });
                    }
                })
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
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

const checkSignIn = (req, res, next) => {
    const { authorization } = req.headers;
    if (authorization) {
        const token = authorization.split(' ')[1];
        jwt.verify(token, 'secretkey', (err, payload) => {
            if (err) {
                res.status(401).json({ message: 'Invalid token' });
            } else {
                req.email = payload.email;
                next();
            }
        })
    } else {
        res.status(401).json({ message: 'You are not authorized' });
    }
}

module.exports = { addEmployee, editEmployee, getAllEmployees, deleteEmployee,getEmployee , signin,checkSignIn};