import React from "react";
import MUIFavoriteIcon from "@mui/icons-material/Favorite";
import MUIFavoriteBorder from "@mui/icons-material/FavoriteBorder";

type Props = {
  isFavorite: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const FavoriteIcon: React.VFC<Props> = ({ isFavorite, onClick }) => {
  return (
    <div onClick={onClick}>
      {isFavorite ? (
        <MUIFavoriteIcon style={{ color: "#f88" }} sx={{ fontSize: 48 }} />
      ) : (
        <MUIFavoriteBorder style={{ color: "#999" }} sx={{ fontSize: 48 }} />
      )}
    </div>
  );
};
export default FavoriteIcon;
