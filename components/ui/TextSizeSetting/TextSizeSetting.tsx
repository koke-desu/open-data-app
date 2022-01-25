import React from "react";
import { useRecoilState } from "recoil";
import { TextSize, textSizeState } from "../P/textSize";
import style from "./TextSizeSetting.module.css";
type Props = {};

const sizeList: { value: TextSize; label: string }[] = [
  { value: "small", label: "小" },
  { value: "base", label: "中" },
  { value: "large", label: "大" },
];

const TextSizeSetting: React.VFC<Props> = ({}) => {
  const [textSize, setTextSize] = useRecoilState(textSizeState);

  return (
    <div className={style.container}>
      {sizeList.map((size) => (
        <button
          key={`header-text-size-${size.value}`}
          className={`${style.button} ${textSize === size.value ? style.selected : ""}`}
          onClick={() => setTextSize(size.value)}
        >
          {size.label}
        </button>
      ))}
    </div>
  );
};
export default TextSizeSetting;
