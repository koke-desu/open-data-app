import { useRouter } from "next/router";
import React from "react";
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
  const cityId = router.query.cityId as string;

  const { data, error } = useCities();
  const city = data?.find((val) => val.id === cityId);

  const favorite = useFavorite();
  const isFavorite = favorite.exist(cityId);

  if (error) return <div>error</div>;
  if (!data) return <div>Loading</div>;
  if (!city) return <div>invalid city id</div>;

  return (
    <div className={style.container}>
      <div className={style.head_row}>
        <P fontSize={48} className={style.name}>
          {city.prefecture} ー {city.name}
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
      <a href="#" className={style.city_link}>
        <P fontSize={22} className={style.city_link_text}>
          ▶〇〇市のホームページはこちら
        </P>
      </a>

      <TopPageLink />
    </div>
  );
};
export default DetailPage;
