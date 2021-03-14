var express = require('express')
const conn = require('../conn')
var router = express.Router();

//contollers
const registerContoller = require('../controllers/register')
const loginController = require('../controllers/login')
const addInternShip = require('../controllers/addInternShip')
const logout = require('../controllers/logout')
//middlewares
const isSession = require('../middlewares/isSession')
const queriesMw = require('../middlewares/queries')
const childMw = require('../middlewares/child')
const singleMw = require('../middlewares/single')
//consts
const dep = require('../const/departments')

/* Get login page. */
router
  .route('/sign-in')
  .get(
    async (req, res) => {
    res.render('login', {
      title: 'Giriş Yap',
      msg: req.false
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
    isSession,
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
   if (req.isLogin == false){ 
     res.redirect('/sign-in')
   }else{
     res.render('add-internship', {
       title: 'Bir Staj Yeri Ekle',
       sess: req.isLogin
     });
   }
});

/* GET detay page. */
router
.route(['/detay/:slug'])
.get(
  isSession,
  childMw,
  async (req, res) => {
    console.log(dep[req.params.slug])
   if (req.isLogin == false) {
    res.redirect('/sign-in')
  }else{
  res.render('detay', {
    title: dep[req.params.slug - 2] + ' Staj Yerleri',
    sess: req.isLogin,
    department: dep[req.params.slug - 2],
    detay: req.interns
  });
}
});

/* GET single page. */
router
.route(['/internship/:slug'])
.get(
  isSession,
  singleMw,
  async (req, res) => {
   if (req.isLogin == false) {
    res.redirect('/sign-in')
  }else{
  res.render('single', {
    title: req.interns[0].name,
    sess: req.isLogin,
    department: dep[req.params.slug - 2],
    detay: req.interns[0]
  });
}
});

/* POST internship page. */
router
.route('/add-internship')
.post(
  addInternShip
  );

/* GET quit page. */
router
.route('/quit')
.get(
  logout.logout
  );

/* GET home page. */
router
  .route('/')
  .get(
    isSession,
    queriesMw,
    async (req, res) => {
    if (req.isLogin == false) {
      res.redirect('/sign-in')
    }else{
      console.log(req.all[0].xCount , 'count')
      res.render('index', {
        title: 'Anasayfa',
        sess: req.isLogin,
        sessInfo: req.session,
        lastInternships: req.interns,
        allx: req.all[0].xCount,
        ally: req.ally[0].yCount,
        maas:  req.maas[0].maas ,
        test: req.internss
      });
    }
   
  });

  router.use(function (req, res, next) {
    isSession,
    res.status(404).render('404');
  })
  

module.exports = router;
