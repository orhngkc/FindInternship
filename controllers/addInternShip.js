
const conn = require('../conn')

const addInternShip = async (req, res) => {
    
        let data = {
            name: req.body.name,
            department: req.body.select,
            adress: req.body.adress,
            info: req.body.info,
            salary: req.body.salary,
            point: req.body.point,
            num: req.body.num,
            acc: req.body.accept,
            add_at: req.session.username
        }

        
        conn.query('INSERT INTO internship SET ?', data, function (error, results, fields) {
            if (error) throw error;
            else console.log(results); res.redirect('/?add=success')
          });
    
}

module.exports = addInternShip