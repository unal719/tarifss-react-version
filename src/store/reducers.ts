import {
  TariffState,
  LOAD_TARIFFS,
  LOAD_TARIFFS_SUCCESS,
  TariffActions,
  SET_SORT_KEY,
  SET_SORT_TYPE,
  ORDER_TARIFF_LIST,
} from "./types";

const initialState: TariffState = {
  isLoaded: false,
  tariffs: [],
  sortKey: "",
  sortType: "",
};
export const tariffReduce = (
  state: TariffState | undefined = initialState,
  action: TariffActions
): TariffState => {
  switch (action.type) {
    case LOAD_TARIFFS:
      return {
        ...state,

        isLoaded: action.payload,
      };
    case LOAD_TARIFFS_SUCCESS:
      return {
        ...state,
        tariffs: [...action.payload],
      };
    case SET_SORT_KEY:
      return {
        ...state,
        sortKey: action.payload,
      };

    case SET_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };

    case ORDER_TARIFF_LIST:
      if (state.sortKey === "" && state.sortType === "") {
        return state;
      }
      let orderedTarifs = [...state.tariffs];
      const key = state.sortKey;
      switch (state.sortType) {
        case "asc":
          orderedTarifs.sort((a: any, b: any) => {
            return a[key] - b[key];
          });
          break;
        case "desc":
          orderedTarifs.sort((a: any, b: any) => {
            return b[key] - a[key];
          });
          break;
        default:
          break;
      }

      return {
        ...state,
        tariffs: [...orderedTarifs],
      };
    default:
      return state;
  }
};
