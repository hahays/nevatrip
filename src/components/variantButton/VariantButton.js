import React from "react";
import Button from "../button/Button";

function VariantButton({ className, onClick }) {
  return (
    <div className={className}>
      <Button className="list-time" text="12:00" />
      <Button className="list-time" text="12:00" />
      <Button className="list-time" text="12:00" />
      <Button className="list-time" text="12:00" />
      <Button className="more-button" text="еще..." onClick={onClick} />
    </div>
  );
}

export default VariantButton;
