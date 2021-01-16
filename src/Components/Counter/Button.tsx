import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonType = DefaultButtonPropsType & {

}

export const Button: React.FC<ButtonType> = (props) => {
    const {value, disabled, ...restProps} = props;
  return (
        <button disabled={disabled} {...restProps}>{value}</button>
  );
};