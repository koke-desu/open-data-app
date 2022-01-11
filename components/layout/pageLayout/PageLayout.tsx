import React from "react";
import style from "./PageLayout.module.css";

type Props = {
  children: React.ReactNode;
};

//
const PageLayout: React.VFC<Props> = ({ children }) => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <p>ヘッダー</p>
      </header>
      {children}
    </div>
  );
};

export default PageLayout;
