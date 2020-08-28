const router = require('express').Router();
const User = require('../model/User');

//Validation
const Joi = require('@hapi/joi');

const schema = {
  name: Joi.string().required(),
  email: Joi.string().required().email(),
  password: Joi.string().min(8).required()
};

router.post('/register', async (req, res) => {

  //Validating the data before we make a user
  const validation = Joi.validate(req.body, schema);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const saveUser = await user.save();
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
