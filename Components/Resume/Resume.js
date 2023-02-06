import style from "./Resume.module.css";
import Image from "next/image";

const Resume = (props) => {
  const img = props.img;
  return (
    <div>
      <div className={style.CredantialsAndImgParrent}>
        <div>
          <h1 className={style.Name}>
            {props.name} {props.lastName}
          </h1>
          <div className={style.ContactsParrent}>
            <p className={style.Contact}>{props.email}</p>
            <p className={style.Contact}>{props.number}</p>
          </div>
          {props.aboutMe && (
            <div className={style.AboutMeParrent}>
              <h2>ჩემს შესახებ</h2>
              <p>{props.aboutMe}</p>
            </div>
          )}
        </div>
        {props.img && (
          <Image
            className={style.img}
            width={246}
            height={246}
            alt="Resume Image"
            src={img}
          />
        )}
      </div>
      {props.job && <div className={style.Border}></div>}
      {props.job && (
        <div className={style.Heading}>
          <h2>გამოცდილება</h2>
          <p>
            {props.job} {props.employer}
          </p>
          <h3 className={style.Date}>
            {props.jobStartDate} - {props.jobEndDate}
          </h3>
          <span className={style.Description}>{props.jobDescription}</span>
        </div>
      )}
      {props.education && <div className={style.Border}></div>}
      {props.education && (
        <div className={style.Heading}>
          <h2>განათლება</h2>
          <p>
            {props.education} {props.educationDegree}
          </p>
          <h3 className={style.Date}>{props.educationDate}</h3>
          <span className={style.Description}>
            {props.educationDescription}
          </span>
        </div>
      )}
    </div>
  );
};

export default Resume;
