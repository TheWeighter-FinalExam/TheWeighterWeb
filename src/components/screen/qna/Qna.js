import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="flex w-full h-[88vh] justify-center items-center border-b-1 border-gray-500 flex-col">
      <button onClick={() => navigate("/qna/create")}>글 작성</button>
      <TableContainer className="flex w-4/5 h-4/5 justify-center items-center flex-col">
        <Table sx={{ height: "70%", width: "70%" }}>
          <TableHead>
            <TableCell align="center" sx={{ width: "5%", backgroundColor: "gray", color: "white" }}>
              번호
            </TableCell>
            <TableCell align="center" sx={{ width: "60%", backgroundColor: "gray", color: "white" }}>
              제목
            </TableCell>
            <TableCell align="center" sx={{ width: "25%", backgroundColor: "gray", color: "white" }}>
              등록일시
            </TableCell>
            <TableCell align="center" sx={{ width: "10%", backgroundColor: "gray", color: "white" }}>
              조회수
            </TableCell>
          </TableHead>
          <TableBody>
            {showData.map((value) => {
              return (
                <TableRow>
                  <TableCell align="center">{value}</TableCell>
                  <TableCell align="center" style={{ cursor: "pointer" }} onClick={() => navigate("/qna/" + value)}>
                    {value}번째 제목
                  </TableCell>
                  <TableCell align="center">2022-11-14</TableCell>
                  <TableCell align="center">{value}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Pagination count={LAST_PAGE} defaultPage={1} boundaryCount={2} onChange={(e) => handlePage(e)} />
      </TableContainer>
    </div>
  );
};

export default Qna;
