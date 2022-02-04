import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { CityType } from "./dataType";
import { citiesMockData } from "./mockData";

// 市町村の一覧を獲得する関数。今はモックデータを返すだけ。
const cityState = atom<CityType[]>({
  key: "cities",
  default: [],
});

// 市町村の一覧を獲得するhooks。
export const useCities = () => {
  return useRecoilValue(cityState);
};
