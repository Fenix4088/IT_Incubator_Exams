import React, { ChangeEvent } from "react";
import { Button } from "./Button";
import { ActionType, actionTypeNames, StateType } from "./Counter";
import s from "./Counter.module.scss";


type CounterSettingsType = {
  state: StateType;
  dispatch: (action: ActionType) => void;
};

export const CounterSettings: React.FC<CounterSettingsType> = (props) => {
  const { state, dispatch } = props;
  const {
    SET_MAX_VALUE,
    DISABLE_COUNTER_CONTROL_BTNS,
    DISABLED_SET_BTN,
    SET_START_VALUE,
    SET_CURRENT_VALUE,
    MAX_VALUE_ERROR,
    START_VALUE_ERROR,
  } = actionTypeNames;

  const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = +e.currentTarget.value;

    dispatch({ type: SET_MAX_VALUE, value: inputValue });
    dispatch({
      type: DISABLE_COUNTER_CONTROL_BTNS,
      incBtnStatus: true,
      resetBtnStatus: true,
    });

    if (inputValue > state.startValue && inputValue >= 0 && state.startValue >= 0) {
      dispatch({ type: MAX_VALUE_ERROR, status: false });
      dispatch({ type: DISABLED_SET_BTN, status: false });
    } else {
      dispatch({ type: MAX_VALUE_ERROR, status: true });
      dispatch({ type: DISABLED_SET_BTN, status: true });
    }
  };

  const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = +e.currentTarget.value;

    dispatch({ type: SET_START_VALUE, value: inputValue });
    dispatch({
      type: DISABLE_COUNTER_CONTROL_BTNS,
      incBtnStatus: true,
      resetBtnStatus: true,
    });

    if (inputValue < state.maxValue && inputValue >= 0 && state.maxValue >= 0) {
      dispatch({ type: START_VALUE_ERROR, status: false });
      dispatch({ type: DISABLED_SET_BTN, status: false });
    } else {
      dispatch({ type: START_VALUE_ERROR, status: true });
      dispatch({ type: DISABLED_SET_BTN, status: true });
    }
  };

  const onSetBtnClick = () => {
    dispatch({
      type: DISABLE_COUNTER_CONTROL_BTNS,
      incBtnStatus: false,
      resetBtnStatus: true,
    });
    dispatch({ type: DISABLED_SET_BTN, status: true });
    dispatch({ type: SET_CURRENT_VALUE, value: state.startValue });
  };

  return (
    <div>
      <div>
        <div>
          <span>max value: </span>
          <input
            value={state.maxValue}
            onChange={onChangeMaxValue}
            type="number"
            className={state.maxValueErrorStatus ? s.errorField : ""}
          />
        </div>
        <div>
          <span>start value: </span>
          <input
            onChange={onChangeStartValue}
            value={state.startValue}
            type="number"
            className={state.startValueErrorStatus ? s.errorField : ""}
          />
        </div>
      </div>
      <div>
        <Button
          value={"Set"}
          disabled={state.setBtnStatus}
          onClick={onSetBtnClick}
        />
      </div>
    </div>
  );
};
