import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  return <div>{id}번째 글입니다.</div>;
};

export default Detail;
