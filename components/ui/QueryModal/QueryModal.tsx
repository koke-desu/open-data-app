import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { cityStatusLabel } from "../../../database/dataType";
import P from "../P/P";
import style from "./QueryModal.module.css";
import { ParamsType, usePageQuery } from "../../page/TopPage/pageQuery";
import { useRouter } from "next/router";
type Props = { isOpen: boolean };

const QueryModal: React.VFC<Props> = ({ isOpen }) => {
  const router = useRouter();

  const query = usePageQuery();
  const [sortDir, setSortDir] = useState<"asc" | "desc">(
    query.sort?.dir === "desc" ? "desc" : "asc"
  );

  return (
    <Modal open={isOpen}>
      <div className={style.modal_contents}>
        <label>
          <P fontSize={20} className={style.label}>
            並べ替え
          </P>
          <select required className={style.select_field}>
            <option value="" hidden>
              選択してください
            </option>
            {Object.entries(cityStatusLabel).map(([field, label]) => (
              <option value={field} key={`query-modal-sort-${field}`}>
                {label}
              </option>
            ))}
          </select>
          <div className={style.dir_button_container}>
            <button
              className={`${style.dir_button} ${sortDir === "asc" ? style.selected : ""}`}
              onClick={() => {
                setSortDir("asc");
              }}
            >
              <P fontSize={18}>昇順</P>
            </button>
            <button
              className={`${style.dir_button} ${sortDir === "desc" ? style.selected : ""}`}
              onClick={() => {
                setSortDir("desc");
              }}
            >
              <P fontSize={18}>降順</P>
            </button>
          </div>
        </label>
        <label>
          <P fontSize={20} className={style.label}>
            絞り込み
          </P>
        </label>

        <div className={style.submit_button_container}>
          <button className={style.cancel_button}>
            <P fontSize={18}>キャンセル</P>
          </button>
          <button className={style.submit_button}>
            <P fontSize={18}>決定</P>
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default QueryModal;
