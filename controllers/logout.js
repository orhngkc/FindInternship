exports.logout = function(req, res) {
    req.session.destroy();
    res.redirect('/sign-in')
}