export const LOAD_TARIFFS = "LOAD_TARIFFS";
export const SET_SORT_KEY = "SET_SORT_KEY";
export const SET_SORT_TYPE = "SET_SORT_TYPE";
export const LOAD_TARIFFS_SUCCESS = "LOAD_TARIFFS_SUCCESS";
export const ORDER_TARIFF_LIST = "ORDER_TARIFF_LIST";

export interface TariffListState {
  id?: number;
  price?: number;
  download?: number;
  upload?: number;
  name?: string;
  popularity?: number;
  benefits?: string[];
}

export type TariffState = {
  isLoaded?: boolean;
  sortKey: string;
  sortType: string;
  tariffs: TariffListState[];
};

export type SetSortKey = {
  type: typeof SET_SORT_KEY;
  payload: string;
};

export type SetSortType = {
  type: typeof SET_SORT_TYPE;
  payload: string;
};

export type OrderTariffList = {
  type: typeof ORDER_TARIFF_LIST;
};

export type TariffsLoaded = {
  type: typeof LOAD_TARIFFS;
  payload: boolean;
};

export type LoadedTariffSuccess = {
  type: typeof LOAD_TARIFFS_SUCCESS;
  payload: TariffListState[];
};

export type TariffActions =
  | TariffsLoaded
  | LoadedTariffSuccess
  | SetSortKey
  | SetSortType
  | OrderTariffList;
