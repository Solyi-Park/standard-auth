import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import UserProfilePage from "../pages/UserProfilePage";
import Login from "../pages/Login";
import SignupPage from "../pages/SignupPage";
import TestPage from "../pages/TestPage";
import AuthLayout from "../pages/AuthLayout";

export default function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userId" element={<UserProfilePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="page1" element={<div>Sample Page 1</div>} />
          <Route path="page2" element={<div>Sample Page 2</div>} />
        </Route>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/testPage" element={<TestPage />}/>
      </Routes>
    </Router>
  );
}
