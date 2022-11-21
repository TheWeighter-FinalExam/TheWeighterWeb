import React from "react";
import styles from "../../css/header.module.css";
import { Search } from "@mui/icons-material";
import title from "../../../public/title.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.header}>
        <div className={styles.title} onClick={() => navigate("/")}>
          <img src={title} className={styles.title_img}></img>
        </div>
        <div className={styles.menubar}>
          <button className={styles.menuItem} onClick={() => navigate("/info")}>
            기능 소개
          </button>
          <button className={styles.menuItem} onClick={() => navigate("/barcode")}>
            BARCODE
          </button>
          <button className={styles.menuItem}>MENU</button>
          <button className={styles.menuItem}>MENU</button>
          <button className={styles.menuItem} onClick={() => navigate("/qna")}>
            고객 지원
          </button>
          <Search style={{ cursor: "pointer", marginRight: "10px", width: "40px", height: "40px" }} />
          <button className={styles.button} onClick={() => navigate("/login")}>
            로그인
          </button>
          <button className={styles.button} style={{ margin: 0 }} onClick={() => navigate("/register")}>
            회원가입
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
