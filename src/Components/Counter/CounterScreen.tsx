import React from 'react';
import {Button} from "./Button";
import {ActionType, actionTypeNames, StateType} from "./Counter";
import s from "./Counter.module.scss";


type CounterScreenPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}

export const CounterScreen: React.FC<CounterScreenPropsType> = (props) => {
    const {maxValue, startValue, setBtnStatus, resetBtnStatus, incBtnStatus, currentValue ,maxValueErrorStatus} = props.state;
    const {dispatch} = props;
    const {INC_COUNTER, DISABLE_COUNTER_CONTROL_BTNS, RESET_COUNTER} = actionTypeNames


    const onIncBtnClick = () => {
        if(maxValue > currentValue) {
            dispatch({type: INC_COUNTER});
        }

        if (maxValue === currentValue + 1) {
            dispatch({type: DISABLE_COUNTER_CONTROL_BTNS, incBtnStatus: true, resetBtnStatus: false});
        }
    }

    const onResetBtnClick = () => {
        dispatch({type: RESET_COUNTER});
        dispatch({type: DISABLE_COUNTER_CONTROL_BTNS, incBtnStatus: false, resetBtnStatus: true});
    }
    return (
        <div>
            <div className={maxValue === currentValue ? s.colorRed : ""}>
                {maxValueErrorStatus ? "Incorrect value " : (!setBtnStatus ? "enter value and press set" : currentValue)}
            </div>
            <div>
                <Button value={"inc"} disabled={incBtnStatus} onClick={onIncBtnClick}/>
                <Button value={"reset"} disabled={resetBtnStatus} onClick={onResetBtnClick}/>
            </div>
        </div>
    )

}