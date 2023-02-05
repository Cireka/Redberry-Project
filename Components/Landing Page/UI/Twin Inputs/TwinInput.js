import style from "./TwinInput.module.css";
const TwinInput = (props) => {
  return (
    <div className={style.TwinInputParrents}>
      <label className={style.Label} for="Employer">
        {props.label}
      </label>
      <input
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
