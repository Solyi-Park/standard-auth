import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [pw, setPw] = useState();

  const handleIdChange = (e) => {
    setId(e.target.value);
  };
  const handlePwChange = (e) => {
    setPw(e.target.value);
  };

  const handleToSignUpButtonClick = () => {
    navigate('/signup');
  };

  const handleSubmitButtonClick = async (e) => {
    e.preventDefault();
    // state인 id와 pw가져와서 로그인 시도
    try {
      const response = await axios.post('https://moneyfulpublicpolicy.co.kr/login', {
        id,
        pw
      });
      console.log(response);
    } catch (err) {
      console.log(err);
      alert(err.response.data.message);
    }

    // 로그인이 완료되면, 토큰을 로컬스토리지에 저장. 없을시 오류

    //로그인 성공에 대한 안내 메세지

    //메인페이지로 이동
  };
  return (
    <div>
      <header>
        <h1>로그인 페이지입니다.</h1>
        <p>로그인하려면 ID, PASSWORD를 입력하세요.</p>
      </header>
      <main>
        <form onSubmit={handleSubmitButtonClick}>
          <section>
            <label htmlFor="id">ID</label>
            <input id="id" type="string" value={id} onChange={handleIdChange} />
          </section>
          <section>
            <label htmlFor="pw">PASSWORD</label>
            <input id="pw" type="password" value={pw} onChange={handlePwChange} />
          </section>
          <button type="submit">로그인</button>
          <button onClick={handleToSignUpButtonClick} type="button">
            회원가입
          </button>
        </form>
      </main>
    </div>
  );
}
