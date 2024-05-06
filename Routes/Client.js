const express = require('express');
const router = express.Router();
const { addClient, editClient, getAllClients, deleteClient,getClient, getAllChildren,getChild,getByMail,updateChild } = require('../Controllers/clientController');

router.post('/addclient', addClient);
router.post('/editclient', editClient);
router.get('/getallclients', getAllClients);
router.get('/getclient/:id', getClient);
router.delete('/deleteclient/:id', deleteClient);
router.get('/getChild/:id', getChild);
router.post('/updateChild/:id',updateChild)
router.get('/getallchildren', getAllChildren);
router.get('/getclientmail/:mail', getByMail);


module.exports = router;
