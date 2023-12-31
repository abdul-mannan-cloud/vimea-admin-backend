const express = require('express');
const router = express.Router();

const { addAppointment, getAppointments, deleteAppointment,updateAppointment } = require('../Controllers/appointmentController');

router.post('/addappointment', addAppointment);
router.post('/editappointment/:id', updateAppointment);
router.get('/getallappointments', getAppointments);
router.delete('/deleteappointment/:id', deleteAppointment);
router.get('/gettodayappointments', getAppointments);

module.exports = router;