import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const Qna = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const LAST_PAGE = data.length % 10 === 0 ? parseInt(data.length / 10) : parseInt(data.length / 10) + 1; // 마지막 페이지
  const [page, setPage] = useState(1); // 처음 페이지는 1이다.
  const [showData, setShowData] = useState([]);

  const handlePage = (e) => {
    setPage(parseInt(e.target.outerText));
  };

  useEffect(() => {
    for (var i = 1; i < 105; i++) {
      const newData = data;
      newData.push(i);
      setData(newData);
      console.log(newData);
    }
  }, []);

  useEffect(() => {
    if (page === LAST_PAGE) {
      setShowData(data.slice(10 * (page - 1)));
    } else {
      setShowData(data.slice(10 * (page - 1), 10 * (page - 1) + 10));
    }
  }, [page]);
  return (
    <div className="flex w-full h-[88vh] justify-between items-center border-b-1 border-gray-500 flex-col">
      <div className="flex w-full h-1/5 mb-[3%] justify-center items-center bg-gray-200 text-4xl font-[700]">자유게시판</div>
      <table className="flex w-[90%] h-5/7 justify-center items-center flex-col mb-10">
        <thead className="flex w-full h-14 justify-center items-center border-y-2 border-black bg-gray-300">
          <th className="flex w-[5%] justify-center">No</th>
          <th className="flex w-[10%] justify-center">카테고리</th>
          <th className="flex w-[55%] justify-center">제목</th>
          <th className="flex w-[10%] justify-center">글쓴이</th>
          <th className="flex w-[10%] justify-center">작성시간</th>
          <th className="flex w-[5%] justify-center">조회수</th>
          <th className="flex w-[5%] justify-center">좋아요</th>
        </thead>
        <tbody className="flex w-full justify-center items-center flex-col">
          {showData.map((value) => (
            <tr className="flex h-12 w-full justify-center items-center border-b-[1px] border-gray-500">
              <td className="flex w-[5%] justify-center">{value}</td>
              <td className="flex w-[10%] justify-center">null</td>
              <td className="flex w-[55%] justify-center">제목 {value}</td>
              <td className="flex w-[10%] justify-center">글쓴이 {value}</td>
              <td className="flex w-[10%] justify-center">{moment(Date.now()).format("YYYY.MM.DD")}</td>
              <td className="flex w-[5%] justify-center">{value}</td>
              <td className="flex w-[5%] justify-center">{value}</td>
            </tr>
          ))}
        </tbody>
        <tr className="flex w-full h-14 justify-between items-center bg-gray-300 border-t-[1px] border-b-2 border-black">
          <Pagination
            count={LAST_PAGE}
            defaultPage={1}
            boundaryCount={2}
            color="primary"
            size="large"
            onChange={(e) => handlePage(e)}
            sx={{ display: "flex", width: "90%", justifyContent: "center" }}
          />
          <button
            onClick={() => navigate("/qna/create")}
            className="flex w-[8%] h-10 text-white bg-button justify-center items-center mr-[2%] rounded-full hover:bg-hover hover:transition"
          >
            글 쓰기
          </button>
        </tr>
      </table>
    </div>
  );
};

export default Qna;
