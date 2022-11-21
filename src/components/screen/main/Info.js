import React from "react";
import styles from "../../css/info.module.css";
import info1 from "../../../public/info1.png";
import info2 from "../../../public/info2.png";
import info3 from "../../../public/info3.png";

const Info = () => {
  return (
    <div className={styles.body}>
      <div className={styles.box} style={{ marginRight: "5%" }}>
        <div className={styles.img}>
          <img src={info1} style={{ width: "100%", height: "100%" }} />
        </div>
        <div className={styles.info}>
          <div className={styles.info_title}>
            <label style={{ marginLeft: "20px" }}>AI 식단 추천</label>
          </div>
          <div className={styles.info_content}>
            <label>사용자의 식단을 지속적으로 학습하여 AI가 평균적인 식단을 분석 후 사용자에게 부족한 영양소 등을 보충한</label>
            <label>식단을 추천해 주어 편항적인 식습관을 개선할 수 있습니다.</label>
          </div>
        </div>
      </div>
      <div className={styles.box} style={{ marginLeft: "5%" }}>
        <div className={styles.img}>
          <img src={info2} style={{ width: "100%", height: "100%" }} />
        </div>
        <div className={styles.info}>
          <div className={styles.info_title}>
            <label style={{ marginLeft: "20px" }}>바코드를 촬영하여 영양 성분 확인</label>
          </div>
          <div className={styles.info_content}>
            <label>식품에 붙어 있는 바코드를 촬영할 시 식별번호를 확인 후 해당 식품의 영양 성분을 확인할 수 있습니다.</label>
          </div>
        </div>
      </div>
      <div className={styles.box} style={{ marginRight: "5%" }}>
        <div className={styles.img}>
          <img src={info3} style={{ width: "100%", height: "100%" }} />
        </div>
        <div className={styles.info}>
          <div className={styles.info_title}>
            <label style={{ marginLeft: "20px" }}>운동 정보 제공</label>
          </div>
          <div className={styles.info_content}>
            <label>운동 코드, 홈 트레이닝 일상생활에서 손 쉽게 접근 가능한 운동 방법이나 자격증 취득을 위한 필수 조건,</label>
            <label>시험 내용 등의 정보를 사용자에게 제공합니다.</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
