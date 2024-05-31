const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const newsletterRoutes = require('./routes/newsletterRoutes');

const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const app = express();

// middleware
app.use(express.static('Z_Images'));
app.use(express.static('styles'));
app.use(express.static(__dirname));
app.use(express.json());
app.use(cookieParser());

//view engine
app.set('view engine', 'ejs');


// database connection
const dbURI = process.env.DBURI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(5500))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('index'));
app.get('/index', (req, res) => res.render('index'));
app.get('/iMap', requireAuth, (req, res) => res.render('iMap'));
app.get('/cgv', (req, res) => res.render('cgv'));
app.get('/legal-mentions', (req, res) => res.render('legal-mentions'));
app.get('/privacy-policy', (req, res) => res.render('privacy-policy'));
app.use(authRoutes);

app.use(newsletterRoutes);
