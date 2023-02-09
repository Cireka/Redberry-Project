import HeadingParrent from "Components/UI/HeadingParrent";
import style from "./Experiance.module.css";
import { useRouter } from "next/router";
import TwinInput from "Components/UI/Twin Inputs/TwinInput";
import WideInput from "Components/UI/WideInput/WideInput";
import AdditionalInformationBox from "Components/UI/AdditionalInformationBox/AdditionalInformationBox";
import Resume from "Components/Resume/Resume";
import { useState, useEffect } from "react";

const Experiance = () => {
  const router = useRouter();
  const goBackHandler = (event) => {
    event.preventDefault();
    router.back();
  };
  const [validation, setValidation] = useState({
    job: null,
    employer: null,
    jobStartDate: null,
    jobEndDate: null,
  });

  const [isLocalStorageAvailable, setIsLocalStorageAvailable] = useState(false);
  const [personalData, setPersonalData] = useState({
    name: "",
    lastName: "",
    aboutMe: "",
    email: "",
    number: "",
    job: "",
    image: "",
    employer: "",
    jobStartDate: "",
    jobEndDate: "",
    jobDescription: "",
  });

  useEffect(() => {
    let updatedValidation = { ...validation };
    console.log(personalData);

    if (personalData.job.length >= 2) {
      updatedValidation.job = true;
    } else {
      updatedValidation.job = false;
    }

    if (personalData.employer.length >= 2) {
      updatedValidation.employer = true;
    } else {
      updatedValidation.employer = false;
    }

    if (personalData.jobStartDate !== "") {
      console.log(personalData.jobStartDate);
      updatedValidation.jobStartDate = true;
    } else {
      updatedValidation.jobStartDate = false;
    }
    if (personalData.jobEndDate !== "") {
      updatedValidation.jobEndDate = true;
    } else {
      updatedValidation.jobEndDate = false;
    }
    setValidation(updatedValidation);
  }, [personalData]);

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
        image: "",
        employer: "",
        jobStartDate: "",
        jobEndDate: "",
        jobDescription: "",
      };
      setPersonalData(storedData);
    }
  }, []);

  useEffect(() => {
    if (isLocalStorageAvailable) {
      window.localStorage.setItem("personalData", JSON.stringify(personalData));
    }
  }, [isLocalStorageAvailable, personalData]);

  const jobChangeHandler = (event) => {
    setPersonalData({ ...personalData, job: event.target.value });
  };

  const employerChangeHandler = (event) => {
    setPersonalData({ ...personalData, employer: event.target.value });
  };

  const startDateHandler = (event) => {
    setPersonalData({ ...personalData, jobStartDate: event.target.value });
  };

  const endDateHandler = (event) => {
    setPersonalData({ ...personalData, jobEndDate: event.target.value });
  };

  const jobDescriptionHandler = (event) => {
    setPersonalData({ ...personalData, jobDescription: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <section className={style.ExperianceIformation}>
      <div className={style.ExperianceIformationContainer}>
        <div className={style.ExperianceInfoParrent}>
          <HeadingParrent Text={"გამოცდილება"} Nav={"2/3"} />
          <form onSubmit={submitHandler} className={style.Form}>
            <WideInput
              style={validation.job}
              onChange={jobChangeHandler}
              value={personalData.job}
              placeHolder={"დეველოპერი, დიზაინერ, ა.შ."}
              name={"position"}
              id={"position"}
              type={"text"}
              label={"თანამდებობა"}
              hint={"მინიმუმ 2 სიმბოლო"}
            />
            <WideInput
              style={validation.employer}
              onChange={employerChangeHandler}
              value={personalData.employer}
              placeHolder={"დამსაქმებელი"}
              name={"Employer"}
              id={"Employer"}
              type={"text"}
              label={"დამსაქმებელი"}
              hint={"მინიმუმ 2 სიმბოლო"}
            />
            <div className={style.StartAndEndDateParrent}>
              <TwinInput
                style={validation.jobStartDate}
                onChange={startDateHandler}
                value={personalData.jobStartDate}
                type="date"
                for={"startDate"}
                id="startDate"
                name="startDate"
                placeHolder={"დამსაქმებელი"}
                hint={false}
                label={"დაწყების რიცხვი"}
              />
              <TwinInput
                style={validation.jobEndDate}
                onChange={endDateHandler}
                value={personalData.jobEndDate}
                type="date"
                for={"endDate"}
                id="endDate"
                name="endDate"
                placeHolder={"დამსაქმებელი"}
                hint={false}
                label={"დამთავრების რიცხვი"}
              />
            </div>
            <AdditionalInformationBox
              onChange={jobDescriptionHandler}
              value={personalData.jobDescription}
              req={true}
              label={"აღწერა"}
              placeholder={"როლი თანამდებობაზე და ზოგადი აღწერა"}
            />
            <div className={style.Border}></div>
            <button className={style.AdditionalExperiance}>
              მეტი გამოცდლიების დამატება
            </button>
            <div className={style.NavButtonsParrent}>
              <button onClick={goBackHandler} className={style.NavButtons}>
                უკან
              </button>
              <button type="submit" className={style.NavButtons}>
                წინ
              </button>
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
          img={personalData.image}
        />
      </div>
    </section>
  );
};
export default Experiance;
