import passport from 'passport';
import { User } from '../../models';
import local from './LocalStrategy';
const LocalStrategy = require('passport-local').Strategy;

const passportSettings = () => {
  passport.serializeUser((user, done) => {
    console.log(`serializeUser: ${user}`);
    done(null, user.id);
  });

  passport.deserializeUser( async (id, done) => {
    User.findOne({
      where: { id },
    })
      .then( user => done(null, user))
      .catch( err => done(err));
  });

  local();
}

export default passportSettings;