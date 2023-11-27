import React from "react";
import { Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div style={{height: "85vh"}} className="d-flex justify-content-center align-items-center">
      <Circles
        height="80"
        width="80"
        color="#0776ad"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
