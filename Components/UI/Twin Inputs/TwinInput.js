import style from "./TwinInput.module.css";

const TwinInput = (props) => {
  return (
    <div className={style.TwinInputParrents}>
      <label className={style.Label} htmlFor="Employer">
        {props.label}
      </label>
      <input
        ref={props.ref}
        value={props.value}
        onChange={props.onChange && props.onChange}
        required={props.Req}
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
