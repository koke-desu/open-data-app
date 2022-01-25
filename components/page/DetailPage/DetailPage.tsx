import { useRouter } from "next/router";
import React from "react";
import { useCities } from "../../../database/useCities";
import style from "./DetailPage.module.css";
import { useFavorite } from "../../../database/favorite";
import TopPageLink from "../../ui/TopPageLink/TopPageLink";
import P from "../../ui/P/P";
import FavoriteIcon from "../../ui/FavoriteIcon/FavoriteIcon";

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
      <div className={style.headRow}>
        <P fontSize={48} className={style.name}>
          {city.prefecture} ー {city.name}
        </P>
        <div className={style.favoriteContainer}>
          <FavoriteIcon
            isFavorite={isFavorite}
            onClick={() => {
              if (isFavorite) favorite.delete(cityId);
              else favorite.add(cityId);
            }}
          />
        </div>
      </div>

      <div>
        <table className={style.table}>
          <tbody>
            <tr>
              <th className={style.table_left}>見出し</th>
              <td className={style.table_right}>テキストが入ります</td>
            </tr>
            <tr>
              <th className={style.table_left}>見出し</th>
              <td className={style.table_right}>テキストが入ります</td>
            </tr>
            <tr>
              <th className={style.table_left}>見出し</th>
              <td className={style.table_right}>テキストが入ります</td>
            </tr>
            <tr>
              <th className={style.table_left}>見出し</th>
              <td className={style.table_right}>テキストが入ります</td>
            </tr>
            <tr>
              <th className={style.table_left}>見出し</th>
              <td className={style.table_right}>テキストが入ります</td>
            </tr>
          </tbody>
        </table>
      </div>

      <a href="#" className={style.btn_partial_line}>
        <i className={style.fa_caret_right}></i> ▶〇〇市のホームページはこちら
      </a>

      <TopPageLink />
    </div>
  );
};
export default DetailPage;
