import React from "react";
import { Button } from "./Button";
import s from "./Counter.module.scss";
import {
  counterState,
  disableCounterControlsBtnAC,
  incCounterAC,
  resetCounterAC,
  toggleSettingsWindowAC,
} from "./counterReducer";
import { useDispatch, useSelector } from "react-redux";

export const CounterScreen: React.FC = () => {
  const dispatch = useDispatch();
  const {
    maxValue,
    setBtnStatus,
    resetBtnStatus,
    incBtnStatus,
    currentValue,
    maxValueErrorStatus,
    startValueErrorStatus,
  } = useSelector(counterState);

  const onIncBtnClick = () => {
    if (maxValue > currentValue) {
      dispatch(incCounterAC());
    }

    if (maxValue === currentValue + 1) {
      dispatch(disableCounterControlsBtnAC(true, false));
    }
  };

  const onResetBtnClick = () => {
    dispatch(resetCounterAC());
    dispatch(disableCounterControlsBtnAC(false, true));
  };

  const onSettingsBtnClick = () => {
    dispatch(toggleSettingsWindowAC(true));
  };

  const buttonsData = [
    {value: "inc", disabled: incBtnStatus, onClick: onIncBtnClick, className: `${incBtnStatus ? s.disabledBtn : s.incBtn} ${s.btn}`},
    {value: "reset", disabled: resetBtnStatus, onClick: onResetBtnClick, className: `${resetBtnStatus ? s.disabledBtn : s.resetBtn} ${s.btn}`},
    {value: "settings", disabled: false, onClick: onSettingsBtnClick, className: `${s.settingsBtn} ${s.btn}`},
  ]


  return (
    <div className={s.block}>
      <div className={maxValue === currentValue ? s.colorRed : ""}>
        {maxValueErrorStatus || startValueErrorStatus ? (
          <span className={s.errorMessage}>Incorrect value</span>
        ) : !setBtnStatus ? (
          "enter value and press set"
        ) : (
          currentValue
        )}
      </div>
      <div>
{/*        <Button
          value={"inc"}
          disabled={incBtnStatus}
          onClick={onIncBtnClick}
          className={`${incBtnStatus ? s.disabledBtn : s.incBtn} ${s.btn}`}
        />
        <Button
          value={"reset"}
          disabled={resetBtnStatus}
          onClick={onResetBtnClick}
          className={`${resetBtnStatus ? s.disabledBtn : s.resetBtn} ${s.btn}`}
        />
        <Button
          value={"settings"}
          onClick={onSettingsBtnClick}
          className={`${s.settingsBtn} ${s.btn}`}
        />*/}

        {buttonsData.map((b, i) => {
          return <Button value={b.value} disabled={b.disabled} onClick={b.onClick} className={b.className}/>
        })}
      </div>
    </div>
  );
};
