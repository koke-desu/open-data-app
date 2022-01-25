import Link from "next/link";
import React from "react";
import P from "../P/P";
import style from "./TopPageLink.module.css";
type Props = {};

const TopPageLink: React.VFC<Props> = ({}) => {
  return (
    <Link href="/">
      <a className={style.link}>
        <i className={style.link_right}></i> <P fontSize={18}>▶トップページにもどる</P>
      </a>
    </Link>
  );
};
export default TopPageLink;
