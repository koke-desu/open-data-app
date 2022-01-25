import Link from "next/link";
import React from "react";
import P from "../P/P";
import style from "./TopPageLink.module.css";
type Props = {};

const TopPageLink: React.VFC<Props> = ({}) => {
  return (
    <Link href="/">
      <a className={style.link}>
        <P fontSize={22} className={style.link_text}>
          ▶トップページにもどる
        </P>
      </a>
    </Link>
  );
};
export default TopPageLink;
