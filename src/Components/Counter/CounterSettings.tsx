import React, { ChangeEvent } from "react";
import { Button } from "./Button";
import { StateType } from "./Counter";
import s from "./Counter.module.scss";
import {
  ActionType,
 disableCounterControlsBtnAC,
  disabledSetBtnAC, maxValueErrorStatusAC,
  setCurrentValueAC,
  setMaxValueAC,
  setStartValueAC, startValueErrorStatusAC, toggleSettingsWindowAC
} from "./counterReducer";
import { setLS } from "./localStorage";

type CounterSettingsType = {
  state: StateType;
  dispatch: (action: ActionType) => void;
};

export const CounterSettings: React.FC<CounterSettingsType> = (props) => {
  const { state, dispatch } = props;

  const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = +e.currentTarget.value;

    dispatch(setMaxValueAC(inputValue));
    dispatch(disableCounterControlsBtnAC(true, true));

    if (
      inputValue > state.startValue &&
      inputValue >= 0 &&
      state.startValue >= 0
    ) {
      dispatch(maxValueErrorStatusAC(false));
      dispatch(startValueErrorStatusAC(false));
      dispatch(disabledSetBtnAC(false));
    } else {
      dispatch(maxValueErrorStatusAC(true));
      dispatch(disabledSetBtnAC(true));
    }
  };

  const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = +e.currentTarget.value;

    dispatch(setStartValueAC(inputValue));
    dispatch(disableCounterControlsBtnAC(true, true));

    if (inputValue < state.maxValue && inputValue >= 0 && state.maxValue >= 0) {
      dispatch(startValueErrorStatusAC(false));
      dispatch(maxValueErrorStatusAC(false));
      dispatch(disabledSetBtnAC(false));
    } else {
      dispatch(startValueErrorStatusAC(true));
      dispatch(disabledSetBtnAC(true));
    }
  };

  const showCounterDisplay = () => {
    dispatch(toggleSettingsWindowAC(false));
  };

  const onSetBtnClick = () => {
    dispatch(disableCounterControlsBtnAC(false, true));
    dispatch(disabledSetBtnAC(true));
    dispatch(setCurrentValueAC(state.startValue));
    setLS("Saved Values", {
      maxValue: state.maxValue,
      startValue: state.startValue,
    });
    showCounterDisplay();
  };

  return (
    <div className={s.block}>
      <div>
        <div className={s.row}>
          <span className={s.inputTitle}>max value: </span>
          <input
            value={state.maxValue}
            onChange={onChangeMaxValue}
            type="number"
            className={`${state.maxValueErrorStatus ? s.errorField : ""} ${
              s.input
            }`}
          />
        </div>
        <div className={s.row}>
          <span className={s.inputTitle}>start value: </span>
          <input
            onChange={onChangeStartValue}
            value={state.startValue}
            type="number"
            className={`${state.startValueErrorStatus ? s.errorField : ""} ${
              s.input
            }`}
          />
        </div>
      </div>
      <div>
        <Button
          value={"Set"}
          disabled={state.setBtnStatus}
          onClick={onSetBtnClick}
          className={`${state.setBtnStatus ? s.disabledBtn : s.incBtn}`}
        />
      </div>
    </div>
  );
};
