const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  medicalStatus: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  accepted: {
    type: Boolean,
    required: true,
  },
  impression: {
    impression: Boolean,
    impressionDate: String,
    paid: Boolean,
    cashReceived: Number
  },
  xrays: {
    xraysReceived: Boolean,
    linkToImage: String,
    cephAnalysis: Boolean
  },
  intraOral: {
    intraOralPictures: Boolean,
    intraOralPictureDate: String
  },
  extraOral: {
    extraOralPictures: Boolean,
    extraOralPictureDate: String
  },
  fillOutManualForm: {
    type: Boolean
  },
  casePresentation: {
    casePresentation: Boolean,
    presentedTo: String,
    casePresentationDate: String
  },
  comment: {
    type: String
  },
  readyForBonding: {
    type: Boolean
  },
  thesis: {
    type: Boolean
  },
  bondingAppointment: {}
});

module.exports = mongoose.model('Patient', patientSchema);
