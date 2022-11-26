import React, { useState } from "react";
import leftimg from "../../../public/login_background.png";
import rock from "../../../public/rock.png";
import { TextFieldStyle } from "../../styles/TextFieldStyle";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Register = () => {
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pwCheck, setPwCheck] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const onChangePassword = (e) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,14}$/;
    if (password && e.target.value === confirmPassword && regex.test(e.target.value)) {
      setPassword(e.target.value);
      setPwCheck(true);
    } else {
      setPassword(e.target.value);
      setPwCheck(false);
    }
  };

  const onChangeConfirmPassword = (e) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,14}$/;
    if (password && e.target.value === password && regex.test(e.target.value)) {
      setConfirmPassword(e.target.value);
      setPwCheck(true);
    } else {
      setConfirmPassword(e.target.value);
      setPwCheck(false);
    }
  };

  return (
    <div className="flex w-full h-[88vh] justify-center items-center border-b-1 border-gray-500 bg-login">
      <div className="flex w-1/2 h-4/5 justify-center items-center rounded-lg shadow-shadow bg-white">
        <img src={leftimg} className="flex w-3/7 h-5/6" />
        <div className="flex w-[22vw] h-5/6 justify-center items-center bg-gray-100 flex-col rounded-r-2xl">
          <div className="flex text-[25px] font-semibold justify-center items-center text-gray-600 mb-7">
            <img src={rock} className="flex w-16 mr-2.5" />
            Create Account
          </div>
          <div className="flex justify-center items-center flex-wrap mb-5">
            <TextFieldStyle
              id="first-name"
              sx={{ width: 170, bgcolor: "white", mr: "5px", borderRadius: "15px" }}
              label="First name"
              onChange={(e) => setFName(e.target.value)}
            />
            <TextFieldStyle
              id="last-name"
              sx={{ width: 170, bgcolor: "white", ml: "5px", borderRadius: "15px" }}
              label="Last name"
              onChange={(e) => setLName(e.target.value)}
            />
            <TextFieldStyle
              id="email"
              sx={{ width: 350, bgcolor: "white", borderRadius: "15px", mt: "20px" }}
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextFieldStyle
              sx={{ width: 350, bgcolor: "white", borderRadius: "15px", mt: "20px" }}
              type={isShowPassword ? "text" : "password"}
              label="Password"
              onChange={(e) => onChangePassword(e)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>{isShowPassword ? <Visibility /> : <VisibilityOff />}</IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <div className="flex w-5/6 justify-end flex-wrap mb-1 text-gray-400 text-[12px]">
              <label>8 - 14 charaters Required(0-9, a-z, A-Z)</label>
              <label>Special characters Required(!, @, #, $, %)</label>
            </div>
            <TextFieldStyle
              sx={{ width: 350, bgcolor: "white", borderRadius: "15px" }}
              type="password"
              label="Conrifm Password"
              onChange={(e) => onChangeConfirmPassword(e)}
            ></TextFieldStyle>
            <div className="flex w-5/6 justify-end flex-wrap mb-1">
              {pwCheck ? <label className="text-blue-600">OK</label> : <label className="text-red-600">Please Check Password & Confirm Password</label>}
            </div>
            <div className="flex w-5/6 justify-end flex-wrap mb-1 mt-2.5">
              I Agree to&nbsp;<label className="text-button cursor-pointer">Terms Of Service</label>&nbsp;and&nbsp;
              <label className="text-button cursor-pointer">Privacy Policy.</label>
              <input type="checkbox" />
            </div>
          </div>
          <div className="flex w-5/6 h-1/7 justify-end items-center">
            <button className="flex w-1/2 h-12 justify-center items-center bg-button rounded-2xl text-white hover:bg-hover hover:transition">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
