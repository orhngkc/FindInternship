var express = require('express');
var router = express.Router();

//middlewares
const registerMw = require('../middlewares/registerMw')


router.route('/sign-in')
/* GET login page. */
router.get('/sign-in', function(req, res, next) {
  res.render('login', { title: 'FindInternship Giriş Yap' });
});

/* GET register page. */
router.get('/sign-up', function(req, res, next) {
  res.render('register', { title: 'FindInternship Giriş Yap' });
});

/* POST register page. */
router.post('/sign-up', registerMw, function(req, res) {
  res.render('register', { title: 'FindInternship Giriş Yap' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FindInternship Anasayfa' });
});

module.exports = router;
