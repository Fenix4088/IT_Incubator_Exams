// * main action type

import {StateType} from "./Counter";
import {rootStateT} from "../../redux/state";

export type ActionType =
  | SetMaxValueAT
  | SetStartValueAT
  | DisabledSetBtnAT
  | IncCounterAT
  | SetCurrentValueAT
  | ResetCounterAT
  | DisableCounterControlsBtnAT
  | MaxValueErrorStatusAT
  | StartValueErrorStatusAT
  | ToggleSettingsWindowAT;

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
type ToggleSettingsWindowAT = {
  type: actionTypeNames.TOGGLE_SETTINGS_WINDOW;
  status: boolean;
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
  TOGGLE_SETTINGS_WINDOW = "TOGGLE-SETTINGS-WINDOW",
}

const initialState: StateType = {
  maxValue: 5,
  startValue: 0,
  currentValue: 0,
  setBtnStatus: true,
  incBtnStatus: false,
  resetBtnStatus: true,
  maxValueErrorStatus: false,
  startValueErrorStatus: false,
  showSettings: false,
};

export const counterReducer = (state: StateType = initialState, action: ActionType): StateType => {
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
    case actionTypeNames.TOGGLE_SETTINGS_WINDOW:
      return {
        ...state,
        showSettings: action.status,
      };
    default:
      return state
  }
};

//* Action creators
export const setMaxValueAC = (maxValue: number):SetMaxValueAT => {
  return {
    type: actionTypeNames.SET_MAX_VALUE,
    value: maxValue,
  }
}
export const setStartValueAC = (startValue: number):SetStartValueAT => {
  return {
    type: actionTypeNames.SET_START_VALUE,
    value: startValue,
  }
}
export const disabledSetBtnAC = (status: boolean):DisabledSetBtnAT => {
  return {
    type: actionTypeNames.DISABLED_SET_BTN,
    status
  }
}
export const incCounterAC = ():IncCounterAT => {
  return {
    type: actionTypeNames.INC_COUNTER,
  }
}
export const setCurrentValueAC = (currentValue: number):SetCurrentValueAT => {
  return {
    type: actionTypeNames.SET_CURRENT_VALUE,
    value: currentValue,
  }
}
export const resetCounterAC = ():ResetCounterAT => {
  return {
    type: actionTypeNames.RESET_COUNTER,
  }
}
export const disableCounterControlsBtnAC = (incBtnStatus: boolean, resetBtnStatus: boolean):DisableCounterControlsBtnAT => {
  return {
    type: actionTypeNames.DISABLE_COUNTER_CONTROL_BTNS,
    incBtnStatus,
    resetBtnStatus,
  }
}
export const maxValueErrorStatusAC = (status: boolean):MaxValueErrorStatusAT => {
  return {
    type: actionTypeNames.MAX_VALUE_ERROR,
    status
  }
}
export const startValueErrorStatusAC = (status: boolean):StartValueErrorStatusAT => {
  return {
    type: actionTypeNames.START_VALUE_ERROR,
    status
  }
}
export const toggleSettingsWindowAC = (status: boolean):ToggleSettingsWindowAT => {
  return {
    type: actionTypeNames.TOGGLE_SETTINGS_WINDOW,
    status
  }
}
//* //Action creators

//* Selects
export const counterState = (state: rootStateT) => state.counterReducer;
export const selectShowSettings = (state: rootStateT) => state.counterReducer.showSettings