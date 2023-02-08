import style from "./WideInput.module.css";
import React from "react";
import Image from "next/image";
import correctVector from "../../../public/Input Icons/Vector.png";
import wrongInputIcon from "../../../public/Input Icons/wrongInput.png";

const WideInput = (props) => {
  return (
    <div className={style.wideParrent}>
      <label className={style.Label} htmlfor={props.for}>
        {props.label}
      </label>
      {props.style && (
        <Image
          quality={100}
          className={style.CorrectCheck}
          alt="Correct Input"
          src={correctVector}
        />
      )}
      <Image
        quality={100}
        className={
          props.value === "" && props.style === undefined
            ? style.WrongCheck
            : props.style === true
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
          props.value === "" && props.style === undefined
            ? style.ErrorInput
            : props.style === true
            ? style.CorrectInput
            : props.style === false && props.value === ""
            ? style.Input
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
