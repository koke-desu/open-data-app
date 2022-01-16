import { useRouter } from "next/router";
import React from "react";
import { useCities } from "../../../database/useCities";
import style from "./DetailPage.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { useFavorite } from "../../../database/favorite";

type Props = {};

const DetailPage: React.VFC<Props> = ({}) => {
  const router = useRouter();
  const cityId = router.query.cityId as string;

  const { data, error } = useCities();
  const city = data?.find((val) => val.id === cityId);

  const favorite = useFavorite();
  const isFavorite = favorite.get().some((id) => id.id === cityId);

  if (error) return <div>error</div>;
  if (!data) return <div>Loading</div>;
  if (!city) return <div>invalid city id</div>;

  return (
    <div className={style.container}>
      <p className={style.name}>
        {city.prefecture} ー {city.name}
      </p>
      <div
        onClick={() => {
          if (isFavorite) favorite.delete(cityId);
          else favorite.add(cityId);
        }}
        className={style.favoriteContainer}
      >
        {isFavorite ? (
          <FavoriteIcon style={{ color: "#f88" }} sx={{ fontSize: 48 }} />
        ) : (
          <FavoriteBorder style={{ color: "#999" }} sx={{ fontSize: 48 }} />
        )}
      </div>
    </div>
  );
};
export default DetailPage;
