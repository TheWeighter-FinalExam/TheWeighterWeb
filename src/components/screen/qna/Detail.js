import moment from "moment";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex w-full h-[88vh] items-center flex-col">
      <div className="flex w-full h-[10%] mb-[3%] justify-center items-center bg-gray-200 text-4xl font-[700]">게시판</div>
      <div className="flex w-[90%] h-4/5 max-h-[90%] bg-gray-200 items-center border-x-[1px] border-gray-300 flex-col">
        <div className="flex w-full h-16 border-y-2 border-black justify-center items-center text-[17px] font-[600]">
          <div className="flex w-[5%] justify-center">No</div>
          <div className="flex w-[10%] justify-center">카테고리</div>
          <div className="flex w-[55%] justify-center">제목</div>
          <div className="flex w-[10%] justify-center">글쓴이</div>
          <div className="flex w-[10%] justify-center">작성시간</div>
          <div className="flex w-[5%] justify-center">조회수</div>
          <div className="flex w-[5%] justify-center">좋아요</div>
        </div>
        <div className="flex w-full h-14 bg-gray-100 border-b-2 border-black justify-center items-center text-[15px]">
          <div className="flex w-[5%] justify-center">{id}</div>
          <div className="flex w-[10%] justify-center">카테고리</div>
          <div className="flex w-[55%] justify-center">제목 {id}</div>
          <div className="flex w-[10%] justify-center">글쓴이 {id}</div>
          <div className="flex w-[10%] justify-center">{moment(Date.now()).format("YYYY.MM.DD")}</div>
          <div className="flex w-[5%] justify-center">{id}</div>
          <div className="flex w-[5%] justify-center">{id}</div>
        </div>
        <div className="flex w-full min-h-3/4 h-3/4 bg-white border-b-2 border-black text-[14px] p-7 flex-col overflow-auto">
          <div className="flex w-full mb-5 flex-col border-b-2 border-gray-200 p-7">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((value) => (
              <>
                {value + "번째 줄입니다."}
                <br />
              </>
            ))}
          </div>
          <div className="flex w-full justify-center items-center mt-5">
            <div className="flex w-1/4 h-[500px] bg-gray-200 justify-center items-center mr-5">사진1</div>
            <div className="flex w-1/4 h-[500px] bg-gray-200 justify-center items-center mr-5">사진2</div>
            <div className="flex w-1/4 h-[500px] bg-gray-200 justify-center items-center mr-5">사진3</div>
          </div>
        </div>
        <div className="flex w-full h-14 border-b-2 justify-between border-black items-center">
          <button
            className="flex w-32 h-10 bg-gray-400 float-left ml-5 rounded-full text-white justify-center items-center"
            onClick={() => navigate("../main")}
          >
            글 목록
          </button>
          <div className="flex h-full justify-center items-center">
            <button className="flex w-20 h-10 bg-button rounded-full justify-center items-center text-white mr-2">수정</button>
            <button className="flex w-20 h-10 bg-red-600 rounded-full justify-center items-center text-white mr-5">삭제</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
