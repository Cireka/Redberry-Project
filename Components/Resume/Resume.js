import style from "./Resume.module.css";

const Resume = (props) => {
  return (
    <div>
      <h1 className={style.Name}>
        {props.name} {props.lastName}
      </h1>
      <div className={style.ContactsParrent}>
        <p className={style.Contact}>anzorr666@redberry.ge</p>
        <p className={style.Contact}>+995 597 63 45 16</p>
      </div>
      <div className={style.AboutMeParrent}>
        <h2>ჩემს შესახებ</h2>
        <p>{props.aboutMe}</p>
      </div>
      <div className={style.Border}></div>
    </div>
  );
};

export default Resume;
