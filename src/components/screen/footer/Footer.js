import React from "react";
import styles from "../../css/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>©Copyright - Weighter™</div>
      <div className={styles.buttons}>
        <button className={styles.button}></button>
        <button className={styles.button}></button>
        <button className={styles.button}></button>
      </div>
    </div>
  );
};

export default Footer;
