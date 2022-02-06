import { useEffect } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { CityType, importedCitiesType } from "./dataType";
import { citiesMockData } from "./mockData";

// モックデータやAPIから読み込まれたCityの型をCityTypeに整形する。
export const formatImportedCities = (cities: importedCitiesType): CityType[] => {
  return cities.map((city) => ({
    ...city,
    Pop: Number.parseInt(city.Pop),
    Temp_Jan: city.Temp_Jan ? Number.parseInt(city.Temp_Jan) : 0,
    Temp_July: city.Temp_July ? Number.parseInt(city.Temp_July) : 0,
    Snow_Jan: city.Snow_Jan
      ? Number.parseFloat(
          typeof city.Snow_Jan === "string" ? city.Snow_Jan.split("cm")[0] : city.Snow_Jan
        )
      : 0,
    Bicthe_num: city.Bicthe_num ? Number.parseInt(city.Bicthe_num) : 0,
    Bicthe_rate: city.Bicthe_rate
      ? Number.parseFloat(
          typeof city.Bicthe_rate === "string" ? city.Bicthe_rate.split("%")[0] : city.Bicthe_rate
        )
      : 0,
    Carthe_num: city.Carthe_num ? Number.parseInt(city.Carthe_num) : 0,
    Carthe_rate: city.Carthe_rate
      ? Number.parseFloat(
          typeof city.Carthe_rate === "string" ? city.Carthe_rate.split("%")[0] : city.Carthe_rate
        )
      : 0,
    Carac_num: city.Carac_num ? Number.parseInt(city.Carac_num) : 0,
    Carac_rate: city.Carac_rate
      ? Number.parseFloat(
          typeof city.Carac_rate === "string" ? city.Carac_rate.split("%")[0] : city.Carac_rate
        )
      : 0,
    Snathe_num: city.Snathe_num ? Number.parseInt(city.Snathe_num) : 0,
    Snathe_rate: city.Snathe_rate
      ? Number.parseFloat(
          typeof city.Snathe_rate === "string" ? city.Snathe_rate.split("%")[0] : city.Snathe_rate
        )
      : 0,
  }));
};

// APIからデータを獲得
const fetchCities = () => {
  return fetch(
    "https://cities-groupc.azurewebsites.net/api/cities1?code=sQKzxavmttY3uVJFLXBIPEkabdsGeeaLRzc9yaaKbzZMChXqlpe6Lg=="
  ).then((res) => {
    console.log(res);
    return res.json().then((data) => {
      console.log(data);
      return data;
    }) as Promise<importedCitiesType | null>;
  });
};

// 市町村の一覧を獲得する関数。今はモックデータを返すだけ。
const cityState = atom<CityType[]>({
  key: "cities",
  default: formatImportedCities(citiesMockData),
  // default: fetchCities().then((data)=>!data?[]: formatImportedCities(data))
});

// 市町村の一覧を獲得するhooks。
export const useCities = () => {
  return useRecoilValue(cityState);
};
