import Link from "next/link";
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
        <Link href="/">
          <a className={style.header_text}>北陸まち探しサイト</a>
        </Link>
        <Link href="/favorite">
          <a className={style.good_button_style}>
            いいね一覧
            <br />♡
          </a>
        </Link>
        <TextSizeSetting />
      </header>

      {children}
    </div>
  );
};

export default PageLayout;
