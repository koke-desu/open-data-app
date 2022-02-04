import { useEffect } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { CityType, importedCitiesType } from "./dataType";
import { citiesMockData } from "./mockData";

// モックデータやAPIから読み込まれたCityの型をCityTypeに整形する。
export const formatImportedCities = (cities: importedCitiesType): CityType[] => {
  return cities.map((city) => ({
    ...city,
    Pop: Number.parseInt(city.Pop),
    Temp_Jan: Number.parseInt(city.Temp_Jan),
    Temp_July: Number.parseInt(city.Temp_July),
    Snow_Jan: Number.parseFloat(city.Snow_Jan.split("cm")[0]),
    Bicthe_num: Number.parseInt(city.Bicthe_num),
    Bicthe_rate: Number.parseFloat(city.Bicthe_rate.split("%")[0]),
    Carthe_num: Number.parseInt(city.Carthe_num),
    Carthe_rate: Number.parseFloat(city.Carthe_rate.split("%")[0]),
    Carac_num: Number.parseInt(city.Carac_num),
    Carac_rate: Number.parseFloat(city.Carac_rate.split("%")[0]),
    Snathe_num: Number.parseInt(city.Snathe_num),
    Snathe_rate: Number.parseFloat(city.Snathe_rate.split("%")[0]),
  }));
};

// 市町村の一覧を獲得する関数。今はモックデータを返すだけ。
const cityState = atom<CityType[]>({
  key: "cities",
  default: formatImportedCities(citiesMockData),
});

// 市町村の一覧を獲得するhooks。
export const useCities = () => {
  return useRecoilValue(cityState);
};
