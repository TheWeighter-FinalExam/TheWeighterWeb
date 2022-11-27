import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Barcode from "../components/screen/main/Barcode";
import Info from "../components/screen/main/Info";
import Login from "../components/screen/main/Login";
import Main from "../components/screen/main/Main";
import Profile from "../components/screen/main/Profile";
import Qna from "../components/screen/qna/Qna";
import Register from "../components/screen/main/Register";
import Detail from "../components/screen/qna/Detail";
import Create from "../components/screen/qna/Create";
import Password from "../components/screen/main/Password";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/qna">
        <Route path="main" element={<Qna />} />
        <Route path="create" element={<Create />} />
        <Route path=":id" element={<Detail />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/info" element={<Info />} />
      <Route path="/barcode" element={<Barcode />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/password" element={<Password />} />
    </Routes>
  );
};

export default Router;
