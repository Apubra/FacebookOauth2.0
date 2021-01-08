const express = require('express')
const app = express()
const passport = require('passport');
const Strategy =require('passport-facebook')
require('./passport-setup');

app.use(passport.initialize());
app.use(passport.session());


app.get('/login/fb', passport.authenticate('facebook'));


app.get('/failed/login', (req, res, next) => {
    res.send('login failed');
});
app.get('/fb/auth', passport.authenticate('facebook',
    {failureRedirect: '/failed/login'}), function (req, res) {
    res.send(`Welcome mr ${req.user.displayName}!`);
});

app.get('/logout', (req, res, next) => {
    req.logout();
    console.log(req.isAuthenticated());
    res.send('user is logged out');
})


app.listen(5000, () => {
    console.log('server is started');
})