import style from "./AdditionalInformationBox.module.css";

const AdditionalInformationBox = (props) => {
  return (
    <div className={style.aboutMeParrent}>
      <label>
        {props.label} {!props.req && "(არასავალდებულო)"}
      </label>
      <input
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type="text"
      />
    </div>
  );
};
export default AdditionalInformationBox;
