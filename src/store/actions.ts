import { getTariffs } from "../services/tariff-services";
import {
  TariffActions,
  TariffListState,
  LOAD_TARIFFS_SUCCESS,
  LOAD_TARIFFS,
  SET_SORT_KEY,
  SET_SORT_TYPE,
  ORDER_TARIFF_LIST,
} from "./types";

export function setSortKey(payload: string): TariffActions {
  return {
    type: SET_SORT_KEY,
    payload,
  };
}

export function setSortType(payload: string): TariffActions {
  return {
    type: SET_SORT_TYPE,
    payload,
  };
}

export function triggerSortList(): TariffActions {
  return {
    type: ORDER_TARIFF_LIST,
  };
}

export function loadTariffsSuccess(payload: TariffListState[]): TariffActions {
  return {
    type: LOAD_TARIFFS_SUCCESS,
    payload,
  };
}

export function tariffsLoaded(payload: boolean): TariffActions {
  return {
    type: LOAD_TARIFFS,
    payload,
  };
}

export const fetchTariffs = () => {
  return async (dispatch: any) => {
    dispatch(tariffsLoaded(false));
    getTariffs()
      .then((response) => {
        dispatch(tariffsLoaded(true));
        const tariffs: TariffListState[] = response.data;
        dispatch(loadTariffsSuccess(tariffs));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
