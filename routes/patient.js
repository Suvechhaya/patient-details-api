const router = require('express').Router();
const patientController = require('../controllers/patientManagement');

router.get('/getPatients', patientController.getPatients);

module.exports = router;
