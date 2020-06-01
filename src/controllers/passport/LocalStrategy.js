import passport from 'passport';
import { User } from '../../models';
const LocalStrategy = require('passport-local');

module.exports = (passport) => {
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
              done(null, user);
            }
        })
      .catch(err => {
        done(err);
      })
      }));
  }
