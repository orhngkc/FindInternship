const sha256 = require('sha256');
const conn = require('../conn')

const registerContoller = async (req, res) => {
    let rePassValid =  req.body.password == req.body.confirmpassword ? true : false

    if (rePassValid == true){
        let data = {
            username: req.body.username,
            email: req.body.email,
            password: sha256(req.body.password),
        }
        
        conn.query('INSERT INTO users SET ?', data, function (error, results, fields) {
            if (error) throw error;
            else console.log(results); res.send('ok!'); res.redirect('/sign-in?register=success')
          });
    }

}

module.exports = registerContoller