import passport from 'passport';
import { User } from '../../models/index';
const LocalStrategy = require('passport-local');

module.exports = () => {
  console.log('LocalStrategy Running');
    passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'password',  
  }, async (id, pw, done) => {
    console.log('passport-local start!');
      const user =  await User.findOne({where: { id }}) 
      try {
      if (user) {
        done(null, user);
      } else {
        done(null, false, { message: '가입되지 않은 회원입니다.'});
      }
    } catch (err) {
      console.error(err);
      done(err);
    }
      }));
  } 
