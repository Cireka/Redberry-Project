import style from "./WideInput.module.css";
import React from "react";
import Image from "next/image";
import correctVector from "../../../public/Input Icons/Vector.png";
import wrongInputIcon from "../../../public/Input Icons/wrongInput.png";

const WideInput = (props) => {
  return (
    <div className={style.wideParrent}>
      <label className={style.Label} htmlFor={props.for}>
        {props.label}
      </label>
      <Image
        quality={100}
        className={
          props.style === undefined
            ? style.Hidden
            : props.style === true && props.value !== ""
            ? style.CorrectCheck
            : props.style === false && props.value !== ""
            ? style.Hidden
            : style.Hidden
        }
        alt="Correct Input"
        src={correctVector}
      />

      <Image
        quality={100}
        className={
          props.style === undefined
            ? style.WrongCheck
            : props.style === true && props.value !== ""
            ? style.Hidden
            : props.style === false && props.value !== ""
            ? style.WrongCheck
            : style.Hidden
        }
        alt="Wrong Input"
        src={wrongInputIcon}
      />
      <input
        className={
          props.style === undefined
            ? style.ErrorInput
            : props.style === true && props.value !== ""
            ? style.CorrectInput
            : props.style === false && props.value !== ""
            ? style.ErrorInput
            : style.Input
        }
        ref={props.ref}
        onChange={props.onChange}
        value={props.value}
        id={props.id}
        name={props.email}
        placeholder={props.placeHolder}
        type={props.type}
      />
      <p className={style.Hint}>{props.hint}</p>
    </div>
  );
};

export default WideInput;
