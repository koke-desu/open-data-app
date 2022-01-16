import React from "react";
import { useFavorite } from "../../../database/favorite";
import CityCard from "../../model/city/CityCard/CityCard";
import style from "./FavoritePage.module.css";

type Props = {};

const FavoritePage: React.VFC<Props> = ({}) => {
  const favorite = useFavorite();

  console.log(favorite.get());

  return (
    <div className={style.container}>
      <h2 className={style.title}>お気に入り一覧</h2>
      {favorite.get().map((city) => (
        <CityCard city={city} key={`favorite-${city.id}`} />
      ))}
    </div>
  );
};
export default FavoritePage;
