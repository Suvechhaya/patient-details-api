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
      bondingAppointment: req.body.bondingAppointment
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
  res.send(req.user);
};
