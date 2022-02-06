import React from "react";
import P from "../P/P";
import style from "./DirectionButton.module.css";

type Props = { selected: boolean; onClick: () => void; label: string };

const DirectionButton: React.VFC<Props> = ({ selected, onClick, label }) => {
  return (
    <button className={`${style.dir_button} ${selected ? style.selected : ""}`} onClick={onClick}>
      <P fontSize={18}>{label}</P>
    </button>
  );
};
export default DirectionButton;
