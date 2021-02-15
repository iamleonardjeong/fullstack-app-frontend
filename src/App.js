import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <>
      {/* path에 배열로 넣어주면 한 라우트 컴포넌트에 여러 개 경로를 설정할 수 있다. */}
      {/* /@:username -> http://localhost:3000/@hoon 같은 경로에서 hoon을 username 파라미터로 읽을 수 있게 해준다. */}
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
    </>
  );
}

export default App;
