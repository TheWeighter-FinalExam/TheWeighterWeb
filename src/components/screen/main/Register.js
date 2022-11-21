import React, { useState } from "react";
import styles from "../../css/register.module.css";
import leftimg from "../../../public/login_background.png";
import rock from "../../../public/rock.png";
import { TextFieldStyle } from "../../styles/TextFieldStyle";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Register = () => {
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pwCheck, setPwCheck] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const onChangePassword = (e) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,14}$/;
    if (password && e.target.value === confirmPassword && regex.test(e.target.value)) {
      setPassword(e.target.value);
      setPwCheck(true);
    } else {
      setPassword(e.target.value);
      setPwCheck(false);
    }
  };

  const onChangeConfirmPassword = (e) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,14}$/;
    if (password && e.target.value === password && regex.test(e.target.value)) {
      setConfirmPassword(e.target.value);
      setPwCheck(true);
    } else {
      setConfirmPassword(e.target.value);
      setPwCheck(false);
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.box}>
        <img src={leftimg} style={{ height: "60vh" }} />
        <div className={styles.inner_box}>
          <div className={styles.label}>
            <img src={rock} style={{ width: "70px", marginRight: "10px" }} />
            Create Account
          </div>
          <div className={styles.input_box}>
            <TextFieldStyle
              id="first-name"
              sx={{ width: 170, bgcolor: "white", mr: "5px", borderRadius: "15px" }}
              label="First name"
              onChange={(e) => setFName(e.target.value)}
            />
            <TextFieldStyle
              id="last-name"
              sx={{ width: 170, bgcolor: "white", ml: "5px", borderRadius: "15px" }}
              label="Last name"
              onChange={(e) => setLName(e.target.value)}
            />
            <TextFieldStyle
              id="email"
              sx={{ width: 350, bgcolor: "white", borderRadius: "15px", mt: "20px" }}
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextFieldStyle
              sx={{ width: 350, bgcolor: "white", borderRadius: "15px", mt: "20px" }}
              type={isShowPassword ? "text" : "password"}
              label="Password"
              onChange={(e) => onChangePassword(e)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>{isShowPassword ? <Visibility /> : <VisibilityOff />}</IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <div className={styles.text} style={{ color: "rgb(150, 150, 150)", fontSize: "12px" }}>
              <label>8 - 14 charaters Required(0-9, a-z, A-Z)</label>
              <label>Special characters Required(!, @, #, $, %)</label>
            </div>
            <TextFieldStyle
              sx={{ width: 350, bgcolor: "white", borderRadius: "15px" }}
              type="password"
              label="Conrifm Password"
              onChange={(e) => onChangeConfirmPassword(e)}
            ></TextFieldStyle>
            <div className={styles.text}>
              {pwCheck ? <label style={{ color: "green" }}>OK</label> : <label style={{ color: "red" }}>Please Check Password & Confirm Password</label>}
            </div>
            <div className={styles.text} style={{ marginTop: "10px" }}>
              I Agree to&nbsp;<label style={{ color: "#1F9EA8", cursor: "pointer" }}>Terms Of Service</label>&nbsp;and&nbsp;
              <label style={{ color: "#1F9EA8", cursor: "pointer" }}>Privacy Policy.</label>
              <input type="checkbox" />
            </div>
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
