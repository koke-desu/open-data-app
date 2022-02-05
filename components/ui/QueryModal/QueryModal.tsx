import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import P from "../P/P";
import style from "./QueryModal.module.css";
import { usePageQuery } from "../../page/TopPage/pageQuery";
import { useRouter } from "next/router";
import SelectField from "../SelectField/SelectField";
import DirectionButton from "../DirectionButton/DirectionButton";
type Props = { isOpen: boolean; onClose: () => void };

const QueryModal: React.VFC<Props> = ({ isOpen, onClose }) => {
  const router = useRouter();

  const [query, setQuery] = useState(usePageQuery());

  // ネストされたObjectでのstate更新がだるすぎたから、それぞれのフィールドごとにstateを作成。
  // RHFとか入れてもいいけど、フォーム1つだけだしなんだかなぁ...
  const [sort, setSort] = useState(query.sort?.sort);
  const [dir, setDir] = useState(query.sort?.dir);
  const [field, setField] = useState(query.filter?.field);
  const [value, setValue] = useState(query.filter?.value);
  const [opr, setOpr] = useState(query.filter?.opr);

  //
  const onSubmit = () => {
    router.push({ pathname: "/", query: { sort, dir, field, value, opr } });
  };

  const onCancel = () => {
    setSort(query.sort?.sort);
    setDir(query.sort?.dir);
    setField(query.filter?.field);
    setValue(query.filter?.value || 0);
    setOpr(query.filter?.opr);
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className={style.modal_contents}>
        <label>
          <P fontSize={20} className={style.label}>
            並べ替え
          </P>
          <SelectField
            selected={sort}
            onChange={(value) => {
              setSort(value);
            }}
          />
          <div className={style.dir_button_container}>
            <DirectionButton
              selected={dir === "asc"}
              label="昇順"
              onClick={() => {
                setDir("asc");
              }}
            />
            <DirectionButton
              selected={dir === "desc"}
              label="降順"
              onClick={() => {
                setDir("desc");
              }}
            />
          </div>
        </label>

        <label>
          <P fontSize={20} className={style.label}>
            絞り込み
          </P>
          <SelectField
            selected={field}
            onChange={(value) => {
              setField(value);
            }}
          />
          <input
            type="number"
            value={value}
            onChange={(event) => {
              setValue(event.currentTarget.value);
            }}
          />
          <div className={style.dir_button_container}>
            <DirectionButton
              selected={opr === "greater"}
              label="以上"
              onClick={() => {
                setOpr("greater");
              }}
            />
            <DirectionButton
              selected={opr === "less"}
              label="以下"
              onClick={() => {
                setOpr("less");
              }}
            />
          </div>
        </label>

        <div className={style.submit_button_container}>
          <button className={style.cancel_button} onClick={onCancel}>
            <P fontSize={18}>キャンセル</P>
          </button>
          <button className={style.submit_button} onClick={onSubmit}>
            <P fontSize={18}>決定</P>
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default QueryModal;
