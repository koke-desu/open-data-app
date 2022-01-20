import React from "react";
import MUIFavoriteIcon from "@mui/icons-material/Favorite";
import MUIFavoriteBorder from "@mui/icons-material/FavoriteBorder";

type Props = {
  isFavorite: boolean;
};

const FavoriteIcon: React.VFC<Props> = ({ isFavorite }) => {
  return (
    <>
      {isFavorite ? (
        <MUIFavoriteIcon style={{ color: "#f88" }} sx={{ fontSize: 48 }} />
      ) : (
        <MUIFavoriteBorder style={{ color: "#999" }} sx={{ fontSize: 48 }} />
      )}
    </>
  );
};
export default FavoriteIcon;
