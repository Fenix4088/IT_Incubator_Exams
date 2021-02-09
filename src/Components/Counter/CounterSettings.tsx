import React, { ChangeEvent } from "react";
import { Button } from "./Button";
import s from "./Counter.module.scss";
import {
  counterState,
  disableCounterControlsBtnAC,
  disabledSetBtnAC,
  maxValueErrorStatusAC,
  setCurrentValueAC,
  setMaxValueAC,
  setStartValueAC,
  startValueErrorStatusAC,
  toggleSettingsWindowAC,
} from "./counterReducer";
import { useDispatch, useSelector } from "react-redux";
import { CounterInputField } from "./CounterInputField";

export const CounterSettings: React.FC = () => {
  const dispatch = useDispatch();
  const {
    startValue,
    maxValue,
    maxValueErrorStatus,
    startValueErrorStatus,
    setBtnStatus,
  } = useSelector(counterState);

  const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = +e.currentTarget.value;

    dispatch(setMaxValueAC(inputValue));
    dispatch(disableCounterControlsBtnAC(true, true));

    if (inputValue > startValue && inputValue >= 0 && startValue >= 0) {
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

    if (inputValue < maxValue && inputValue >= 0 && maxValue >= 0) {
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
    dispatch(setCurrentValueAC(startValue));
    showCounterDisplay();
  };

  const inputsData = [
    {
      title: "max value:",
      value: maxValue,
      onChange: onChangeMaxValue,
      className: `${maxValueErrorStatus ? s.errorField : ""} ${s.input}`,
    },
    {
      title: "start value:",
      value: startValue,
      onChange: onChangeStartValue,
      className: `${startValueErrorStatus ? s.errorField : ""} ${s.input}`,
    },
  ];

  return (
    <div className={s.block}>
      <div>
        {inputsData.map((elem, i) => (
          <CounterInputField key={i}
            title={elem.title}
            value={elem.value}
            onChange={elem.onChange}
            className={elem.className}
          />
        ))}
      </div>
      <div>
        <Button
          value={"Set"}
          disabled={setBtnStatus}
          onClick={onSetBtnClick}
          className={`${setBtnStatus ? s.disabledBtn : s.incBtn}`}
        />
      </div>
    </div>
  );
};
