var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findOne({ id: id } , function (err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy({
    usernameField: 'mailAddress',
    passwordField: 'password'
  },
  function(mailAddress, password, done) {

    User.findOne({ mailAddress: mailAddress }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect mailAddress.' });
      }

      bcrypt.compare(password, user.password, function (err, res) {
          if (!res)
            return done(null, false, {
              message: 'Invalid Password'
            });
          var returnUser = {
            mailAddress: user.mailAddress,
            createdAt: user.createdAt,
            id: user.id
          };
          return done(null, returnUser, {
            message: 'Logged In Successfully'
          });
        });
    });
  }
));

module.exports = {  
  express: {
    customMiddleware: function(app){
      // app: express() オブジェクト
      console.log("passport module initialize");
      app.use(passport.initialize());
      app.use(passport.session());
    }
  }
};