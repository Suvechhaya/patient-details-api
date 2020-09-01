const router = require('express').Router();
const patientController = require('../controllers/patientManagement');

router.get('/getPatients', patientController.getPatients);

router.post('/addPatient', patientController.addPatients);

router.get('/getPatient/:id', patientController.getPatientById);

router.put('/editPatient/:id', patientController.editPatient);

router.delete('/deletePatient/:id', patientController.deletePatient);

module.exports = router;
