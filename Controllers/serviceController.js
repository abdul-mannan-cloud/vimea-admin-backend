const Service = require('../models/Service');

const addService = async (req, res) => {
    try {
        const service = req.body;
        const newService = new Service(service);
        await newService.save();
        res.status(201).json(newService);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const editService = async (req, res) => {
    try {
        const { serviceId } = req.params;
        const service = req.body;

        const updatedService = await Service.findByIdAndUpdate(
            serviceId,
            service,
            { new: true } // This option returns the updated document
        );

        res.status(200).json(updatedService);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteService = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedService = await Service.findByIdAndRemove(id);
        res.status(200).json(deletedService);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { addService, getAllServices, editService, deleteService };