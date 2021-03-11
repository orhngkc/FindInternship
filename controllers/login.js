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
            req.session.uniqId = 'VAR'
            console.log(req.session.uniqId);
            res.redirect('/?login=success')
        }
      });
}

module.exports = loginController