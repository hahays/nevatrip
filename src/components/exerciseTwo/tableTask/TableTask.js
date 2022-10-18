import React from "react";
import "./tableTask.css";

import TABLE_1 from "../tableTask/assets/table1.png";
import TABLE_2 from "../tableTask/assets/table2.png";
import TABLE_3 from "../tableTask/assets/table3.png";
import TABLE_4 from "../tableTask/assets/table4.png";

function open_photo(photo) {
  document.getElementById("big-photo").innerHTML =
    "<img onclick='close_photo()' style='position: absolute;' src='" +
    photo +
    "'>";
}

function close_photo() {
  document.getElementById("big-photo").innerHTML = "";
}

function TableTask() {
  return (
    <div className="tableTask-main-container">
      <div className="tableTask-table">
        <img onclick="" src={TABLE_1} />
      </div>
      <h4 className="pictures">Рисунок 1</h4>
      <div className="tableTask-description">
        <p>
          Итак, задание, на первый взгляд показалось очень простым. Достаточно
          добавить 4 столбца(рис. 1) и заокнчить на этом, но это слишком
          громоздко, даже видно на моем примере. P.S. Прощу прощения за
          размер(добавил скролл).
        </p>
        <p>
          Но это ведь совсем не выход, добавлять каждый столбец при новом
          событии. Поэтому, очевидно что здесь необходимо поработать с базой
          данных. Тем более, в таблице уже есть столбец event_id, где хранится
          подробная информация о каждом эвенте.
        </p>
        <div className="tableTask-tabler">
          <img onclick="" src={TABLE_2} />
        </div>
        <h4 className="pictures">Таблица 1. Типы билетов</h4>
        <p>
          К сожалению, у меня нет опыта работы с бд, но принцип связей many to
          many мне знаком. Попробую объяснить своё решение. Чтобы добавить 2
          дополнительные группы билетов, необходимо создать таблицу "Типы
          билетов"(таб. 1). Ответ на первый вопрос: Создание новой отдельной
          таблицы с типами билетов.
        </p>
        <div className="tableTask-tabler">
          <img onclick="" src={TABLE_3} />
          <h4 className="pictures">Таблица 2. События к типу билетов</h4>
        </div>
        <p>
          Таблица с эвентами уже есть в примере, далее создадим таблицу "События
          к типу билетов" (таб. 2). Берем айдишки из существующих и заполняем
          стоимость.
        </p>
        <div className="tableTask-tabler">
          <img onclick="" src={TABLE_4} />
          <h4 className="pictures">Таблица 3. Билеты</h4>
        </div>
        <p>
          Береходим к ответу на второй вопрос.Как показать таблицу, где у
          каждого билета свой баркод? Для этого создаем отдельно таблицу
          "Билеты". У каждого билета будет свой баркод. (таб.3).
        </p>
      </div>
    </div>
  );
}

export default TableTask;
