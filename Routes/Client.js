const express = require('express');
const router = express.Router();
const { addClient, editClient, getAllClients, deleteClient,getClient } = require('../Controllers/clientController');

router.post('/addclient', addClient);
router.post('/editclient', editClient);
router.get('/getallclients', getAllClients);
router.get('/getclient/:id', getClient);
router.delete('/deleteclient/:id', deleteClient);

module.exports = router;
