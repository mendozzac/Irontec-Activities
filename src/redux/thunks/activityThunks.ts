import { ThunkAction } from "redux-thunk";
import { loadActivityAction } from "../actions/actionCreator";
import { AnyAction } from "redux";
import { RootState } from "../store";

const apiUrl = process.env.REACT_APP_API_URL;

export const loadActivityThunk =
  (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    const response = await fetch(`${apiUrl}`);
    const activity = await response.json();
    dispatch(loadActivityAction(activity));
  };
