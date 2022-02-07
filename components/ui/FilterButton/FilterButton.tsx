import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import FilterListIcon from "@mui/icons-material/FilterList";
import style from "./FilterButton.module.css";
import P from "../P/P";
import { usePageQuery } from "../../page/TopPage/pageQuery";
import { cityStatusLabel } from "../../../database/dataType";

type Props = { onClick: () => void; isQueried: boolean };

const FilterButton: React.VFC<Props> = ({ onClick, isQueried }) => {
  const query = usePageQuery();

  const sortText =
    query.sort &&
    query.sort.sort &&
    `・「${cityStatusLabel[query.sort.sort]}」を${
      query.sort.dir === "asc" ? "昇順" : "降順"
    }でソート中。`;

  const filterText =
    query.filter &&
    query.filter.field &&
    `・「${cityStatusLabel[query.filter.field]}」が${query.filter.value} ${
      query.filter.opr === "greater" ? "以上" : "以下"
    }のまちに絞り込み中`;

  return (
    <div className={style.container}>
      <div className={style.query_text_container}>
        <P fontSize={20} className={style.query_text}>
          {sortText}
        </P>
        <P fontSize={20} className={style.query_text}>
          {filterText}
        </P>
      </div>
      <button className={style.open_modal_button} onClick={onClick}>
        {isQueried ? (
          <CheckIcon style={{ color: "#fff" }} sx={{ fontSize: 42 }} />
        ) : (
          <FilterListIcon style={{ color: "#fff" }} sx={{ fontSize: 42 }} />
        )}
        <P fontSize={22}>フィルター</P>
      </button>
    </div>
  );
};
export default FilterButton;
