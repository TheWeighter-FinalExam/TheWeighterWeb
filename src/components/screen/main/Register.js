import React from "react";
import styles from "../../css/register.module.css";
import leftimg from "../../../public/login_background.png";
import rock from "../../../public/rock.png";
import { TextFieldStyle } from "../../styles/TextFieldStyle";

const Register = () => {
  return (
    <div className={styles.body}>
      <div className={styles.box}>
        <img src={leftimg} style={{ height: "60vh" }} />
        <div className={styles.inner_box}>
          <div className={styles.label}>
            <img src={rock} style={{ width: "80px", marginRight: "10px" }} />
            Create Account
          </div>
          <div className={styles.input_box}>
            <TextFieldStyle id="first-name" sx={{ width: 170, bgcolor: "white", mr: "5px", borderRadius: "15px" }} label="First name" />
            <TextFieldStyle id="last-name" sx={{ width: 170, bgcolor: "white", ml: "5px", borderRadius: "15px" }} label="Last name" />
            <TextFieldStyle id="email" sx={{ width: 350, bgcolor: "white", borderRadius: "15px", mt: "20px" }} label="Email" />
            <TextFieldStyle sx={{ width: 350, bgcolor: "white", borderRadius: "15px", mt: "20px" }} label="Password" />
            <TextFieldStyle sx={{ width: 350, bgcolor: "white", borderRadius: "15px", mt: "20px" }} label="Conrifm Password" />
          </div>
          <div className={styles.text}>
            I Agree to&nbsp;<label style={{ color: "#1F9EA8", cursor: "pointer" }}>Terms Of Service</label>&nbsp;and&nbsp;
            <label style={{ color: "#1F9EA8", cursor: "pointer" }}>Privacy Policy.</label>
            <input type="checkbox" />
          </div>
          <div className={styles.button_box}>
            <button className={styles.signup_button}>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
