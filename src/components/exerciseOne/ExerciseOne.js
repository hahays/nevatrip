import React from "react";
import ScreenHeading from "../ScreenHeading/ScreenHeading";
import "./exercise.css";
import PartOne from "./partOne/PartOne";
import PartTwo from "./partTwo/PartTwo";

import IMG1 from "../../assets/img/cover_one.jpg";
import IMG2 from "../../assets/img/cover_two.jpg";
import IMG3 from "../../assets/img/cover_three.jpg";

function ExerciseOne() {
  return (
    <div>
      <ScreenHeading
        title={"Первое задание"}
        subHeading={"Вёрстка по макету и устранение горизонтального скролла."}
      />
      <PartOne
        img={IMG1}
        className="container-left-side-bookmark-blue"
        text="НОВИНКА"
        buttonOption="list-time-button-variantOne"
      />
      <PartOne
        img={IMG2}
        className="container-left-side-bookmark-yellow"
        text="КРУГЛЫЙ ГОД"
        buttonOption="list-time-button-variantTwo"
      />
      <PartOne img={IMG3} buttonOption="list-time-button-variantThree" />

      <PartTwo />
    </div>
  );
}

export default ExerciseOne;
