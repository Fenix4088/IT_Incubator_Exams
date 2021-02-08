import {StateType} from "./Counter";
import {counterReducer, incCounterAC, setMaxValueAC, setStartValueAC, toggleSettingsWindowAC} from "./counterReducer";
import { screen } from '@testing-library/dom'
import {render} from "@testing-library/react";
import { CounterSettings } from "./CounterSettings";
let startData: StateType;

beforeEach(() => {
     startData = {
        maxValue: 5,
        startValue: 0,
        currentValue: 0,
        setBtnStatus: true,
        incBtnStatus: false,
        resetBtnStatus: true,
        maxValueErrorStatus: false,
        startValueErrorStatus: false,
        showSettings: false,
    }
});

test("should set a correct max counter value", () => {
    const action = setMaxValueAC(12);
    const endData = counterReducer(startData, action);

    expect(startData === endData).toBeFalsy();
    expect(startData.maxValue).toBe(5);
    expect(endData.maxValue).toBe(12);
});
test("should set a correct start counter value", () => {
    const action = setStartValueAC(12);

    const endData = counterReducer(startData, action);

    expect(startData === endData).toBeFalsy();
    expect(startData.startValue).toBe(0);
    expect(endData.startValue).toBe(12);
});
test("should setBtn be disabled", () => {
    const action = setStartValueAC(12);

    const endData = counterReducer(startData, action);

    expect(startData === endData).toBeFalsy();
    expect(startData.startValue).toBe(0);
    expect(endData.startValue).toBe(12);
});
test("should increasing current value", () => {

    const action = incCounterAC();
    const endData = counterReducer(startData, action);

    expect(startData === endData).toBeFalsy();
    expect(endData.currentValue - startData.currentValue).toBe(1);
    expect(endData.resetBtnStatus ).toBeFalsy();
});
test("should correct counter window be visible", () => {

    const action = toggleSettingsWindowAC(true);
    const endData = counterReducer(startData, action);

    expect(startData === endData).toBeFalsy();
    expect(endData.showSettings).toBeTruthy();

});

