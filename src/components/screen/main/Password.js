import React, { useState } from "react";
import leftimg from "../../../public/login_background.png";
import unlock from "../../../public/unlock.png";
import { TextFieldStyle } from "../../styles/TextFieldStyle";

const Password = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="flex w-full h-[88vh] justify-center items-center border-b-[1px] border-gray-200 bg-login">
      <div className="flex w-1/2 h-4/5 justify-center items-center rounded-lg shadow-shadow bg-white">
        <img src={leftimg} className="w-3/7 h-4/5" />
        <div className="flex w-[22vw] h-4/5 justify-center items-center bg-gray-100 rounded-r-2xl flex-col">
          <label className="flex text-[25px] font-semibold justify-center items-center text-gray-600 mb-5">
            <img src={unlock} className="w-20 mr-2.5" />
            비밀번호 찾기
          </label>
          <label className="flex text-[12px] text-gray-400">계정 생성 시 입력했던 이름과 이메일을 입력하세요.</label>
          <div className="flex justify-center items-center flex-wrap my-3">
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
          </div>
          <label className="flex w-4/5 text-[14px] text-red-600 justify-end">이름 또는 이메일 주소가 일치하지 않습니다.</label>
          <div className="flex w-4/5 justify-end">
            <button className="flex w-32 h-12 bg-button justify-center items-center text-[18px] text-white rounded-full mt-5">확인</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
