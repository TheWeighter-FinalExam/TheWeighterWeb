import React from "react";
import styles from "../../css/profile.module.css";
import { ProfileTextFieldStyle } from "../../styles/TextFieldStyle";

const Profile = () => {
  return (
    <div className={styles.body}>
      <div className={styles.left_box}>
        <div className={styles.content1}>
          <div className={styles.inner_box}>
            <label className={styles.title}>기본</label>
            <label className={styles.content_name}>내용</label>
            <label className={styles.content}>null</label>
            <label className={styles.content_name}>내용</label>
            <label className={styles.content}>null</label>
            <label className={styles.content_name}>내용</label>
            <label className={styles.content}>null</label>
          </div>
          <div className={styles.inner_box}>
            <label className={styles.title}>기본</label>
            <label className={styles.content_name}>내용</label>
            <label className={styles.content}>null</label>
            <label className={styles.content_name}>내용</label>
            <label className={styles.content}>null</label>
            <label className={styles.content_name}>내용</label>
            <label className={styles.content}>null</label>
          </div>
        </div>
        <div style={{ width: "2px", height: "90%", backgroundColor: "rgb(150, 150, 150)" }}></div>
        <div className={styles.content2}>
          <div className={styles.inner_box}>
            <label className={styles.title}>기본</label>
            <label className={styles.content_name}>내용</label>
            <label className={styles.content}>null</label>
            <label className={styles.content_name}>내용</label>
            <label className={styles.content}>null</label>
            <label className={styles.content_name}>내용</label>
            <label className={styles.content}>null</label>
          </div>
          <div className={styles.inner_box}>
            <label className={styles.title} style={{ marginBottom: 10 }}>
              비밀번호 재설정
            </label>
            <ProfileTextFieldStyle label="현재 비밀번호" sx={{ bgcolor: "white", width: "100%", borderRadius: "5px", mb: 1 }} />
            <ProfileTextFieldStyle label="현재 비밀번호" sx={{ bgcolor: "white", width: "100%", borderRadius: "5px", mb: 1 }} />
            <ProfileTextFieldStyle label="현재 비밀번호" sx={{ bgcolor: "white", width: "100%", borderRadius: "5px", mb: 1 }} />
          </div>
        </div>
      </div>
      <div className={styles.right_box}></div>
    </div>
  );
};

export default Profile;
