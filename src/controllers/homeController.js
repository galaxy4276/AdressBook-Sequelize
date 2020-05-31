import routes from '../routes';
import { Post } from '../models';
import passport from 'passport';

export const goHome = async (req, res) => {
  const data = await Post.findAll();

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
  failureRedirect: routes.home,
  successRedirect: routes.home,
});


export const getLogin = (req, res) => {
  res.render('login', {});
};
