import React, { createContext, useContext, useState } from "react";
import { CityType } from "./dataType";

// favorite（お気に入り）の処理をまとめたファイル。
// 全体で状態の同期をとるため、contextで共有する。
// _app.tsxに具体的なモデルについて書くの嫌だから、できたらSWRかRecoilとかで書き換えたい。

type FavoriteContext = {
  favorite: CityType[];
  setFavorite: React.Dispatch<React.SetStateAction<CityType[]>>;
};

// contextの本体。_app.tsxでwrapしている。
export const favoriteContext = createContext<FavoriteContext>({
  favorite: [],
  setFavorite: () => {},
});

// contextの初期化用の値を返す関数。_app.tsxで使う。
export const getInitialFavorite = () => {
  let item = localStorage.getItem("favorite");

  if (!item) {
    item = "[]";
    localStorage.setItem("favorite", "[]");
  }

  return JSON.parse(item) as CityType[];
};

// favoriteContextの使用をhooksに切り出し。
export const useFavorite = () => {
  const { favorite, setFavorite } = useContext(favoriteContext);
  return {
    get: () => favorite,
    set: (value: CityType[]) => {
      localStorage.setItem("favorite", JSON.stringify(value)), setFavorite(value);
    },
  };
};
