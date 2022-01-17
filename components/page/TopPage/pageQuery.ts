import { useRouter } from "next/router";

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

type ParamsType = { sort?: SortParamsType; filter?: FilterParamsType };

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
