import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/first' element={<FirstPage />} />
        <Route path='/second' element={<SecondPage />} />
      </Routes>
    </>
  );
};

export default App;
