import React, { useState } from "react";
import { ProfileTextFieldStyle } from "../../styles/TextFieldStyle";
import profile from "../../../public/profile.png";
import pen from "../../../public/pen.png";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Profile = () => {
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
    <div className="flex w-full h-[88vh] justify-center items-center border-b-1 bg-gray-200">
      <div className="flex w-3/5 h-[90%] justify-center items-center rounded-2xl mr-5 bg-white shadow-shadow">
        <div className="flex w-1/2 h-full p-2.5 justify-center items-center float-left flex-col">
          <div className="flex w-full p-4 bg-gray-200 rounded flex-col my-1.5">
            <label className="flex w-full text-[25px] font-[600]">기본</label>
            <label className="flex w-full p-2.5 text-[15px] text-gray-600">내용</label>
            <label className="flex-w-full p-2.5 border-[1px] border-gray-400 rounded bg-white">null</label>
            <label className="flex w-full p-2.5 text-[15px] text-gray-600">내용</label>
            <label className="flex-w-full p-2.5 border-[1px] border-gray-400 rounded bg-white">null</label>
            <label className="flex w-full p-2.5 text-[15px] text-gray-600">내용</label>
            <label className="flex-w-full p-2.5 border-[1px] border-gray-400 rounded bg-white">null</label>
          </div>
          <div className="flex w-full p-4 bg-gray-200 rounded flex-col my-1.5">
            <label className="flex w-full text-[25px] font-[600]">기본</label>
            <label className="flex w-full p-2.5 text-[15px] text-gray-600">내용</label>
            <label className="flex-w-full p-2.5 border-[1px] border-gray-400 rounded bg-white">null</label>
            <label className="flex w-full p-2.5 text-[15px] text-gray-600">내용</label>
            <label className="flex-w-full p-2.5 border-[1px] border-gray-400 rounded bg-white">null</label>
            <label className="flex w-full p-2.5 text-[15px] text-gray-600">내용</label>
            <label className="flex-w-full p-2.5 border-[1px] border-gray-400 rounded bg-white">null</label>
          </div>
        </div>
        <div className="w-[2px] h-[90%] bg-gray-400"></div>
        <div className="flex w-1/2 h-full p-2.5 justify-center items-center float-right flex-col">
          <div className="flex w-full p-4 bg-gray-200 rounded flex-col my-1.5">
            <label className="flex w-full text-[25px] font-[600]">기본</label>
            <label className="flex w-full p-2.5 text-[15px] text-gray-600">내용</label>
            <label className="flex-w-full p-2.5 border-[1px] border-gray-400 rounded bg-white">null</label>
            <label className="flex w-full p-2.5 text-[15px] text-gray-600">내용</label>
            <label className="flex-w-full p-2.5 border-[1px] border-gray-400 rounded bg-white">null</label>
            <label className="flex w-full p-2.5 text-[15px] text-gray-600">내용</label>
            <label className="flex-w-full p-2.5 border-[1px] border-gray-400 rounded bg-white">null</label>
          </div>
          <div className="flex w-full p-4 bg-gray-200 rounded flex-col my-1.5">
            <label className="flex w-full text-[25px] font-[600]" style={{ marginBottom: 10 }}>
              비밀번호 재설정
            </label>
            <ProfileTextFieldStyle label="현재 비밀번호" sx={{ bgcolor: "white", width: "100%", borderRadius: "5px", mb: 1 }} />
            <ProfileTextFieldStyle
              label="새로운 비밀번호"
              sx={{ bgcolor: "white", width: "100%", borderRadius: "5px", mb: 1 }}
              onChange={(e) => onChangePassword(e)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>{isShowPassword ? <Visibility /> : <VisibilityOff />}</IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <ProfileTextFieldStyle label="비밀번호 확인" sx={{ bgcolor: "white", width: "100%", borderRadius: "5px", mb: 1 }} onChange={(e) => onChangeConfirmPassword(e)} />
            <div className="flex w-full ml-2">
              <label className="flex w-1/2 text-[15px] float-right">
                {pwCheck ? <label className="text-blue-600">확인</label> : <label className="text-red-600">비밀번호가 일치하지 않습니다.</label>}
              </label>
              <div className="flex w-1/2 text-[12px] text-gray-500 items-end flex-col mr-4">
                <label>8 ~ 14자 사이 입력 (0-9, a-z, A-Z)</label>
                <label>특수 문자 필요 (!, @, #, $, %)</label>
              </div>
            </div>
          </div>
          <div className="flex w-full mt-2 justify-end mr-4">
            <button className="flex w-36 h-10 bg-button justify-center items-center text-white rounded-xl drop-shadow-lg">변경 내용 저장</button>
          </div>
        </div>
      </div>
      <div className="absolute w-[15%] h-[30%] ml-[62%] p-1 mb-[15%] border-2 border-gray-400 rounded-full bg-white">
        <img src={profile} className="w-full h-full"></img>
      </div>
      <div className="flex w-[30%] h-3/5 mt-[10%] justify-center items-center rounded-2xl ml-5 bg-white shadow-shadow flex-col">
        <label className="flex text-[36px]">오 재혁</label>
        <div className="flex w-4/5 h-1/5 bg-gray-200 items-end rounded-lg">
          <textarea type="text" className="flex w-[95%] h-full p-2 float-left bg-gray-200 rounded-l-lg focus:outline-0 resize-none"></textarea>
          <img src={pen} className="flex w-[20px] h-[20px] m-1 cursor-pointer"></img>
        </div>
      </div>
    </div>
  );
};

export default Profile;
