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

// 表で表示するフィールドと、ラベルの対応を定義。
export const cityStatusLabel: { [key in keyof Partial<CityType>]: string } = {
  population: "人口（人）",
  crimeRate: "犯罪率（％）",
  temperature: "平均気温（℃）",
};
