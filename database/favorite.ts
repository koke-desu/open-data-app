import React, { createContext, useContext } from "react";
import { CityType } from "./dataType";
import { useCities } from "./useCities";

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
  if (typeof window === "undefined") return [];

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
  const cities = useCities().data;

  return {
    get: () => favorite,
    add: (id: string) => {
      let newValue = [...favorite];
      if (!favorite.some((city) => city.id === id) && cities) {
        const city = cities.find((city) => city.id === id);
        city && newValue.push(city);
      }
      localStorage.setItem("favorite", JSON.stringify(newValue));
      setFavorite(newValue);
    },
    delete: (id: string) => {
      const newValue = favorite.filter((city) => city.id !== id);
      localStorage.setItem("favorite", JSON.stringify(newValue));
      setFavorite(newValue);
    },
  };
};
