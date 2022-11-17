import React from "react";
import { Route, Routes } from "react-router-dom";
import Exam from "../components/screen/main/Exam";
import Login from "../components/screen/main/Login";
import Main from "../components/screen/main/Main";
import Qna from "../components/screen/main/Qna";
import Register from "../components/screen/main/Register";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/exam" element={<Exam />} />
      <Route path="/login" element={<Login />} />
      <Route path="/qna" element={<Qna />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Router;
