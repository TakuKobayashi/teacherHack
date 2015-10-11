/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var passport = require('passport');
module.exports = {
  _config: {
    actions: false,
    shortcuts: false,
    rest: false
  },

  login: function(req, res) {
    passport.authenticate('local', function(err, user, info) {
      if ((err) || (!user)) {
        return res.redirect('/login');
      }
      req.logIn(user, function(err) {
        if (err) res.send(err);
        return res.redirect('/');
      });
    })(req, res);
  },

  signup: function(req, res) {
    var loginObj = {mailAddress: req.param('mailAddress'), password: req.param('password')};
    User.findOne(loginObj).exec(function(err, user){
      if ((err) || (user)) {
        res.redirect('/signup');
      }else{
        loginObj["name"] = req.param('name');
        User.create(loginObj).exec(function(err, user){
          if ((err) || (!user)) {
            return res.redirect('/signup');
          }
          req.logIn(user, function(err) {
            if (err) res.send(err);
            return res.redirect('/');
          });
        });
      }
    });
  },

  logout: function(req, res) {
    req.logout();
    res.redirect('/');
  }
};