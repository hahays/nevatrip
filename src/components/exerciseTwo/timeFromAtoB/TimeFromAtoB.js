import React, { useState } from "react";
import DATA from "./data.json";
import "./timeFromAtoB.css";

import { DateTime } from "luxon";

const backValues = DATA.BtoA.map((value) => DateTime.fromISO(value));

function TimeFromAtoB() {
  const [valueDirection, setValueDirection] = useState("");
  const [valueTime, setValueTime] = useState("0");
  const [ticketsCount, setTicketsCount] = useState("");
  const [backValueTime, setBackValueTime] = useState(backValues[2]);
  const [showMessage, setShowMessage] = useState(false);

  const routeOptions = [
    { value: "Выберите маршрут", text: "Выберите маршрут" },
    { value: "из A в B", text: "из A в B" },
    { value: "из B в A", text: "из B в A" },
    { value: "из A в B и обратно в A", text: "из A в B и обратно в A" },
  ];

  let timeValues = DATA[valueDirection === "из B в A" && "BtoA"] || DATA.AtoB;

  timeValues = timeValues.map((value) => {
    return DateTime.fromISO(value);
  });

  let priceTicket;

  let timeDestination;

  const currentValueTime = timeValues[valueTime];

  if (valueDirection === "из A в B" || valueDirection === "из B в A") {
    priceTicket = 700;
    timeDestination = 50;
  } else if (valueDirection === "из A в B и обратно в A") {
    priceTicket = 1200;
    timeDestination = (+backValueTime - timeValues[valueTime].ts) / 60000 + 50;
  }

  const options = routeOptions.map((routeOption) => {
    return (
      <option key={routeOption.value} value={routeOption.value}>
        {routeOption.text}
      </option>
    );
  });

  const onValueTimeChange = (e) => {
    setValueTime(e.target.value);
    setShowMessage(false);
  };

  const valueChange = (e) => {
    setValueDirection(e.target.value);
    setShowMessage(false);
  };

  const checkTimeB = (e) => {
    setBackValueTime(e.target.value);
  };

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
            <option key={index} value={index}>
              {`${dateTime.toFormat("t")} ${
                valueDirection === "из A в B и обратно в A"
                  ? "из А в B"
                  : valueDirection
              }`}
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
        {backValues.map((dateTime, index) => {
          const disabled = currentValueTime.plus({ minutes: 50 }) > dateTime;
          return (
            <option key={index} value={dateTime} disabled={disabled}>
              {`${dateTime.toFormat("t")} (из B в A)`}
            </option>
          );
        })}
      </select>
    </div>
  );

  const message =
    currentValueTime &&
    ` Вы выбрали ${ticketsCount} билета по маршруту ${valueDirection}
    стоимостью ${
      ticketsCount * priceTicket
    }р. Это путешествие займет у вас ${timeDestination}  минут. Теплоход отправляется в ${currentValueTime.toFormat(
      "t"
    )}, а прибудет в ${currentValueTime.plus({ minutes: 50 }).toFormat("t")}.

  `;

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
        <input
          id="num"
          value={ticketsCount}
          onChange={(e) => setTicketsCount(e.target.value)}
        ></input>
        <button
          disabled={!valueTime || !valueDirection || !ticketsCount}
          onClick={() => setShowMessage(true)}
        >
          Посчитать
        </button>
        {showMessage && <p>{message}</p>}
      </div>
    </div>
  );
}

export default TimeFromAtoB;
