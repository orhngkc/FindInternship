var express = require('express')
const conn = require('../conn')
var router = express.Router();

//contollers
const registerContoller = require('../controllers/register')
const loginController = require('../controllers/login')
const addInternShip = require('../controllers/addInternShip')
//middlewares
const isSession = require('../middlewares/isSession')


/* Get login page. */
router
  .route('/sign-in')
  .get(
    async (req, res) => {
    res.render('login', {
      title: 'Giriş Yap'
    });
  });


/* POST login page. */
router
  .route('/sign-in')
  .post(
     loginController
  );

/* GET register page. */
router
  .route('/sign-up')
  .get(
    async (req, res) => {
    res.render('register', {
      title: 'Kayıt Ol'
    });
  });

/* POST register page. */
router
  .route('/sign-up')
  .post(
    registerContoller
  );

/* GET internship page. */
router
.route('/add-internship')
.get(
  isSession,
  async (req, res) => {
  res.render('add-internship', {
    title: 'Bir Staj Yeri Ekle',
    sess: req.isLogin
  });
});

/* POST internship page. */
router
.route('/add-internship')
.post(
  addInternShip
  );

/* GET home page. */
router
  .route('/')
  .get(
    isSession,
    async (req, res) => {
    // if (!req.isLogin) res.redirect('/sign-in')
    res.render('index', {
      title: 'Anasayfa',
      sess: req.isLogin
    });
  });

module.exports = router;
