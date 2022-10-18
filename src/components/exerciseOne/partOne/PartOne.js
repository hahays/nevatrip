import React, { useState } from "react";
import "./partOne.css";

import CLOCK from "../../../assets/img/clock.png";
import VECTOR from "../../../assets/img/vector.png";
import VECTOR_R from "../../../assets/img/vector-r.png";
import Button from "../../button/Button";
import BookMark from "../../bookMark/BookMark";
import ItemHeading from "../../itemHeading/ItemHeading";
import VariantButton from "../../variantButton/VariantButton";

function PartOne({ img, text, className, buttonOption }) {
  const [toggle, setToggle] = useState(true);
  function addTimeElem() {
    setToggle(!toggle);
  }

  return (
    <div className="main-container">
      <div className="main-container-box">
        <div className="container-left-side">
          <img className="container-cover" src={img} alt="cover" />
          <BookMark className={className} text={text} />
        </div>
        <div className="container-right-side">
          <ItemHeading text="Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020" />
          <div className="container-right-side-subHeader">
            <img className="time-logo" src={CLOCK} alt="clock-logo" />
            <div className="time-text">2 часа</div>
          </div>
          <div className="container-right-side-list">
            <ul>
              <li>
                <img className="list-vector" src={VECTOR} alt="list-vector" />
                <p> Билет на целый день</p>
              </li>
              <li>
                <img className="list-vector" src={VECTOR} alt="list-vector" />
                <p> Неограниченное число катаний</p>
              </li>
              <li>
                <img className="list-vector" src={VECTOR} alt="list-vector" />
                <p>6 остановок у главных достопримечательностей</p>
              </li>
              <li className="last-item">
                <img className="list-vector" src={VECTOR} alt="list-vector" />
                <p>Ближайший рейс сегодня </p>
              </li>
              <VariantButton className={buttonOption} onClick={addTimeElem} />
              {toggle ? null : (
                <div className="list-hidden-time" style={{ display: "inline" }}>
                  <Button className="list-time" text="12:00" />
                  <Button className="list-time" text="12:00" />
                  <Button className="list-time" text="12:00" />
                  <Button className="list-time" text="12:00" />
                </div>
              )}
            </ul>
          </div>
          <div className="container-right-side-footer">
            <div className="container-right-side-footer-price">
              <p className="main-price">
                <span>900</span>
                <img
                  className="footer-vector"
                  src={VECTOR_R}
                  alt="money-logo"
                />
              </p>
              <p className="sub-price">
                <span>
                  1200
                  <img
                    className="footer-vector"
                    src={VECTOR_R}
                    alt="money-logo"
                  />
                  на причале
                </span>
              </p>
            </div>
            <div className="container-footer-button">
              <button className="container-right-side-footer-button">
                Подробнее
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartOne;
