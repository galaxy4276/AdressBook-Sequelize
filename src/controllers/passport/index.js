import passport from 'passport';
import User from '../../models/User';
const LocalStrategy = require('passport-local').Strategy;

const passportSettings = (passport) => {
  passport.serializeUser((user, done) => {
    console.log('serializeUser');
    done(null, user.id);
  });

  passport.deserializeUser( async (id, done) => {
    console.log('deserializeUser');
    User.findOne({
      where: { id },
    })
      .then( user => done(err, user))
      .catch(err => done(err));
  });
  passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'password',  
  }, async (id, pw, done) => {
    console.log('passport-local start!');
      const user = await User.findOne({where: { id }}) 
        .then((err, user) => {
            if (err) {
              console.log(err);
              done(err);
            }
              if (user) {
              console.log('login success!');
              console.log(`findById result: ${user}`);
              done(null, user);
            }
        })
      .catch(err => {
        console.error(err);
        done(err);
      })
      }));
};

export default passportSettings;
