import Link from "next/link";
import React from "react";
import { CityType } from "../../../../database/dataType";
import P from "../../../ui/P/P";
import style from "./CityCard.module.css";

type Props = {
  city: CityType;
};

const CityCard: React.VFC<Props> = ({ city }) => {
  return (
    <Link href="/detail/[cityId]" as={`/detail/${city.id}`}>
      <a className={style.card}>
        <P fontSize={16} className={style.prefecture}>
          {city.prefecture}
        </P>
        <P fontSize={32} className={style.name}>
          {city.name}
        </P>
      </a>
    </Link>
  );
};
export default CityCard;
