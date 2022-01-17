// データベースから獲得するデータの型を定義。

// 各市町村のデータ
export type CityType = {
  id: string;
  prefecture: string;
  name: string;
  link: string;
  crimeRate: number;
  temperature: number;
  population: number;
};

// CityTypeのkeyの一覧。ループ回すのに使う。
export const cityTypeKey: (keyof CityType)[] = [
  "id",
  "prefecture",
  "name",
  "link",
  "crimeRate",
  "temperature",
  "population",
];
