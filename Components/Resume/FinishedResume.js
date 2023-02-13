import style from "./FinishedResume.module.css";
import Image from "next/image";
import resumeLogo from "../../public/Resume Logo/LOGO-12 1.png";
import emailVector from "../../public/Resume Icons/emailVector.png";
import phoneVector from "../../public/Resume Icons/phoneVector.png";
import NavIcon from "../../public/Navigation Icon/NavIcon.png";
import { Fragment } from "react";
import { useRouter } from "next/router";

const FinishedResume = (props) => {
  const router = useRouter();
  const NavIconClickHandler = () => {
    localStorage.clear();
    router.push("/");
  };
  return (
    <Fragment>
      <Image
        onClick={NavIconClickHandler}
        className={style.navIcon}
        alt="Navigation Icon"
        src={NavIcon}
      />
      <div className={style.congrats}>
        <h2>რეზიუმე წარმატებით გაიგზავნა 🎉</h2>
      </div>
      <div className={style.Resume}>
        <div className={style.CredantialsAndImgParrent}>
          <div>
            <h1 className={style.Name}>
              {props.name} {props.lastName}
            </h1>
            <div className={style.ContactsParrent}>
              <p className={style.Contact}>
                {props.email.length >= 1 && (
                  <Image
                    className={style.ResumeIcons}
                    alt="emailVector"
                    src={emailVector}
                  />
                )}
                {props.email}
              </p>

              {props.number.length >= 2 && (
                <p className={style.Contact}>
                  <Image
                    className={style.ResumeIcons}
                    alt="phoneVector"
                    src={phoneVector}
                  />
                  {props.number}
                </p>
              )}
            </div>
            {props.aboutMe && (
              <div className={style.AboutMeParrent}>
                <h2>ჩემს შესახებ</h2>
                <p>{props.aboutMe}</p>
              </div>
            )}
          </div>
          <img
            className={style.img}
            alt="Resume Image"
            src={`https://resume.redberryinternship.ge${props.img}`}
          />
        </div>
        {props.experience && props.experience.length > 0 && (
          <div>
            <div className={style.Border}></div>
            <div className={style.Heading}>
              <h2>გამოცდილება</h2>
              {props.experience.map((experience, index) => (
                <div className={style.Heading} key={index}>
                  <p>
                    {experience.position}
                    {experience.position && ","} {experience.employer}
                  </p>
                  <h3 className={style.Date}>
                    {experience.jobStartDate} {experience.start_date && `-`}{" "}
                    {experience.due_date}
                  </h3>
                  <span className={style.Description}>
                    {experience.description}
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
                    {education.institute} {education.degree}
                  </p>
                  <h3 className={style.Date}>{education.due_date}</h3>
                  <span className={style.Description}>
                    {education.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
        <Image alt="Logo" src={resumeLogo} />
      </div>
    </Fragment>
  );
};

export default FinishedResume;
