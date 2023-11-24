const mongoose = require("mongoose");

const Appointment = require('../Models/Appointment')
const addAppointment = async (req, res) => {
    const appointment = req.body
    const newAppointment = new Appointment(appointment)
    try {
        await newAppointment.save()
        res.status(201).json(newAppointment)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

const deleteAppointment = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Appointment with that id')
    await Appointment.findByIdAndRemove(id)
    res.json({message: 'Appointment deleted successfully'})
}

const getAppointments = async (req, res) => {
    const appointments = await Appointment.find({})
    res.status(200).json(appointments)
}

const updateAppointment = async (req, res) => {
    const {id} = req.params
    const appointment = req.body
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Appointment with that id')
    await Appointment.findByIdAndUpdate(id, appointment, {new: true})
    res.json({message: 'Appointment updated successfully'})
}

const getTodayAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({createdAt: {$gte: new Date().setHours(0, 0, 0, 0)}})
        res.status(200).json(appointments)
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
}

module.exports = {addAppointment, deleteAppointment, getAppointments, updateAppointment,getTodayAppointments}