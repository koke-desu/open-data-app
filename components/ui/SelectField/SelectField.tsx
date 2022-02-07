import { useState } from "@storybook/addons";
import React from "react";
import { cityStatusLabel, queryField } from "../../../database/dataType";
import style from "./SelectField.module.css";

type Props = {
  selected?: queryField;
  onChange: (field: queryField) => void;
};

const SelectField: React.VFC<Props> = ({ selected, onChange }) => {
  return (
    <select
      required
      className={style.select_field}
      value={selected || "default"}
      onChange={(event) => {
        if (event.currentTarget.value === "default") {
          onChange(undefined);
          return;
        }
        onChange(event.currentTarget.value as queryField);
      }}
    >
      <option value="default">選択してください</option>
      {Object.entries(cityStatusLabel).map(([field, label]) => (
        <option value={field} key={`query-modal-sort-${field}`}>
          {label}
        </option>
      ))}
    </select>
  );
};
export default SelectField;
