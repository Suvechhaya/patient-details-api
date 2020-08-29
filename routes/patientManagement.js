const router = require('express').Router();
const patientController = require('../controllers/patientManagement');

router.get('/getPatients', patientController.getPatients);

router.post('/addPatients', patientController.addPatients);

module.exports = router;
