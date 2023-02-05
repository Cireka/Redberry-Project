import style from "./HeadingParrent.module.css";
const HeadingParrent = (props) => {
  return (
    <div className={style.HeadingParrent}>
      <h1>{props.Text}</h1>
      <p>{props.Nav}</p>
    </div>
  );
};
export default HeadingParrent;
