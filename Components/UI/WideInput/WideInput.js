import style from "./WideInput.module.css";
import React from "react";
const WideInput = (props) => {
  return (
    <div className={style.wideParrent}>
      <label className={style.Label} htmlfor={props.for}>
        {props.label}
      </label>
      <input
        ref={props.ref}
        onChange={props.onChange}
        value={props.value}
        id={props.id}
        name={props.email}
        placeholder={props.placeHolder}
        type={props.type}
      />
      <hint className={style.Hint}>{props.hint}</hint>
    </div>
  );
};

export default WideInput;
