import React from "react";
import { useFavorite } from "../../../database/favorite";
import CityCard from "../../model/city/CityCard/CityCard";
import TopPageLink from "../../ui/TopPageLink/TopPageLink";
import style from "./FavoritePage.module.css";

type Props = {};

const FavoritePage: React.VFC<Props> = ({}) => {
  const favorite = useFavorite();

  console.log(favorite.get());

  return (
    <div className={style.container}>
      <h2 className={style.title}>いいねした町一覧</h2>
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
