const router = require('express').Router();
const { addService, editService, getAllServices,getService ,deleteService } = require('../Controllers/serviceController');

router.post('/addservice', addService);
router.post('/editservice/:serviceId', editService);
router.get('/getallservices', getAllServices);
router.get('/getservice/:serviceId', getService);
router.delete('/deleteservice/:id', deleteService);

module.exports = router;