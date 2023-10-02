import { Data } from "../../data/data";
import {
  decreasePageNumber,
  getData,
  increasePageNumber,
  search,
  setPage
} from "../action/action";

const initial = {
  page: 1,
  data: Data?.cars,
  search: ""
};

export default function pageReducer(state = initial, action) {
  switch (action.type) {
    case increasePageNumber:
      return {
        ...state,
        page: +state.page === 10 ? +state.page : +state.page + 1
      };

    case decreasePageNumber:
      return {
        ...state,
        page: +state.page === 1 ? +state.page : +state.page - 1
      };

    case setPage:
      return {
        ...state,
        page: action.payload
      };

    case getData:
      return { ...state, data: action.payload };

    case search:
      return { ...state, search: action.payload };

    default:
      return state;
  }
}
