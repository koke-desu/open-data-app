import Link from "next/link";
import React from "react";
import { CityType } from "../../../../database/dataType";
import style from "./CityCard.module.css";

type Props = {
  city: CityType;
};

const CityCard: React.VFC<Props> = ({ city }) => {
  return (
    <Link href="/detail/[cityId]" as={`/detail/${city.id}`}>
      <a className={style.card}>
        <p className={style.prefecture}>{city.prefecture}</p>
        <p className={style.name}>{city.name}</p>
      </a>
    </Link>
  );
};
export default CityCard;
