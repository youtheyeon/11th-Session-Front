import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CategoryPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
