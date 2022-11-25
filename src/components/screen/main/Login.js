import React, { useState } from "react";
import { TextFieldStyle } from "../../styles/TextFieldStyle";
import leftimg from "../../../public/login_background.png";
import person from "../../../public/person.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="flex w-full h-[88vh] justify-center items-center border-b-[1px] border-gray-200 bg-login">
      <div className="flex w-1/2 h-4/5 justify-center items-center rounded-lg shadow-shadow bg-white">
        <img src={leftimg} className="w-3/7 h-4/5" />
        <div className="flex w-[22vw] h-4/5 justify-center items-center bg-gray-100 flex-col rounded-r-2xl">
          <label className="flex text-[25px] font-semibold justify-center items-center text-gray-600 mb-7">
            <img src={person} className="w-20 mr-2.5" />
            Login to your account
          </label>
          <div className="flex w-full justify-center items-center flex-col">
            <TextFieldStyle label="email" sx={{ bgcolor: "white", width: "80%", mb: 1, borderRadius: "15px" }} onChange={(e) => setEmail(e.target.value)} />
            <TextFieldStyle
              type="password"
              label="password"
              sx={{ bgcolor: "white", width: "80%", mt: 1, borderRadius: "15px" }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex w-4/5 h-1/5 justify-end items-center">
            <button className="flex w-3/5 h-1/2 justify-center items-center bg-button rounded-3xl text-white font-[600]">Sign in</button>
          </div>
          <div className="flex w-full h-1/5 justify-end flex-wrap p-10">
            <label className="text-gray-400">Dont'have an account? &nbsp;</label>
            <label className="text-button cursor-pointer" onClick={() => navigate("/register")}>
              Create account
            </label>
            <label className="text-gray-400 cursor-pointer">Forgot your password?</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
