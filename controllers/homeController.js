import routes from '../routes';
import { Post, User } from '../models';
import passport from 'passport';
import bcrypt from 'bcrypt';

export const goHome = async (req, res) => {
  console.log('req.user :', req.user);
  const data = await Post.findAll({});

  res.render('home', { data });
};


export const goEditAddr = (req, res) => {
  res.render('editAdress', {});
};

export const postEditAddr = async (req, res) => {
  const { title, content } = req.body;
  console.log(req.body);
  await Post.create({
    title, 
    content,
  })
    .then(() => {
      console.log('데이터가 성공적으로 저장되었습니다.');
    })
    .catch(err => {
      console.log('데이터 저장 오류발생');
      console.error(err);
    });
  
  res.redirect(routes.home);
}


export const postLogin = passport.authenticate('local', {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});


export const getLogin = (req, res) => {
  res.render('login', {});
};   


export const getJoin = (req, res) => {
  res.render('join', {});
}


export const postJoin = async (req, res) => {
  const { id, password } = req.body;
  try {
    const alreadyAcc = await User.findOne({ where: { id } });
    if (alreadyAcc) {
      res.redirect(routes.home);
    }
    await User.create({
      id,
      pw: password,
      fk_id_key: req.user[0].id,
    });
    res.redirect(routes.home);
  } catch (err) {
    console.error(err);
    res.redirect(routes.join);  
  }
};


export const test = async (req, res, next) => {
  await User.findById('chldmsrl12')
    .then(user => console.log('findId :', user))
    .catch(err => console.error(err));
    next();
}


export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

