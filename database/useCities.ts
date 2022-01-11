import React from "react";
import useSWR from "swr";
import { citiesMockData } from "./mockData";

// 市町村の一覧を獲得する関数。今はモックデータを返すだけ。
const fetcher = async () => {
  return citiesMockData;
};

// 市町村の一覧を獲得するhooks。
export const useCities = () => {
  const { data, error } = useSWR("cities", fetcher);

  return {
    cities: data,
    isLoading: !error && !data,
    isError: error,
  };
};
