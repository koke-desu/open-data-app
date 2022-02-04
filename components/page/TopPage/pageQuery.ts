import { useRouter } from "next/router";
import { CityType, cityTypeKey } from "../../../database/dataType";

//
type SortParamsType = {
  sort: string;
  dir: "asc" | "desc";
};
type FilterParamsType = {
  field: string;
  value: number | string;
  opr: "greater" | "less" | "equal";
};

export type ParamsType = { sort?: SortParamsType; filter?: FilterParamsType };

// パラメータをRouterからparameterを獲得して、ParamsTypeに変形させるhooks
// 関係ないパラメータは無視
export const usePageQuery = (): Partial<ParamsType> => {
  const params = useRouter().query;

  let sortParams: SortParamsType | undefined;
  let filterParams: FilterParamsType | undefined;

  // sort用のフィールドがある場合、sortParamsに代入。
  if ("sort" in params && "dir" in params) {
    if (typeof params.sort === "string" && (params.dir === "asc" || params.dir === "desc")) {
      sortParams = { sort: params.sort, dir: params.dir };
    }
  }

  // filter用のフィールドがある場合、filterParamsに代入。
  // params.valueは数字で解釈できる場合は、数字として保存。
  if ("field" in params && "value" in params && "opr" in params) {
    if (
      typeof params.field === "string" &&
      typeof params.value === "string" &&
      (params.opr === "greater" || params.opr === "less" || params.opr === "equal")
    ) {
      filterParams = {
        field: params.field,
        value: Number(params.value) === NaN ? params.value : Number(params.value),
        opr: params.opr,
      };
    }
  }

  return { sort: sortParams, filter: filterParams };
};

// city[]をqueryに則り、並び替え、フィルターするhooks
// 現状並び替え・フィルターをすべてフロントで行っている。データ数が小さいので、対して重くはならないと思うが留意。
export const useQueryCities = (data: CityType[], query: ParamsType): CityType[] => {
  let result = [...data];

  // sort処理
  if (query.sort?.sort && cityTypeKey.some((key) => key === query.sort?.sort)) {
    result = result.sort((x, y) => {
      const key = query.sort?.sort as keyof CityType;
      if (typeof x[key] === "number") {
        return (x[key] as number) - (y[key] as number);
      }
      return 0;
    });

    // 昇順・降順
    if (query.sort.dir === "desc") result = result.reverse();
  }

  // filter処理
  if (query.filter?.field && cityTypeKey.some((key) => key === query.filter?.field)) {
    const key = query.filter.field as keyof CityType;

    if (query.filter.opr === "equal")
      result = result.filter((city) => city[key] === query.filter?.value);
    if (query.filter.opr === "greater" && typeof query.filter?.value === "number")
      result = result.filter((city) => city[key] >= (query.filter?.value as number));
    if (query.filter.opr === "equal" && typeof query.filter?.value === "number")
      result = result.filter((city) => city[key] >= (query.filter?.value as number));
  }

  return result;
};
