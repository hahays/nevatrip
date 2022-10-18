import React from "react";
import "./bookMark.css";

function BookMark({ className, text }) {
  return (
    <div className={className}>
      <p>{text}</p>
    </div>
  );
}

export default BookMark;
