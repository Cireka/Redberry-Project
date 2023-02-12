import style from "./Resume.module.css";
import Image from "next/image";
import resumeLogo from "../../public/Resume Logo/LOGO-12 1.png";

const Resume = (props) => {
  console.log(props.experiance);
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
        {props.img.length !== 0 && (
          <Image
            className={style.img}
            width={246}
            height={246}
            alt="Resume Image"
            src={img}
          />
        )}
      </div>
      {props.experiance && props.experiance.length > 0 && (
        <div>
          <div className={style.Border}></div>
          <div className={style.Heading}>
            <h2>გამოცდილება</h2>
            {props.experiance.map((experience, index) => (
              <div className={style.Heading} key={index}>
                <p>
                  {experience.jobPosition}
                  {experience.jobPosition && ","} {experience.employer}
                </p>
                <h3 className={style.Date}>
                  {experience.jobStartDate} {experience.jobStartDate && `-`}{" "}
                  {experience.jobEndDate}
                </h3>
                <span className={style.Description}>
                  {experience.jobDescription}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
      {props.education && props.education.length > 0 && (
        <div>
          <div className={style.Border}></div>
          <div className={style.Heading}>
            <h2>განათლება</h2>
            {props.education.map((education, index) => (
              <div className={style.Heading} key={index}>
                <p>
                  {education.educationInstitute} {education.educationDegree}
                </p>
                <h3 className={style.Date}>{education.educationEndDate}</h3>
                <span className={style.Description}>
                  {education.educationDescription}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <Image alt="Logo" src={resumeLogo} />
    </div>
  );
};

export default Resume;
