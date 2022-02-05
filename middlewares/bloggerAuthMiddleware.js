const passport = require('passport');
const httpStatus = require('http-status');

module.exports = (req, res, next) => {
    passport.authenticate('jwt', (error, user, info) => {
        if (error) {
            console.error(error);
            console.log(info);
            return next(error)
        }
        if (!user || user.userType !== 'blogger') {
            return res.status(httpStatus.UNAUTHORIZED).json({
                error: "Authorization required !!"
            })
        }
        req.user = user
        return next()
    })(req, res, next)
}