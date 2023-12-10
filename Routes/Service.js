const router = require('express').Router();
const { addService, editService, getAllServices, deleteService } = require('../Controllers/serviceController');

router.post('/addservice', addService);
router.post('/editservice/:serviceId', editService);
router.get('/getallservices', getAllServices);
router.delete('/deleteservice/:id', deleteService);

module.exports = router;