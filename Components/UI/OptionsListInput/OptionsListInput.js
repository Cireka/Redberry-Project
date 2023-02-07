import style from "./OptionsListInput.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const OptionsListInput = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const optionsList = await axios.get(
          "https://resume.redberryinternship.ge/api/degrees"
        );
        const optionsListData = optionsList.data;
        setData(optionsListData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);

  return (
    <div className={style.TwinInputParrents}>
      <label className={style.Label} htmlFor="Employer">
        {props.label}
      </label>
      <select
        value={props.value}
        onChange={props.onChange && props.onChange}
        ref={props.ref && props.ref}
        required={props.Req}
        placeholder={props.placeHolder}
        type={props.type}
        id={props.id}
        name={props.name}
      >
        <option value="">აირჩიეთ ხარისხი</option>

        {data.map((i) => {
          return <option value={i.title}>{i.title}</option>;
        })}
      </select>
      {props.hint && (
        <hint className={style.Hint}>
          {props.customHint ? `${props.customHint}` : "მინიმუმ 2 სიმბოლო"}
        </hint>
      )}
    </div>
  );
};

export default OptionsListInput;
