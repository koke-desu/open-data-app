import React, { useEffect } from "react";
import { useCities } from "../../../database/useCities";
import CityCard from "../../model/city/CityCard/CityCard";
import { usePageQuery, useQueryCities } from "./pageQuery";
import style from "./TopPage.module.css";
type Props = {};

const TopPage: React.VFC<Props> = ({}) => {
  const { data, error } = useCities();

  const query = usePageQuery();
  console.log(query);

  const queriedData = useQueryCities(data ? data : [], query);

  if (error) return <p>error</p>;
  if (!data) return <p>loading</p>;

  return (
    <div className={style.container}>
      {queriedData.map((city) => (
        <CityCard key={`city-list-${city.id}`} city={city} />
      ))}
    </div>
  );
};
export default TopPage;
