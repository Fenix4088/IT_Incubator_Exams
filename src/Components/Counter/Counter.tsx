import React, { useReducer } from "react";
import s from "./Counter.module.scss";
import { CounterSettings } from "./CounterSettings";
import { CounterScreen } from "./CounterScreen";
import { counterReducer } from "./counterReducer";
import { getLS } from "./localStorage";

export type StateType = {
  maxValue: number;
  startValue: number;
  currentValue: number;
  setBtnStatus: boolean;
  incBtnStatus: boolean;
  resetBtnStatus: boolean;
  maxValueErrorStatus: boolean;
  startValueErrorStatus: boolean;
  showSettings: boolean;
};

const initialState: StateType = {
  maxValue: getLS("Saved Values", { maxValue: 5, startValue: 0 }).maxValue || 5,
  startValue:
    getLS("Saved Values", { maxValue: 5, startValue: 0 }).startValue || 0,
  currentValue:
    getLS("Saved Values", { maxValue: 5, startValue: 0 }).startValue || 0,
  setBtnStatus: true,
  incBtnStatus: false,
  resetBtnStatus: true,
  maxValueErrorStatus: false,
  startValueErrorStatus: false,
  showSettings: false,
};

export const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className={s.counterWrap}>
{/*      {state.showSettings ? (
        <CounterSettings state={state} />
      ) : (
        <CounterScreen state={state} dispatch={dispatch} />
      )}*/}

      <CounterSettings state={state} />
      <CounterScreen state={state} dispatch={dispatch} />
    </div>
  );
};
