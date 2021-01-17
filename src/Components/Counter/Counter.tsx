import React, { useReducer } from "react";
import s from "./Counter.module.scss";
import { CounterSettings } from "./CounterSettings";
import { CounterScreen } from "./CounterScreen";
import { reducer } from "./counterReducer";

export type StateType = {
  maxValue: number;
  startValue: number;
  currentValue: number;
  setBtnStatus: boolean;
  incBtnStatus: boolean;
  resetBtnStatus: boolean;
  maxValueErrorStatus: boolean;
  startValueErrorStatus: boolean;
};

const initialState: StateType = {
  maxValue: 5,
  startValue: 0,
  currentValue: 0,
  setBtnStatus: true,
  incBtnStatus: false,
  resetBtnStatus: true,
  maxValueErrorStatus: false,
  startValueErrorStatus: false,
};

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={s.counterWrap}>
      <CounterSettings state={state} dispatch={dispatch} />
      <CounterScreen state={state} dispatch={dispatch} />
    </div>
  );
};
