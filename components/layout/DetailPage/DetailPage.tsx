import { useRouter } from "next/router";
import React from "react";
import { useCities } from "../../../database/useCities";
import style from "./DetailPage.module.css";

type Props = {};

const DetailPage: React.VFC<Props> = ({}) => {
  const router = useRouter();
  const { cityId } = router.query;

  const { data, error } = useCities();

  const city = data?.find((val) => val.id === cityId);

  if (error) return <div>error</div>;
  if (!data) return <div>Loading</div>;
  if (!city) return <div>invalid city id</div>;

  return (
    <div className={style.container}>
      <p className={style.name}>
        {city.prefecture} ー {city.name}
      </p>
    </div>
  );
};
export default DetailPage;
