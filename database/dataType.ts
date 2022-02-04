// データベースから獲得するデータの型を定義。

// 各市町村のデータ
export type CityType = {
  id: string;
  Pre: string;
  Mun: string;
  Pop: number;
  Url: string;
  Temp_Jan: number;
  Temp_July: number;
  Snow_Jan: number;
  Bicthe_num: number;
  Bicthe_rate: number;
  Carthe_num: number;
  Carthe_rate: number;
  Carac_num: number;
  Carac_rate: number;
  Snathe_num: number;
  Snathe_rate: number;
};

// モックデータやAPIから読み込まれるcityの型。
export type importedCitiesType = { [key in keyof CityType]: string }[];

// CityTypeのkeyの一覧。ループ回すのに使う。
export const cityTypeKey: (keyof CityType)[] = [
  "id",
  "Pre",
  "Mun",
  "Pop",
  "Url",
  "Temp_Jan",
  "Temp_July",
  "Snow_Jan",
  "Bicthe_num",
  "Bicthe_rate",
  "Carthe_num",
  "Carthe_rate",
  "Carac_num",
  "Carac_rate",
  "Snathe_num",
  "Snathe_rate",
];

// 表で表示するフィールドと、ラベルの対応を定義。
export const cityStatusLabel: { [key in keyof Partial<CityType>]: string } = {
  Pop: "人口（人）",
  Temp_Jan: "1月の平均気温（℃）",
  Temp_July: "7月の平均気温（℃）",
  Snow_Jan: "1月の降雪量（cm）",
  Bicthe_num: "自転車盗難件数",
  Bicthe_rate: "人口に対する自転車盗難件数",
  Carthe_num: "自動車盗難件数",
  Carthe_rate: "人口に対する自転車盗難件数",
  Carac_num: "自動車人身事故件数",
  Carac_rate: "人口に対する自動車人身事故件数",
  Snathe_num: "ひったくり件数",
  Snathe_rate: "人口に対するひったくり件数",
};
