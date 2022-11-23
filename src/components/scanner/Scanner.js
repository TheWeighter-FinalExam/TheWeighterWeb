import React, { useEffect } from "react";
import Quagga from "quagga";

const Scanner = ({ setBarcode }) => {
  const decode = (src) => {
    console.log("여기는 실행 되나?");
    Quagga.decodeSingle(
      {
        decoder: { readers: ["ean_reader"] },
        size: 640,
        locator: { patchSize: "medium", halfSample: false },

        src,
      },
      function (result) {
        console.log(result);
        if (result.codeResult) {
          setBarcode(result.codeResult.code);
        } else {
          console.log("not detected");
        }
      }
    );
  };

  return (
    <>
      <input type="file" onChange={(e) => decode(URL.createObjectURL(e.target.files[0]))}></input>
    </>
  );
};

export default Scanner;
