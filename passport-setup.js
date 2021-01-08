const passport = require('passport');
const Strategy =require('passport-facebook')

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

passport.use(new Strategy({
        clientID: '624411798282110',
        clientSecret: 'cdfadaa26d228f925a6eaefaa074b008',
        callbackURL: 'http://localhost:5000/fb/auth',
        profileFields: ['id', 'displayName']
    },
    function (accessToken, refreshToken, profile, done) {
        // if user exist by id
        // else user ko save krna hai
        const user = {};
        done(null, user);
    }
))