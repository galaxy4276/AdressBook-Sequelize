import passport from 'passport';
import { User } from '../../models/index';
import local from './LocalStrategy';

const passportSettings = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => done(user))
    .catch(err => done(err));
  });
  local(passport);
};

export default passportSettings;
