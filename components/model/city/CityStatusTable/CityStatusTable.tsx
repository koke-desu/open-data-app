import React from "react";
import { CityType } from "../../../../database/dataType";
import style from "./CityStatusTable.module.css";

type Props = { city: CityType };

const CityStatusTable: React.VFC<Props> = ({ city }) => {
  return (
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
  );
};
export default CityStatusTable;
