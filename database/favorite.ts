import React from "react";
import { atom, useRecoilState } from "recoil";
import { CityType } from "./dataType";
import { useCities } from "./useCities";

// favorite（「いいね」した市町村）の処理をまとめたファイル。
// ContextからRecoilに書き換えた！！

// favoriteの初期化用の値を返す関数。
export const getInitialFavorite = () => {
  if (typeof window === "undefined") return [];

  let item = localStorage.getItem("favorite");

  if (!item) {
    item = "[]";
    localStorage.setItem("favorite", "[]");
  }

  return JSON.parse(item) as CityType[];
};

// atom。contextのRecoil版みたいなもの？
const favoriteState = atom({
  key: "favorite",
  default: getInitialFavorite(),
});

// favoriteStateの使用をhooksに切り出し。
export const useFavorite = () => {
  const [favorite, setFavorite] = useRecoilState(favoriteState);
  const cities = useCities();

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
    exist: (id: string) => {
      return favorite.some((city) => city.id === id);
    },
  };
};
