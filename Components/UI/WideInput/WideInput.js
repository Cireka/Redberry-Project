import style from "./WideInput.module.css";
import React from "react";
import Image from "next/image";
import correctVector from "../../../public/Input Icon/Vector.png";

const WideInput = (props) => {
  return (
    <div className={style.wideParrent}>
      <label className={style.Label} htmlfor={props.for}>
        {props.label}
      </label>
      <Image
        quality={100}
        className={props.style ? style.CorrectCheck : style.Hidden}
        alt="Correct Input"
        src={correctVector}
      />
      <input
        className={
          props.value === ""
            ? style.Input
            : props.style
            ? style.CorrectInput
            : style.ErrorInput
        }
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
