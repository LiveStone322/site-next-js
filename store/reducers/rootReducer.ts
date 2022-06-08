import { Action } from "redux";
import RootState from "../models/rootState.model";

export default function rootReducer(state: RootState, action: any): RootState {
  return {
    ...state,
    ...action.payload,
  };
}