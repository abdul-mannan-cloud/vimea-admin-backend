const express = require('express');
const router = express.Router();
const { addClient, editClient, getAllClients, deleteClient } = require('../Controllers/clientController');

router.post('/addclient', addClient);
router.post('/editclient', editClient);
router.get('/getallclients', getAllClients);
router.delete('/deleteclient/:blogId', deleteClient);

module.exports = router;
