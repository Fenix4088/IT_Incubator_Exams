import React, { useReducer } from "react";
import s from "./Counter.module.scss";
import { CounterSettings } from "./CounterSettings";
import { CounterScreen } from "./CounterScreen";

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

// * main action type
export type ActionType =
  | SetMaxValueAT
  | SetStartValueAT
  | DisabledSetBtnAT
  | IncCounterAT
  | SetCurrentValueAT
  | ResetCounterAT
  | DisableCounterControlsBtnAT
  | MaxValueErrorStatusAT
  | StartValueErrorStatusAT;

// * actions types
type SetMaxValueAT = {
  type: actionTypeNames.SET_MAX_VALUE;
  value: number;
};
type SetStartValueAT = {
  type: actionTypeNames.SET_START_VALUE;
  value: number;
};
type DisabledSetBtnAT = {
  type: actionTypeNames.DISABLED_SET_BTN;
  status: boolean;
};

type IncCounterAT = {
  type: actionTypeNames.INC_COUNTER;
};

type SetCurrentValueAT = {
  type: actionTypeNames.SET_CURRENT_VALUE;
  value: number;
};

type ResetCounterAT = {
  type: actionTypeNames.RESET_COUNTER;
};

type DisableCounterControlsBtnAT = {
  type: actionTypeNames.DISABLE_COUNTER_CONTROL_BTNS;
  incBtnStatus: boolean;
  resetBtnStatus: boolean;
};

type MaxValueErrorStatusAT = {
  type: actionTypeNames.MAX_VALUE_ERROR;
  status: boolean;
};

type StartValueErrorStatusAT = {
  type: actionTypeNames.START_VALUE_ERROR;
  status: boolean;
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

export enum actionTypeNames {
  SET_MAX_VALUE = "SET-MAX-VALUE",
  SET_START_VALUE = "SET-START-VALUE",
  DISABLED_SET_BTN = "DISABLED-SET-BTN",
  INC_COUNTER = "INC-COUNTER",
  SET_CURRENT_VALUE = "SET-CURRENT-VALUE",
  RESET_COUNTER = "RESET-COUNTER",
  DISABLE_COUNTER_CONTROL_BTNS = "DISABLE-COUNTER-CONTROL-BTNS",
  MAX_VALUE_ERROR = "MAX-VALUE-ERROR",
  START_VALUE_ERROR = "START-VALUE-ERROR",
}

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case actionTypeNames.SET_MAX_VALUE:
      return {
        ...state,
        maxValue: action.value,
      };
    case actionTypeNames.SET_START_VALUE:
      return {
        ...state,
        startValue: action.value,
      };
    case actionTypeNames.DISABLED_SET_BTN:
      return {
        ...state,
        setBtnStatus: action.status,
      };
    case actionTypeNames.INC_COUNTER:
      return {
        ...state,
        currentValue: state.currentValue + 1,
        resetBtnStatus: false,
      };
    case actionTypeNames.SET_CURRENT_VALUE:
      return {
        ...state,
        currentValue: action.value,
      };
    case actionTypeNames.RESET_COUNTER:
      return {
        ...state,
        currentValue: state.startValue,
      };
    case actionTypeNames.DISABLE_COUNTER_CONTROL_BTNS:
      return {
        ...state,
        resetBtnStatus: action.resetBtnStatus,
        incBtnStatus: action.incBtnStatus,
      };
    case actionTypeNames.MAX_VALUE_ERROR:
      return {
        ...state,
        maxValueErrorStatus: action.status,
      };
    case actionTypeNames.START_VALUE_ERROR:
      return {
        ...state,
        startValueErrorStatus: action.status,
      };

    default:
      throw new Error("Bad action");
  }
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
