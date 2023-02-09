import HeadingParrent from "Components/UI/HeadingParrent";
import style from "./Education.module.css";
import { useRouter } from "next/router";
import TwinInput from "Components/UI/Twin Inputs/TwinInput";
import WideInput from "Components/UI/WideInput/WideInput";
import AdditionalInformationBox from "Components/UI/AdditionalInformationBox/AdditionalInformationBox";
import { useState, useEffect } from "react";
import Resume from "Components/Resume/Resume";
import OptionsListInput from "Components/UI/OptionsListInput/OptionsListInput";

const Education = () => {
  const router = useRouter();
  const goBackHandler = (event) => {
    event.preventDefault();
    router.back();
  };

  const [validation, setValidation] = useState({
    institute: null,
    degree: null,
    finishDate: null,
    educationDescription: null,
  });

  const [isLocalStorageAvailable, setIsLocalStorageAvailable] = useState(false);
  const [personalData, setPersonalData] = useState({
    name: "",
    lastName: "",
    aboutMe: "",
    email: "",
    number: "",
    job: "",
    image: [],
    employer: "",
    jobStartDate: "",
    jobEndDate: "",
    jobDescription: "",
    education: "",
    educationDegree: "",
    EducationDate: "",
    EducationDescription: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      setIsLocalStorageAvailable(true);
      const storedData = JSON.parse(
        window.localStorage.getItem("personalData")
      ) || {
        name: "",
        lastName: "",
        aboutMe: "",
        email: "",
        number: "",
        job: "",
        image: [],
        employer: "",
        jobStartDate: "",
        jobEndDate: "",
        jobDescription: "",
        education: "",
        educationDegree: "",
        EducationDate: "",
        EducationDescription: "",
      };
      setPersonalData(storedData);
    }
  }, []);

  useEffect(() => {
    if (isLocalStorageAvailable) {
      window.localStorage.setItem("personalData", JSON.stringify(personalData));
    }
  }, [isLocalStorageAvailable, personalData]);

  const educationChangeHandler = (event) => {
    setPersonalData({ ...personalData, education: event.target.value });
  };
  const educationDegreeChangeHandler = (event) => {
    setPersonalData({ ...personalData, educationDegree: event.target.value });
  };
  const educationEndDateChangeHandler = (event) => {
    setPersonalData({ ...personalData, EducationDate: event.target.value });
  };

  const EducationDescription = (event) => {
    setPersonalData({
      ...personalData,
      EducationDescription: event.target.value,
    });
  };

  useEffect(() => {
    if (isLocalStorageAvailable) {
      window.localStorage.setItem("personalData", JSON.stringify(personalData));
    }
  }, [isLocalStorageAvailable, personalData]);
  console.log(personalData);

  useEffect(() => {
    let updatedValidation = { ...validation };
    if (personalData.education.length >= 2) {
      updatedValidation.institute = true;
    } else if (
      personalData.education.length <= 2 &&
      personalData.education !== ""
    ) {
      updatedValidation.institute = false;
    }
    if (personalData.educationDegree === "") {
      updatedValidation.degree = false;
    } else if (personalData.educationDegree !== "") {
      updatedValidation.degree = true;
    }
    if (personalData.EducationDate !== "") {
      updatedValidation.finishDate = true;
    } else if (personalData.EducationDate === "") {
      updatedValidation.finishDate = false;
    }
    if (personalData.EducationDescription !== "") {
      updatedValidation.educationDescription = true;
    } else if (personalData.EducationDescription === "") {
      updatedValidation.educationDescription = false;
    }

    setValidation(updatedValidation);
  }, [personalData]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    let updatedValidation = { ...validation };

    if (personalData.education === "") {
      updatedValidation.institute = undefined;
    }

    if (personalData.educationDegree === "") {
      updatedValidation.degree = undefined;
    }
    if (personalData.EducationDate === "") {
      updatedValidation.finishDate = undefined;
    }

    if (personalData.EducationDescription === "") {
      updatedValidation.educationDescription = undefined;
    }

    setValidation(updatedValidation);

    if (
      validation.educationDescription &&
      validation.degree &&
      validation.finishDate &&
      validation.institute
    ) {
      router.push("/PersonalInformation/Experiance/Education");
    }
  };
  console.log(personalData);

  return (
    <section className={style.EducationInformation}>
      <div className={style.EducationIformationContainer}>
        <div className={style.EducationInfoParrent}>
          <HeadingParrent Text={"განათლება"} Nav={"3/3"} />
          <form onSubmit={formSubmitHandler} className={style.Form}>
            <WideInput
              style={validation.institute}
              onChange={educationChangeHandler}
              value={personalData.education}
              placeHolder={"სასწავლებელი"}
              name={"institute"}
              id={"institute"}
              for={"institute"}
              type={"text"}
              label={"სასწავლებელი"}
              hint={"მინიმუმ 2 სიმბოლო"}
            />
            <div className={style.StartAndEndDateParrent}>
              <OptionsListInput
                style={validation.degree}
                onChange={educationDegreeChangeHandler}
                value={personalData.educationDegree}
                type="text"
                id="Degree"
                name="Degree"
                placeHolder={"არჩიეთ ხარისხი"}
                hint={false}
                label={"ხარისხი"}
              />
              <TwinInput
                style={validation.finishDate}
                onChange={educationEndDateChangeHandler}
                value={personalData.EducationDate}
                type="date"
                id="EducationEndDate"
                name="EducationEndDate"
                placeholder={"დამსაქმებელი"}
                hint={false}
                label={"დამთავრების რიცხვი"}
              />
            </div>
            <AdditionalInformationBox
              style={validation.educationDescription}
              onChange={EducationDescription}
              value={personalData.EducationDescription}
              label={"აღწერა"}
              placeholder={"განათლების აღწერა"}
              req={true}
            />
            <div className={style.Border}></div>
            <button className={style.AdditionalExperiance}>
              მეტი სასწავლებლის დამატება
            </button>
            <div className={style.NavButtonsParrent}>
              <button onClick={goBackHandler} className={style.NavButtons}>
                უკან
              </button>
              <button className={style.NavButtons}>დასრულება</button>
            </div>
          </form>
        </div>
        <Resume
          email={personalData.email}
          number={personalData.number}
          aboutMe={personalData.aboutMe}
          lastName={personalData.lastName}
          name={personalData.name}
          job={personalData.job}
          employer={personalData.employer}
          jobStartDate={personalData.jobStartDate}
          jobEndDate={personalData.jobEndDate}
          jobDescription={personalData.jobDescription}
          educationDegree={personalData.educationDegree}
          education={personalData.education}
          educationDate={personalData.EducationDate}
          educationDescription={personalData.EducationDescription}
          img={personalData.image}
        />
      </div>
    </section>
  );
};
export default Education;
