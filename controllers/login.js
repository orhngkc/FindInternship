const sha256 = require('sha256');
const conn = require('../conn')

const loginController = async (req, res) => {
    let data = [
        req.body.email,
        sha256(req.body.password)
    ]
    
    conn.query('SELECT * FROM users WHERE email = ? AND password = ?', data, function (error, results, fields) {
        if (error) throw error;
        else {
            console.log('burda')
            console.log(results.length)
            if(results.length !== 0){
            req.session.uniqId = 'VAR'
            req.session.username = results[0].username
            req.session.email = results[0].email

            res.redirect('/?login=success')
          }else{
            req.false = 'Kullanıcı adı veya şifreniz yanlış'
            res.redirect('/sign-in?false');
          }
        }
      });
}

module.exports = loginController