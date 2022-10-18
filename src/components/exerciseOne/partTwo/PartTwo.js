import React from "react";
import "./partTwo.css";

function PartTwo() {
  return (
    <div className="partTwo">
      <p className="partTwo-text">
        <h3>Прощаемся с горизонтальным скроллом.</h3>
        <ol>
          <li>
            Убрал паддинг в классе <span className="greenP">blog</span>, он
            добавлял лишние отступы.
          </li>
          <li>
            В элементе <span className="redP">table</span> установил ширину в
            100%.
          </li>
          <li>
            В класс <span className="greenP">blog</span> добавил свойство
            <span className="yellowP"> overflow-wrap: anywhere</span>.
          </li>
        </ol>
      </p>
    </div>
  );
}

export default PartTwo;
