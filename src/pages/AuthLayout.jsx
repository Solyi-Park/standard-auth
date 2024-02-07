import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthLayout = () => {
  // 1. localStorage에 accessToken이 존재하는지 확인
  // 2. AT 존재한다면 유요한지 확인
  // 3. 1 or 2 번 실패시 로그인페이지로 이동
  // 4. 성공시 아래를 렌더링
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = localStorage.getItem('accessToken');
      try {
        const { data } = await axios.get('https://moneyfulpublicpolicy.co.kr/user', {
          header: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${accessToken}`
          }
        });
        //검증이 끝난 시점에, setIsRender 해준다!
        console.log('굿');
        setIsRender(true);
      } catch (err) {
        alert('알수 없는 오류 발생');
        localStorage
        Navigate('/login');
      }
    };
    checkAuth();
  }, []);

  const isAuthenticated = localStorage.getItem('accessToken') ? true : false;

  console.log(isAuthenticated);
  if (isAuthenticated === false) {
    alert('로그인이 필요합니다. 로그인 페이지로 이동할께요.');
    return <Navigate to="/login" replace />;
  }

  if (!isRender) {
    return null;
  }
  return (
    <div>
      <h1>Sample Layout</h1>
      <p>Sample Layout</p>
      <main>
        <Outlet /> {/* render child routes */}
      </main>
    </div>
  );
};

export default AuthLayout;
