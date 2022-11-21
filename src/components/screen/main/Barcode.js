import { FormControl, FormGroup } from "@mui/material";
import Quagga from "quagga";
import React, { useEffect, useState } from "react";
import styles from "../../css/barcode.module.css";
import { Camera, CameraAltOutlined } from "@mui/icons-material";

const Barcode = () => {
  const [src, setSrc] = useState("");

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        console.log(reader);
        setSrc(reader.result);
        resolve();
      };
    });
  };

  useEffect(() => {
    Quagga.init({
      inputStream: {
        name: "Image",
        type: "ImageStream",
        target: src,
      },
      decoder: {
        readers: {
          readers: ["ean_reader"],
        },
      },
      function(err) {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
      },
    });

    Quagga.onDetected(function (result) {
      const code = result.codeResult.code;
      console.log(code);
    });
  }, [src]);

  return (
    <div className={styles.body}>
      <div className={styles.box}>
        <div className={styles.box_left}>
          <div className={styles.input_box}>
            <CameraAltOutlined style={{ fontSize: "200px", color: "rgb(150, 150, 150)" }} />
            클릭하여 이미지를 첨부합니다.
          </div>
          <button className={styles.button}>바코드 분석</button>
        </div>
        <div className={styles.box_right}>
          <div className={styles.analysis_box}>
            <div className={styles.header}>분석 결과</div>
            <div className={styles.content}>
              <div className={styles.name}>영양소</div>
              <div className={styles.amount}>포함량</div>
              <div className={styles.recommend}>하루 권장량</div>
            </div>
            <div className={styles.content}>
              <div className={styles.name}>영양소</div>
              <div className={styles.amount}>포함량</div>
              <div className={styles.recommend}>하루 권장량</div>
            </div>
            <div className={styles.content}>
              <div className={styles.name}>영양소</div>
              <div className={styles.amount}>포함량</div>
              <div className={styles.recommend}>하루 권장량</div>
            </div>
            <div className={styles.content}>
              <div className={styles.name}>영양소</div>
              <div className={styles.amount}>포함량</div>
              <div className={styles.recommend}>하루 권장량</div>
            </div>
            <div className={styles.content}>
              <div className={styles.name}>영양소</div>
              <div className={styles.amount}>포함량</div>
              <div className={styles.recommend}>하루 권장량</div>
            </div>
            <div className={styles.content}>
              <div className={styles.name}>영양소</div>
              <div className={styles.amount}>포함량</div>
              <div className={styles.recommend}>하루 권장량</div>
            </div>
            <div className={styles.content}>
              <div className={styles.name}>영양소</div>
              <div className={styles.amount}>포함량</div>
              <div className={styles.recommend}>하루 권장량</div>
            </div>
            <div className={styles.content}>
              <div className={styles.name}>영양소</div>
              <div className={styles.amount}>포함량</div>
              <div className={styles.recommend}>하루 권장량</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Barcode;
