import Link from "next/link";
import React from "react";
import { CityType } from "../../../../database/dataType";
import { useFavorite } from "../../../../database/favorite";
import FavoriteIcon from "../../../ui/FavoriteIcon/FavoriteIcon";
import P from "../../../ui/P/P";
import style from "./CityCard.module.css";

type Props = {
  city: CityType;
};

const CityCard: React.VFC<Props> = ({ city }) => {
  const favorite = useFavorite();

  return (
    <Link href="/detail/[cityId]" as={`/detail/${city.id}`}>
      <a className={style.card}>
        <P fontSize={16} className={style.prefecture}>
          {city.Pre}
        </P>
        <P fontSize={32} className={style.name}>
          {city.Mun}
        </P>
        <div className={style.favoriteContainer}>
          <FavoriteIcon
            isFavorite={favorite.exist(city.id)}
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              if (favorite.exist(city.id)) favorite.delete(city.id);
              else favorite.add(city.id);
            }}
          />
        </div>
      </a>
    </Link>
  );
};
export default CityCard;
