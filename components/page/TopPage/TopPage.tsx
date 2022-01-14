import React from "react";
import { useCities } from "../../../database/useCities";
import CityCard from "../../model/city/CityCard/CityCard";
import style from "./TopPage.module.css";
type Props = {};

const TopPage: React.VFC<Props> = ({}) => {
  const { data, error } = useCities();

  if (error) return <p>error</p>;
  if (!data) return <p>loading</p>;

  return (
    <div className={style.container}>
      {data.map((city) => (
        <CityCard key={`city-list-${city.id}`} city={city} />
      ))}
    </div>
  );
};
export default TopPage;
