import React, { useState } from "react";
import styles from "../../css/login.module.css";
import { TextFieldStyle } from "../../styles/TextFieldStyle";
import leftimg from "../../../public/login_background.png";
import person from "../../../public/person.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className={styles.body}>
      <div className={styles.box}>
        <img src={leftimg} style={{ height: "60vh" }} />
        <div className={styles.inner_box}>
          <label className={styles.label}>
            <img src={person} style={{ width: "80px", marginRight: "10px" }} />
            Login to your account
          </label>
          <div className={styles.input_box}>
            <TextFieldStyle label="email" sx={{ bgcolor: "white", width: 350, mb: 1, borderRadius: "15px" }} onChange={(e) => setEmail(e.target.value)} />
            <TextFieldStyle
              type="password"
              label="password"
              sx={{ bgcolor: "white", width: 350, mt: 1, borderRadius: "15px" }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.button_box}>
            <button className={styles.login_button}>Sign in</button>
          </div>
          <div className={styles.text}>
            <label style={{ color: "rgb(180, 180, 180)" }}>Dont'have an account? &nbsp;</label>
            <label style={{ color: "rgb(0, 145, 158)", cursor: "pointer" }} onClick={() => navigate("/register")}>
              Create account
            </label>
            <label style={{ color: "rgb(150, 150, 150)", cursor: "pointer" }}>Forgot your password?</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
