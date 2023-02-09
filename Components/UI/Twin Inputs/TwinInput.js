import style from "./TwinInput.module.css";
import correctVector from "../../../public/Input Icons/Vector.png";
import wrongInputIcon from "../../../public/Input Icons/wrongInput.png";
import Image from "next/image";

const TwinInput = (props) => {
  console.log(props.style);
  return (
    <div className={style.TwinInputParrents}>
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
        value={props.value}
        onChange={props.onChange && props.onChange}
        placeholder={props.placeHolder}
        type={props.type}
        id={props.id}
        name={props.name}
      />
      {props.hint && (
        <hint className={style.Hint}>
          {props.customHint ? `${props.customHint}` : "მინიმუმ 2 სიმბოლო"}
        </hint>
      )}
    </div>
  );
};
export default TwinInput;
