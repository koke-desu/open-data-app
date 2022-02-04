import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useCities } from "../../../database/useCities";
import style from "./DetailPage.module.css";
import { useFavorite } from "../../../database/favorite";
import TopPageLink from "../../ui/TopPageLink/TopPageLink";
import P from "../../ui/P/P";
import FavoriteIcon from "../../ui/FavoriteIcon/FavoriteIcon";
import CityStatusTable from "../../model/city/CityStatusTable/CityStatusTable";
import { CityType } from "../../../database/dataType";

type Props = {};

const DetailPage: React.VFC<Props> = ({}) => {
  const router = useRouter();
  const cityId = router.query.cityId as string;

  const cities = useCities();
  const [city, setCity] = useState<CityType>();

  const favorite = useFavorite();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  // アンマウント時のアニメーションが行われる際に、アニメーションが完了するよりも先に、routeが変更されて、
  // cityIdがundefinedになってしまうので、city, isFavoriteがcityIdの変更に依存しないようにする。
  useEffect(() => {
    setCity(cities?.find((val) => val.id === cityId));
    setIsFavorite(favorite.exist(cityId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cities]);

  if (!cities) return <div>Loading</div>;
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
