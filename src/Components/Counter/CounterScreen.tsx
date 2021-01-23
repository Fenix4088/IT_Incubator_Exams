import React, { useEffect } from "react";
import { Button } from "./Button";
import { StateType } from "./Counter";
import s from "./Counter.module.scss";
import { ActionType, actionTypeNames } from "./counterReducer";

type CounterScreenPropsType = {
  state: StateType;
  dispatch: (action: ActionType) => void;
};

export const CounterScreen: React.FC<CounterScreenPropsType> = (props) => {
  const {
    maxValue,
    setBtnStatus,
    resetBtnStatus,
    incBtnStatus,
    currentValue,
    maxValueErrorStatus,
    startValueErrorStatus,
  } = props.state;

  const { dispatch } = props;

  const {
    INC_COUNTER,
    DISABLE_COUNTER_CONTROL_BTNS,
    RESET_COUNTER,
    TOGGLE_SETTINGS_WINDOW,
  } = actionTypeNames;

  const onIncBtnClick = () => {
    console.log(currentValue);
    if (maxValue > currentValue) {
      dispatch({ type: INC_COUNTER });
    }

    if (maxValue === currentValue + 1) {
      dispatch({
        type: DISABLE_COUNTER_CONTROL_BTNS,
        incBtnStatus: true,
        resetBtnStatus: false,
      });
    }
  };

  const onResetBtnClick = () => {
    dispatch({ type: RESET_COUNTER });
    dispatch({
      type: DISABLE_COUNTER_CONTROL_BTNS,
      incBtnStatus: false,
      resetBtnStatus: true,
    });
  };

  const onSettingsBtnClick = () => {
    dispatch({ type: TOGGLE_SETTINGS_WINDOW, status: true });
  };

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
        <Button
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
        />
      </div>
    </div>
  );
};
