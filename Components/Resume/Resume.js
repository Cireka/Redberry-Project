import style from "./Resume.module.css";
import { useEffect, useState } from "react";

const Resume = (props) => {
  return (
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
      <div className={style.Border}></div>
      {props.education && (
        <div className={style.Heading}>
          <h2>განათლება</h2>
          <p></p>
          <span className={style.Date}>23/23/23, 24/24/24</span>
          <span className={style.Description}></span>
        </div>
      )}
    </div>
  );
};

export default Resume;
