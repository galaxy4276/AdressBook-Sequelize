import passport from 'passport';
import User from '../../models/User';
const LocalStrategy = require('passport-local').Strategy;

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id)
      .then(user => done(null, user))
      .catch(err => done(err));
  });

  passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'pw',
  }, async (id, pw, done) => {
    try {
      const user = await User.findOne({ id }, (err, user) => {
        if (err) done(err);
        if (user) {
          done(null, user);
        }
      });
    } catch (err) {
      console.error(err);
      done(err);
    }
  }));
}

