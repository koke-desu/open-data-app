import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useCities } from "../../../database/useCities";
import style from "./DetailPage.module.css";
import { useFavorite } from "../../../database/favorite";
import TopPageLink from "../../ui/TopPageLink/TopPageLink";
import P from "../../ui/P/P";
import FavoriteIcon from "../../ui/FavoriteIcon/FavoriteIcon";
import CityStatusTable from "../../model/city/CityStatusTable/CityStatusTable";

type Props = {};

const DetailPage: React.VFC<Props> = ({}) => {
  const router = useRouter();
  const [cityId, setCityId] = useState("");
  useEffect(() => {
    !cityId && setCityId(router.query.cityId as string);
  }, [cityId, router.query.cityId]);

  console.log(cityId);

  const cities = useCities();
  const city = cities.find((val) => val.id === cityId);

  const favorite = useFavorite();
  const isFavorite = favorite.exist(cityId);

  if (!cities) return <div>Loading</div>;
  if (!city) return <div>invalid city id</div>;

  return (
    <div className={style.container}>
      <div className={style.head_row}>
        <P fontSize={48} className={style.name}>
          {city.Pre} ー {city.Mun}
        </P>
        <div className={style.favorite_container}>
          <FavoriteIcon
            isFavorite={isFavorite}
            onClick={() => {
              if (isFavorite) favorite.delete(cityId);
              else favorite.add(cityId);
            }}
          />
        </div>
      </div>
      <CityStatusTable city={city} />
      <a href={city.Url} className={style.city_link}>
        <P fontSize={22} className={style.city_link_text}>
          ▶〇〇市のホームページはこちら
        </P>
      </a>

      <TopPageLink />
    </div>
  );
};
export default DetailPage;
