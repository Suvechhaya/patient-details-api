const Patient = require('../model/Patient');

exports.addPatients = async (req, res) => {
  try {
    // Create a new patient
    const patient = new Patient({
      date: req.body.date,
      name: req.body.name,
      address: req.body.address,
      dob: req.body.dob,
      telephone: req.body.telephone,
      occupation: req.body.occupation,
      medicalStatus: req.body.medicalStatus,
      description: req.body.description,
      accepted: req.body.accepted,
      impression: req.body.impression,
      xrays: req.body.xrays,
      intraOral: req.body.intraOral,
      extraOral: req.body.extraOral,
      fillOutManualForm: req.body.fillOutManualForm,
      casePresentation: req.body.casePresentation,
      comment: req.body.comment,
      readyForBonding: req.body.readyForBonding,
      thesis: req.body.thesis,
      bondingAppointment: req.body.bondingAppointment,
    });

    const savedPatient = await patient.save();
    res.send(savedPatient);
  } catch (error) {
    if (!error.code) error.code = 500;
    res.status(error.code).send({ error: error });
    return;
  }
};

exports.getPatients = async (req, res) => {
  try {
    const getPatients = await Patient.find();
    res.send(getPatients);
  } catch (err) {
    if (!error.code) error.code = 500;
    res.status(error.code).send({ error: error });
    return;
  }
};

exports.getPatientById = async (req, res) => {
  try{
    let fetchPatient = await Patient.findById(req.params.id);
        if (!fetchPatient) {
            res.status(404).json({ error: "Patient not found"});
            return;
        }

        res.send(fetchPatient);
  }catch(err){
    if (!error.code) error.code = 500;
    res.status(error.code).send({ error: error });
    return;
  }
}

exports.editPatient = async (req, res) => {
  try{
      await Patient.findByIdAndUpdate(req.params.id, req.body);
        const patient = await Patient.findById(req.params.id)
        res.status(200).json({
            data: patient,
            message: 'Patient has been updated'
        });
  }catch(err){
    if (!error.code) error.code = 500;
    res.status(error.code).send({ error: error });
    return;
  }
}

exports.deletePatient = async (req, res) => {
  try{
      await Patient.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'Patient has been deleted'
        });
  }catch(error){
    if (!error.code) error.code = 500;
    res.status(error.code).send({ error: error });
    return;
  }
}
