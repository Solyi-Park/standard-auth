import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";

const Home = () => {
  const navigate = useNavigate();
  const handleToLoginButtonClick = () => {
    //로그인 페이지로 Routing
    navigate('/login')
  }
  return (
    <div>
      <h1>Home</h1>
      <p>Home page</p>
      <button onClick={handleToLoginButtonClick}>로그인!</button>
     <Navigation />
    </div>
  );
};

export default Home;
