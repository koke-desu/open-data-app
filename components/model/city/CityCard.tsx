import React from "react";
import { CityType } from "../../../database/dataType";
import style from "./CityCard.module.css";

type Props = {
  city: CityType;
};

const CityCard: React.VFC<Props> = ({ city }) => {
  return (
    <div className={style.card}>
      <p className={style.prefecture}>{city.prefecture}</p>
      <p className={style.name}>{city.name}</p>
    </div>
  );
};
export default CityCard;
