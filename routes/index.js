var express = require('express');
var router = express.Router();

//contollers
const registerContoller = require('../controllers/register')
const loginController = require('../controllers/login')
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

/* GET home page. */
router
  .route('/')
  .get(
    isSession,
    async (req, res) => {
      console.log(req.session)
    res.render('index', {
      title: 'Anasayfa',
      sess: req.isLogin
    });
  });

module.exports = router;
