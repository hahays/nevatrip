import React from "react";
import ScreenHeading from "../ScreenHeading/ScreenHeading";
import TableTask from "./tableTask/TableTask";
import TimeFromAtoB from "./timeFromAtoB/TimeFromAtoB";

function ExerciseTwo() {
  return (
    <div className="exerciseTwo">
      <ScreenHeading
        title={"Второе задание"}
        subHeading={" Билеты на событие и Время из A в B"}
      />
      <TableTask />
      <TimeFromAtoB />
    </div>
  );
}

export default ExerciseTwo;
