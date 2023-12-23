import React from "react";
import { Spin } from "antd";

const Preloader = (props) => {
  const { isLoading } = props;

  return (
    isLoading && (
      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: 1000,
        }}
      >
        <Spin size="large" />
      </div>
    )
  );
};

export default Preloader;
