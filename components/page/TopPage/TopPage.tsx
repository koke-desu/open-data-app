import React, { useState } from "react";
import { useCities } from "../../../database/useCities";
import CityCard from "../../model/city/CityCard/CityCard";
import P from "../../ui/P/P";
import QueryModal from "../../ui/QueryModal/QueryModal";
import { usePageQuery, useQueryCities } from "./pageQuery";
import style from "./TopPage.module.css";
import CheckIcon from "@mui/icons-material/Check";
type Props = {};

const TopPage: React.VFC<Props> = ({}) => {
  const cities = useCities();

  const query = usePageQuery();

  const queriedData = useQueryCities(cities, query);

  const [isOpen, setIsOpen] = useState(false);

  if (!cities) return <P fontSize={32}>loading</P>;

  return (
    <div className={style.page_container}>
      <QueryModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
      <div className={style.explain}>
        <P fontSize={20}>
          北陸への居住をお考えをみなさん、より自分に合った住みやすい街を探してみませんか？
          <br />
          当サイトでは普通の住まい捜しサイトにはないような条件で絞り込み・並べ替えをすることができます！
          <br />
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Let's enjoy 北陸ライフ
        </P>
      </div>
      <h2 className={style.title}>
        <P fontSize={18}>まちをさがす</P>
      </h2>

      <button
        className={style.open_modal_button}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        {query.filter || query.sort ? (
          <CheckIcon style={{ color: "#fff" }} sx={{ fontSize: 32 }} />
        ) : (
          ""
        )}
        <P fontSize={18}>フィルター</P>
      </button>

      <div className={style.city_container}>
        {queriedData.map((city) => (
          <CityCard key={`city-list-${city.id}`} city={city} />
        ))}
      </div>
    </div>
  );
};
export default TopPage;
