import Link from "next/link";
import React from "react";
import style from "./TopPageLink.module.css";
type Props = {};

const TopPageLink: React.VFC<Props> = ({}) => {
  return (
    <Link href="/">
      <a className={style.link}>トップページにもどる</a>
    </Link>
  );
};
export default TopPageLink;
