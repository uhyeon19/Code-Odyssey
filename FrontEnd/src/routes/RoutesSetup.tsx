import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import MyPage from '../pages/myPage/MyPage';
import LoginRedirectPage from '../pages/login/LoginRedirectPage';

const RoutesSetup = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/main' element={<MyPage />} />
      <Route path='/oauth/redirected/kakao' element={<LoginRedirectPage oauthProvider={'kakao'} />} />
      <Route path='/oauth/redirected/naver' element={<LoginRedirectPage oauthProvider={'naver'} />} />
      <Route path='/oauth/redirected/google' element={<LoginRedirectPage oauthProvider={'google'} />} />
      <Route path='*' element={<Login />} />
    </Routes>
  );
};

export default RoutesSetup;