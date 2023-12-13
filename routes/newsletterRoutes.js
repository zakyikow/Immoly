const express = require('express');
const validator = require('validator'); // Importez la bibliothèque validator
const Subscription = require('../models/newsletterModel');
const router = express.Router();

router.post('/subscribe', express.json(), async (req, res) => {
  const { name, email } = req.body;

  try {
    // Vérifier si l'email existe déjà dans la base de données
    const existingSubscription = await Subscription.findOne({ email });

    if (existingSubscription) {
      return res.status(400).json({ message: 'Cet email est déjà inscrit à la newsletter.' });
    }

    // Vérifier si l'email est valide
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Veuillez entrer une adresse email valide.' });
    }

    // Email n'existe pas et est valide, ajouter un nouvel abonné
    const newSubscription = new Subscription({ name, email });
    await newSubscription.save();

    res.status(201).json({ message: 'Inscription à la newsletter réussie!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de l\'inscription à la newsletter.' });
  }
});

module.exports = router;
