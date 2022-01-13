import React from "react";
import useSWR from "swr";
import { CityType } from "./dataType";
import { citiesMockData } from "./mockData";

// 市町村の一覧を獲得する関数。今はモックデータを返すだけ。
const fetcher = async () => {
  return citiesMockData;
};

// 市町村の一覧を獲得するhooks。
export const useCities = () => {
  return useSWR("cities", fetcher);
};
