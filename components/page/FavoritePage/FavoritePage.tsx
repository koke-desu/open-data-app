import React from "react";
import { useFavorite } from "../../../database/favorite";
import CityCard from "../../model/city/CityCard/CityCard";
import style from "./FavoritePage.module.css";

type Props = {};

const FavoritePage: React.VFC<Props> = ({}) => {
  const favorite = useFavorite();

  console.log(favorite.get());

  return (
    <div>
      <p>お気に入り一覧</p>
      {favorite.get().map((city) => (
        <CityCard city={city} key={`favorite-${city.id}`} />
      ))}
    </div>
  );
};
export default FavoritePage;
