const conn = require('../conn')

const singleMw = async (req, res, next) => {
    console.log(req.params.slug, 'in middlaware slug')
        conn.query('SELECT * FROM internship WHERE id = ? ORDER BY created_at DESC', [req.params.slug ], function (error, results, fields) {
            if (error) throw error;
            else{
                console.log(results); 
                req.interns = results
                next()
            }
          });
    }

module.exports = singleMw