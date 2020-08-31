const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  date: {
    type: Date,
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
    type: Date,
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
    intraOralPicture: Boolean,
    intraOralPictureDate: Date
  },
  extraOral: {
    extraOralPictures: Boolean,
    extraOralPictureDate: Date
  },
  fillOutManualForm: {
    type: Boolean
  },
  casePresentation: {
    casePresentation: Boolean,
    presentedTo: String,
    casePresentationDate: Date
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
  bondingAppointment: {
    bondingAppointmentDate: Date,
    summary: String,
    pictures: Boolean,
    nextDate: Date
  }
});

module.exports = mongoose.model('Patient', patientSchema);
