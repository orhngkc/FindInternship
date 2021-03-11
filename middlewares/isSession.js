async function isSession(req, res, next){
    console.log(req.session.uniqId, 'ses')
    req.isLogin = req.session.uniqId ? true : false ;
    next()
}

module.exports = isSession