import React from "react";
import s from "./Counter.module.scss";
import { CounterSettings } from "./CounterSettings";
import { CounterScreen } from "./CounterScreen";
import { selectShowSettings } from "./counterReducer";
import { useSelector } from "react-redux";

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

export const Counter = () => {
  const showSettings = useSelector(selectShowSettings);

  return (
    <div className={s.counterWrap}>
      {showSettings ? <CounterSettings/> : <CounterScreen />}
    </div>
  );
};
