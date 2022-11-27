import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  return (
    <div className="flex w-full h-[88vh] items-center flex-col">
      <div className="flex w-full h-[10%] mb-[3%] justify-center items-center bg-gray-200 text-4xl font-[700]">게시판</div>
      <div className="flex w-[90%] h-3/4 bg-gray-200  border-x-[1px] border-gray-300 flex-col">
        <div className="flex w-full h-14 border-y-2 border-black justify-center items-center text-[18px] font-[600]">글 쓰기</div>
        <div className="flex w-full h-12 border-b-2 border-black justify-between items-center bg-gray-100 text-[18px] font-[600]">
          <div className="flex w-1/2 h-full justify-center items-center">
            제목<input className="flex w-[70%] h-full ml-4 p-2 text-[15px] border-[1px] border-gray-400 rounded" placeholder="제목을 작성해주세요"></input>
          </div>
          <div className="flex w-1/2 h-full justify-center items-center">
            카테고리
            <FormControl sx={{ width: "30%", ml: "10px" }} variant="standard">
              <Select value={category} label="카테고리" onChange={(e) => setCategory(e.target.value)}>
                <MenuItem value="카테고리1">카테고리1</MenuItem>
                <MenuItem value="카테고리2">카테고리2</MenuItem>
                <MenuItem value="카테고리3">카테고리3</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="flex w-full h-[75%] bg-white justify-center items-center p-2 text-[20px] font-[600] flex-col border-b-2 border-black">
          <lbael className="flex w-[88%]">내용</lbael>
          <textarea className="flex w-[88%] h-[70%] border-[1px] border-gray-400 mt-2 resize-none p-3 focus:outline-none" />
          <div className="flex w-[88%] h-[1px] bg-gray-300 mt-5"></div>
          <div className="flex w-[88%] h-10 mt-5">
            <label className="flex w-32 h-full bg-button justify-center items-center text-white rounded-full text-[18px] cursor-pointer">
              이미지 선택
              <input type="file" className="hidden" accept="image/*" />
            </label>
          </div>
        </div>
        <div className="flex w-full h-14 justify-center items-center border-b-2 border-black">
          <div className="flex w-[80%] h-full justify-center items-center ml-[10%]">
            <button className="flex w-32 h-10 bg-button justify-center items-center text-white rounded-full text-[18px]">작성</button>
          </div>
          <button className="flex w-32 h-10 bg-gray-400 justify-center items-center text-white rounded-full text-[18px]" onClick={() => navigate("/qna/main")}>
            목록으로
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
