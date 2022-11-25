import React from "react";
import { ProfileTextFieldStyle } from "../../styles/TextFieldStyle";

const Profile = () => {
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
            <ProfileTextFieldStyle label="현재 비밀번호" sx={{ bgcolor: "white", width: "100%", borderRadius: "5px", mb: 1 }} />
            <ProfileTextFieldStyle label="현재 비밀번호" sx={{ bgcolor: "white", width: "100%", borderRadius: "5px", mb: 1 }} />
          </div>
        </div>
      </div>
      <div className="flex w-[30%] h-3/5 justify-center items-center rounded-2xl ml-5 bg-white shadow-shadow"></div>
    </div>
  );
};

export default Profile;
