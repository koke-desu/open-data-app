import React from "react";
import P from "../../ui/P/P";
import TextSizeSetting from "../../ui/TextSizeSetting/TextSizeSetting";
import style from "./PageLayout.module.css";

type Props = {
  children: React.ReactNode;
};

//
const PageLayout: React.VFC<Props> = ({ children }) => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <P fontSize={16}>ヘッダー</P>
        <TextSizeSetting />
      </header>
      {children}
    </div>
  );
};

export default PageLayout;
