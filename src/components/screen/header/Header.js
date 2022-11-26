import title from "../../../public/title.png";
import { useNavigate } from "react-router-dom";

const Header = ({ isLogined }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex w-full h-[7vh] justify-between items-center border-b-2 border-gray-300">
        <div className="flex h-[6vh] justify-center items-center ml-7 cursor-pointer" onClick={() => navigate("/")}>
          <img src={title} className="flex h-[6vh]"></img>
        </div>
        <div className="flex justify-center items-center mr-7">
          <button
            className="flex w-36 h-[4vh] justify-center items-center border-b-2 border-menuitem mr-7 text-[15px] font-[550]"
            onClick={() => navigate("/info")}
          >
            기능 소개
          </button>
          <button
            className="flex w-36 h-[4vh] justify-center items-center border-b-2 border-menuitem mr-7 text-[15px] font-[550]"
            onClick={() => navigate("/barcode")}
          >
            BARCODE
          </button>
          <button className="flex w-36 h-[4vh] justify-center items-center border-b-2 border-menuitem mr-7 text-[15px] font-[550]">MENU</button>
          <button className="flex w-36 h-[4vh] justify-center items-center border-b-2 border-menuitem mr-7 text-[15px] font-[550]">MENU</button>
          <button
            className="flex w-36 h-[4vh] justify-center items-center border-b-2 border-menuitem mr-7 text-[15px] font-[550]"
            onClick={() => navigate("/qna/main")}
          >
            고객 지원
          </button>
          {isLogined ? (
            <button
              className="flex w-80 h-[4vh] justify-center items-center border-2 border-black mr-5 text-[15px] font-[550]"
              onClick={() => navigate("/profile")}
              style={{ width: "300px" }}
            >
              프로필
            </button>
          ) : (
            <>
              <button
                className="flex w-40 h-[4vh] justify-center items-center border-2 border-black mr-5 text-menu font-menu"
                onClick={() => navigate("/login")}
              >
                로그인
              </button>
              <button
                className="flex w-40 h-[4vh] justify-center items-center border-2 border-black mr-5 text-menu font-menu"
                style={{ margin: 0 }}
                onClick={() => navigate("/register")}
              >
                회원가입
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
