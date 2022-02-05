import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import P from "../P/P";
import style from "./QueryModal.module.css";
import { ParamsType, usePageQuery } from "../../page/TopPage/pageQuery";
import { useRouter } from "next/router";
import SelectField from "../SelectField/SelectField";
type Props = { isOpen: boolean; onClose: () => void };

const QueryModal: React.VFC<Props> = ({ isOpen, onClose }) => {
  const router = useRouter();

  const [query, setQuery] = useState(usePageQuery());

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className={style.modal_contents}>
        <label>
          <P fontSize={20} className={style.label}>
            並べ替え
          </P>
          <SelectField selected={query.sort?.sort} onChange={(value) => {}} />
          <div className={style.dir_button_container}>
            <button
              className={`${style.dir_button} ${query.sort?.dir === "asc" ? style.selected : ""}`}
              onClick={() => {
                setQuery({ ...query, sort: { sort: query.sort?.sort, dir: "asc" } });
              }}
            >
              <P fontSize={18}>昇順</P>
            </button>
            <button
              className={`${style.dir_button} ${query.sort?.dir === "desc" ? style.selected : ""}`}
              onClick={() => {
                setQuery({ ...query, sort: { sort: query.sort?.sort, dir: "desc" } });
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
