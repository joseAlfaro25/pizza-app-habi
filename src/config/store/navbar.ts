import { Dispatch } from "redux";
import { INavActionTypes } from "./types/navbar";

const DATAINIT = {
  active: false,
};

const ACTIVE = "ACTIVE";
//Reducer
export default function navReducer(state = DATAINIT, action: INavActionTypes) {
  switch (action.type) {
    case ACTIVE:
      return { ...state, active: action.payload };
    default:
      return state;
  }
}

// Actions
export const activeNav = (value: boolean) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: ACTIVE,
      payload: value,
    });
  } catch (error) {}
};
