const User = require("../models/User");
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './S_KEYS/.env' });


// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { pseudo: '', email: '', password: '' };

  // incorrect email
  if (err.message === 'Email incorrect') {
    errors.email = 'Email ou Mot de passe incorrect'; //avant : Cet email n\'est pas enregistré , mais peut mener à des failles de sécurités
  }

  // incorrect password
  if (err.message === 'Mot de passe incorrect') {
    errors.password = 'Email ou Mot de passe incorrect'; //avant : Mot de passe incorrect
  }

  // duplicate email error
  if (err.code === 11000) {
    if (err.message.includes('email')) {
      errors.email = 'Cet email est déjà utilisé';
    }
    if (err.message.includes('pseudo')) {
      errors.pseudo = 'Ce pseudo est déjà utilisé';
    }
    return errors;
  }

  // validation errors
  if (err.message.includes('user validation failed')) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}


// create json web token
const maxAge = 0.5 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge
  });
};


// controller actions
module.exports.signup_get = (req, res) => {
  res.render('signup');
}

module.exports.login_get = (req, res) => {
  res.render('login');
}

module.exports.signup_post = async (req, res) => {
  const { pseudo, email, password, date } = req.body;

  try {
    const user = await User.create({ pseudo, email, password, date });
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000, secure: true});
    res.status(201).json({ user: user._id });
  }
  catch(err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
}

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000, secure: true});
    res.status(200).json({ user: user._id });
  }
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
}

module.exports.logout_get = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
}