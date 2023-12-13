const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  pseudo: {type: String,
    required: [true, 'Veuillez entrer un pseudo.'],
    unique:true, 
    minlength: [3, 'Pseudo trop court (3 caractères minimum)']},
  
  email: {type: String,
    required: [true, 'Veuillez entrer un email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Veuillez entrer un email valide.']},
  
  password: {type: String,
    required: [true, 'Veuillez entrer un mot de passe.'],
    minlength: [8, 'Mot de passe trop court (8 caractères minimum)']},
  
  date : {type: Date, default : Date.now}
});


// fire a function before doc saved to db
userSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// static method to login user
userSchema.statics.login = async function(email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('Mot de passe incorrect');
  }
  throw Error('Email incorrect');
};


const User = mongoose.model('user', userSchema);

module.exports = User;
