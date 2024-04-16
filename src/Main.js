import React, { Component } from "react";
import "./react.css";

const Main = ({ title, children }) => {
  return (
    <div>
      <h1>안녕하세요, 나는{title}입니다.</h1>
      <h2>children 값은 {children}입니다.</h2>
    </div>
  );
};

Main.defaultProps = {
  title: "기본 이름",
};

export default Main;
