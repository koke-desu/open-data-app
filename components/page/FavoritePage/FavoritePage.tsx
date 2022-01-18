import React from "react";
import { useFavorite } from "../../../database/favorite";
import CityCard from "../../model/city/CityCard/CityCard";
import P from "../../ui/P/P";
import TopPageLink from "../../ui/TopPageLink/TopPageLink";
import style from "./FavoritePage.module.css";

type Props = {};

const FavoritePage: React.VFC<Props> = ({}) => {
  const favorite = useFavorite();

  return (
    <div className={style.container}>
      <P fontSize={24} className={style.title}>
        いいねした町一覧
      </P>
      {favorite.get().map((city) => (
        <CityCard city={city} key={`favorite-${city.id}`} />
      ))}
      <div className={style.linkContainer}>
        <TopPageLink />
      </div>
    </div>
  );
};
export default FavoritePage;
