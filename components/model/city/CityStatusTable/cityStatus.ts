import { cityStatusLabel, CityType } from "../../../../database/dataType";

// CityType型のデータを加工し、表に並べる項目を整形する。
// 例） {気温（℃）: 20, 人口（人）: 1000000}
export const useCityStatus = (city: CityType) => {
  if (!city) return {};

  let result: { [label: string]: string | number } = {};

  Object.entries(cityStatusLabel).forEach(([key, label]) => {
    if (city[key as keyof CityType] !== undefined) {
      result[label] = city[key as keyof CityType];
    }
  });

  return result;
};
