import { useCallback } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { loadActivityThunk } from "../redux/thunks/activityThunks";
import { Activity } from "../types";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const useActivity = () => {
  const activity: Activity = useAppSelector(({ activity }) => activity);
  const dispatch = useAppDispatch();

  const loadActivity = useCallback(
    () => dispatch(loadActivityThunk()),
    [dispatch]
  );

  return {
    activity,
    loadActivity,
  };
};

export default useActivity;
