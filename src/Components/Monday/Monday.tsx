import React, { useState } from "react";
import s from "./Monday.module.scss";
import { CounterDisplay } from "./CounterDisplay";
import { Button } from "./Button";

export const Monday = () => {
  //!   1
  /*    const [counter, setCounter] = useState<number>(0);

        const incCallback = (): void => {
            setCounter(counter + 1);
        }

        const resetCallback = (): void => {
            setCounter(0);
        }*/

  //! 2

  const [counter, setCounter] = useState<number>(0);

  const icreaseCounter = (): void => {
    setCounter(counter + 1);
  };

  const resetCounter = (): void => {
    setCounter(0);
  };

  const data = [
    { name: "inc", disabled: counter >= 5, callback: icreaseCounter },
    { name: "reset", disabled: counter === 0, callback: resetCounter },
  ];

  return (
    <div className={s.counterWrap}>
      <CounterDisplay counter={counter} />
      <div className={s.btnWrapper}>
        {data.map((item, i) => (
          <Button
              key={i}
            name={item.name}
            disabled={item.disabled}
            callback={item.callback}
          />
        ))}

        {/*                <Button title={"inc"} callback={incCallback} disabled={counter >= 5}/>
                <Button title={"reset"} callback={resetCallback} disabled={counter === 0}/>*/}
      </div>
    </div>
  );
};