const sha256 = require('sha256');
const conn = require('../conn')

const sessionMw = async (req, res, next) => {
    if (req.session.init !== undefined || req.session.init !== false || req.session.init !== ''){
        let data = [
            req.body.email,
            sha256(req.body.password)
        ]

        conn.query('SELECT * FROM users WHERE email =  ? AND password = ?', data, function (error, results, fields) {
            if (error)  res.send('error')
            else {
                res.send(results)
                req.session.init = true
            }
        });
    }else{
        return req.session.init
    }
    next()
}

module.exports = sessionMw