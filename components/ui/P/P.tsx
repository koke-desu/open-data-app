import React, { useContext } from "react";
import { TextSizeContext, textSizeContext } from "./textSize";

// 拡大率
const expansionRate: { [key in TextSizeContext["textSize"]]: number } = {
  small: 0.7,
  base: 1.0,
  large: 1.5,
};

// pタグをラップするコンポーネント。
// fontSizeが必須。expansionRateと乗算した値をpタグのfontSizeとして設定する
type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & { fontSize: number };

const P: React.VFC<Props> = (props) => {
  const textSize = useContext(textSizeContext).textSize;

  // スプレッド構文が多用されてるけど、pタグにfontSizeっていうプロパティーをつけないために、fontSizeをundefinedで上書きしてるだけ
  return (
    <p
      {...{ ...props, fontSize: undefined }}
      style={{ fontSize: Math.floor(props.fontSize * expansionRate[textSize]) }}
    />
  );
};
export default P;
