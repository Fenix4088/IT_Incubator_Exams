import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import s from "./Counter.module.scss";

type CounterInputFieldT = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  title: string;
};
export const CounterInputField: React.FC<CounterInputFieldT> = (props) => {
  const { title, value, onChange, className } = props;
  return (
    <div className={s.row}>
      <span className={s.inputTitle}>{title} </span>
      <input
        value={value}
        onChange={onChange}
        type="number"
        className={className}
      />
    </div>
  );
};
