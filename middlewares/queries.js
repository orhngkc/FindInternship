const conn = require('../conn')

const queriesMw = async (req, res, next) => {

        conn.query('SELECT * FROM internship ORDER BY created_at DESC', function (error, results, fields) {
            if (error) throw error;
            else{
                console.log(results); 
                req.interns = results
            }
          });

        conn.query('SELECT COUNT(*) AS yCount FROM users', function (error, results, fields) {
            if (error) throw error;
            else{
                console.log(results, 'sayııııı'); 
                req.ally = results
            }
        });
        conn.query('SELECT AVG(salary) AS maas FROM internship', function (error, results, fields) {
            if (error) throw error;
            else{
                console.log(results, 'maaaaş'); 
                req.maas = results
            }
        });
        conn.query('SELECT COUNT(*) AS xCount FROM internship', function (error, results, fields) {
            if (error) throw error;
            else{
                console.log(results, 'sayııııı'); 
                req.all = results
            }
            next()
        });
    }

module.exports = queriesMw