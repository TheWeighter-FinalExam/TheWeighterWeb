import React, { useEffect, useState } from "react";
import styles from "../../css/barcode.module.css";
import { CameraAltOutlined } from "@mui/icons-material";
import { barcodeRequest, infoRequest } from "../../request";
import Quagga from "quagga";

const Barcode = () => {
  const [src, setSrc] = useState("");
  const [barcode, setBarcode] = useState("");
  const [name, setName] = useState("");
  const [data, setData] = useState({});
  const [showData, setShowData] = useState({});

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setSrc(reader.result);
        resolve();
      };
    });
  };

  const decode = (e) => {
    const src = URL.createObjectURL(e.target.files[0]);
    Quagga.decodeSingle(
      {
        decoder: { readers: ["ean_reader"] },
        size: 640,
        locator: { patchSize: "small", halfSample: false },

        src,
      },
      function (result) {
        if (result.codeResult) {
          setBarcode(result.codeResult.code);
        } else {
          console.log("not detected");
        }
      }
    );
    encodeFileToBase64(e.target.files[0]);
  };

  const onClickBarcodeButton = () => {
    barcodeRequest
      .get("BAR_CD=" + barcode)
      .then((res) => {
        console.log(res);
        setName(res.data.C005.row[0].PRDLST_NM);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    infoRequest
      .get("getFoodNtrItdntList1?serviceKey=" + process.env.REACT_APP_PRODUCT_KEY + "&desc_kor=" + name + "&type=json")
      .then((res) => setData(res.data.body.items[0]))
      .catch((err) => console.error(err));
  }, [name]);

  useEffect(() => {
    onChangeData(data, setShowData);
  }, [data]);

  const onChangeData = (data, setShowData) => {
    if (data["DESC_KOR"] === "고량미,알곡") {
      setData([]);
    } else {
      const newObj = {};
      console.log(data);
      newObj["제품명"] = data["DESC_KOR"];
      newObj["제조업체"] = data["ANIMAL_PLANT"];
      newObj["1회제공량 (g)"] = data["SERVING_WT"];
      newObj["열량 (kcal)"] = data["NUTR_CONT1"];
      newObj["탄수화물 (g)"] = data["NUTR_CONT2"];
      newObj["단백질 (g)"] = data["NUTR_CONT3"];
      newObj["지방 (g)"] = data["NUTR_CONT4"];
      newObj["당류 (g)"] = data["NUTR_CONT5"];
      newObj["나트륨 (mg)"] = data["NUTR_CONT6"];
      newObj["콜레스테롤 (g)"] = data["NUTR_CONT7"];
      newObj["포화지방산 (g)"] = data["NUTR_CONT8"];
      newObj["트랜스지방산 (g)"] = data["NUTR_CONT9"];
      setShowData(newObj);
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.box}>
        <div className={styles.box_left}>
          {src ? (
            <img src={src} style={{ width: "100%", borderRadius: "20px" }} />
          ) : (
            <label className={styles.input_box}>
              <CameraAltOutlined style={{ fontSize: "200px", color: "rgb(150, 150, 150)" }} />
              클릭하여 이미지를 첨부합니다.
              <input type="file" style={{ display: "none" }} accept="image/*" onChange={(e) => decode(e)}></input>
            </label>
          )}
          <label>{barcode}</label>
          <button className={styles.button} onClick={onClickBarcodeButton}>
            바코드 분석
          </button>
        </div>
        <div className={styles.box_right}>
          <div className={styles.analysis_box}>
            <div className={styles.header}>분석 결과</div>
            {showData &&
              Object.keys(showData).map((value) => (
                <div className={styles.content}>
                  <div className={styles.name}>{value}</div>
                  <div className={styles.amount}>{showData[value] === "N/A" ? 0.0 : showData[value]}</div>
                  <div className={styles.recommend}>{value}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Barcode;
