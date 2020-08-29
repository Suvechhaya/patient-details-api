const Patient = require('../model/Patient');

exports.addPatients = async (req, res) => {
  try {
    // Create a new patient
    const patient = new Patient({
      date: res.body.date,
      name: res.body.name,
      address: res.body.address,
      dob: res.body.dob,
      telephone: res.body.telephone,
      occupation: res.body.occupation,
      medicalStatus: res.body.medicalStatus,
      description: res.body.description,
      accepted: res.body.description,
      impression: res.body.impression,
      xrays: res.body.xrays,
      intraOral: res.body.intraOral,
      extraOral: res.body.extraOral,
      fillOutManualForm: res.body.fillOutManualForm,
      casePresentation: res.body.casePresentation,
      comment: res.body.comment,
      readyForBonding: res.body.readyForBonding,
      thesis: res.body.thesis,
      bondingAppointment: res.body.bondingAppointment
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
