import style from "./AdditionalInformationBox.module.css";

const AdditionalInformationBox = (props) => {
  return (
    <div className={style.aboutMeParrent}>
      <label>
        {props.label} {!props.req && "(არასავალდებულო)"}
      </label>
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
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type="text"
      />
    </div>
  );
};
export default AdditionalInformationBox;
