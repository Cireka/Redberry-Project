import style from "./MobileNumberInput.module.css";
import React from "react";
import Image from "next/image";
import correctVector from "../../../public/Input Icons/Vector.png";
import wrongInputIcon from "../../../public/Input Icons/wrongInput.png";
import Inputmask from "react-input-mask";

const MobileNumberInput = (props) => {
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
      <Inputmask
        maskChar=""
        mask="+999 999 99 99 99"
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
      <hint className={style.Hint}>{props.hint}</hint>
    </div>
  );
};

export default MobileNumberInput;
