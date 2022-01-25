import React from "react";
import { CityType } from "../../../../database/dataType";
import { useCityStatus } from "./cityStatus";
import style from "./CityStatusTable.module.css";

type Props = { city: CityType };

const CityStatusTable: React.VFC<Props> = ({ city }) => {
  const cityStatus = useCityStatus(city);

  return (
    <div>
      <table className={style.table}>
        <tbody>
          {Object.entries(cityStatus).map(([label, value]) => (
            <tr key={`detail-${city.id}-table-${label}`}>
              <th className={style.table_left}>{label}</th>
              <td className={style.table_right}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CityStatusTable;
