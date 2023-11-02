const Client = require('../models/Client');

const addClient = async (req, res) => {
    try {
        const { clientName, mobileNumber, sales, userName, password } = req.body;
        const client = new Client({ clientName, mobileNumber, sales, userName, password });
        const savedClient = await client.save();
        res.status(200).json(savedClient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const editClient = async (req, res) => {
    try {
        const { id, clientName, mobileNumber, sales, userName, password } = req.body;
        const updatedClient = await Client.findByIdAndUpdate(id, { clientName, mobileNumber, sales, userName, password }, { new: true });
        res.status(200).json(updatedClient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteClient = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedClient = await Client.findByIdAndRemove(id);
        res.status(200).json(deletedClient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addClient, editClient, getAllClients, deleteClient };
