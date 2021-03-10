var express = require('express');
var router = express.Router();

//middlewares
const registerMw = require('../middlewares/registerMw')
const sessionMw = require('../middlewares/sessionMw')

/* POST login page. */
router.get('/sign-in', function(req, res) {
  res.render('login', { title: 'FindInternship Giriş Yap' });
});

/* GET login page. */
router.post('/sign-in', sessionMw);

/* GET register page. */
router.get('/sign-up',function(req, res) {
  res.render('register', { title: 'FindInternship Giriş Yap' });
});

/* POST register page. */
router.post('/sign-up', registerMw);

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
    title: 'FindInternship Anasayfa' ,
  });
});

module.exports = router;
