import React, { useContext } from "react";
import { TextSizeContext, textSizeContext } from "../P/textSize";
import style from "./TextSizeSetting.module.css";
type Props = {};

const sizeList: { value: TextSizeContext["textSize"]; label: string }[] = [
  { value: "small", label: "小" },
  { value: "base", label: "中" },
  { value: "large", label: "大" },
];

const TextSizeSetting: React.VFC<Props> = ({}) => {
  const { textSize, setTextSize } = useContext(textSizeContext);

  return (
    <div className={style.container}>
      {sizeList.map((size) => (
        <p
          key={`header-text-size-${size.value}`}
          className={`${style.button} ${textSize === size.value ? style.selected : ""}`}
          onClick={() => setTextSize(size.value)}
        >
          {size.label}
        </p>
      ))}
    </div>
  );
};
export default TextSizeSetting;
