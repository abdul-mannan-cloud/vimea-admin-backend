const User = require('../Models/User');
const Cart = require("../Models/cart");

const addClient = async (req, res) => {
    try {
        const cart = await Cart.create({products:[]})
        const client = new User({...req.body, cart:cart._id});
        const savedClient = await client.save();
        res.status(200).json(savedClient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const editClient = async (req, res) => {
    try {
        const id = req.body._id;
        const updatedClient = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedClient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllClients = async (req, res) => {
    try {
        const clients = await User.find();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteClient = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        const deletedClient = await User.findByIdAndRemove(id);
        res.status(200).json(deletedClient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getClient =  async (req, res) => {
    try {
        const { id } = req.params;
        const client = await User.findById(id);
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { addClient, editClient, getAllClients, deleteClient,getClient };
