import React, { useState } from "react";
import DATA from "./data.json";
import "./timeFromAtoB.css";

import { DateTime } from "luxon";

const backValues = DATA.BtoA.map((value) => DateTime.fromISO(value));

function TimeFromAtoB() {
  const [valueDirection, setValueDirection] = useState("");
  const [valueTime, setValueTime] = useState();
  const [valuteText, setvalueText] = useState();
  const [backValueTime, setBackValueTime] = useState("");

  const routeOptions = [
    { value: "Выберите маршрутt", text: "Выберите маршрут" },
    { value: "из A в B", text: "из A в B" },
    { value: "из B в A", text: "из B в A" },
    { value: "из A в B и обратно в A", text: "из A в B и обратно в A" },
  ];

  let timeValues = DATA[valueDirection] || DATA.AtoB;

  timeValues = timeValues.map((value) => {
    return DateTime.fromISO(value);
  });

  let priceTicket;

  let timeDestation;

  if (valueDirection === "из A в B" || valueDirection === "из B в A") {
    priceTicket = 700;
    timeDestation = 50;
  } else if (valueDirection === "из A в B и обратно в A") {
    priceTicket = 1200;
    timeDestation = 50 * 2;
  }
  let date = DateTime.now().toFormat("t");
  console.log(date);

  const options = routeOptions.map((routeOption) => {
    return (
      <option key={routeOption.value} value={routeOption.value}>
        {routeOption.text}
      </option>
    );
  });

  const onValueTimeChange = (e) => {
    setValueTime(e.target.value);
    console.log(e.target.value);
  };

  const valueChange = (e) => {
    setValueDirection(e.target.value);
    console.log(e.target.value);
  };

  const checkTimeB = (e) => {
    setBackValueTime(e.target.value);
  };

  const currentValueTime = timeValues[valueTime];

  const currentDestionation = (
    <div className="form-select-direction">
      <select
        placeholder="Выберите маршрут"
        id="direction"
        value={valueDirection}
        onChange={valueChange}
      >
        {options}
      </select>
      <span className="price">Стоимость: {priceTicket} </span>
    </div>
  );

  const mainSelector = (
    <div className="form-select-time">
      <label htmlFor="time">Выберите время</label>
      <select value={valueTime} onChange={onValueTimeChange}>
        {timeValues.map((dateTime, index) => {
          return (
            <option value={index}>
              {`${dateTime.toFormat("t")} (из А в B)`}
            </option>
          );
        })}
      </select>
    </div>
  );

  const addditionSelector = valueTime && (
    <div className="form-select-time">
      <label htmlFor="time">Выберите обратное время</label>
      <select value={backValueTime} onChange={checkTimeB}>
        {backValues.map((dateTime) => {
          const disabled = currentValueTime.plus({ minutes: 50 }) > dateTime;

          return (
            <option value={dateTime} disabled={disabled}>
              {`${dateTime.toFormat("t")} (из B в A)`}
            </option>
          );
        })}
      </select>
    </div>
  );

  const showMessage = () => {
    let elem = document.getElementById("num").value;
    document.getElementById(
      "ticket"
    ).innerHTML = ` Вы выбрали ${elem} билета по маршруту ${valueDirection}
    стоимостью ${
      elem * priceTicket
    }р. Это путешествие займет у вас ${timeDestation}  минут. Теплоход отправляется в ${currentValueTime.toFormat(
      "t"
    )}, а прибудет в ${currentValueTime.plus({ minutes: 50 }).toFormat("t")}.
    
 `;
  };

  return (
    <div className="timeFrom">
      <h2>"Время из A в B"</h2>
      <div className="form-select">
        {currentDestionation}
        {priceTicket > 0 ? mainSelector : ""}

        {valueDirection === "из A в B и обратно в A" && addditionSelector}
      </div>

      <div className="form-ticket">
        <label for="num">Количество билетов</label>
        <input id="num"></input>
        <button onClick={showMessage}>Посчитать</button>
        <p id="ticket"></p>
      </div>
    </div>
  );
}

export default TimeFromAtoB;
