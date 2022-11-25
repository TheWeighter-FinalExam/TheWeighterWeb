import React from "react";

const Main = () => {
  return (
    <div className="flex w-full h-[88vh] items-center border-b-1 flex-col">
      <div className="flex w-full h-[35%] bg-banner justify-center items-center text-[30px] text-white">일상에서 찾아가는 건강</div>
      <div className="flex w-full h-[65%] justify-center items-center mt-20">
        <div className="flex w-1/5 h-[60%] justify-center items-center text-[50px] bg-blue-200">MAIN 1</div>
        <div className="flex w-1/5 h-[60%] justify-center items-center text-[50px] bg-red-200">MAIN 2</div>
        <div className="flex w-1/5 h-[60%] justify-center items-center text-[50px] bg-yellow-200">MAIN 3</div>
        <div className="flex w-1/5 h-[60%] justify-center items-center text-[50px] bg-pink-200">MAIN 4</div>
      </div>
    </div>
  );
};

export default Main;
