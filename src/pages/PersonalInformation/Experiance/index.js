import HeadingParrent from "Components/UI/HeadingParrent";
import style from "./Experiance.module.css";
import { useRouter } from "next/router";
import TwinInput from "Components/UI/Twin Inputs/TwinInput";
import WideInput from "Components/UI/WideInput/WideInput";
import AdditionalInformationBox from "Components/UI/AdditionalInformationBox/AdditionalInformationBox";
import Resume from "Components/Resume/Resume";
import { useState, useEffect } from "react";
import Image from "next/image";
import NavIcon from "../../../../public/Navigation Icon/NavIcon.png";

const Experiance = () => {
  const router = useRouter();
  const goBackHandler = (event) => {
    event.preventDefault();
    router.back();
  };
  const [validation, setValidation] = useState({
    job0: null,
    employer0: null,
    jobStartDate0: null,
    jobEndDate0: null,
    jobDescription0: null,
  });

  const [inputSets, setInputSets] = useState(0);

  const [isLocalStorageAvailable, setIsLocalStorageAvailable] = useState(false);
  const [personalData, setPersonalData] = useState({
    name: "",
    lastName: "",
    aboutMe: "",
    email: "",
    number: "",
    job: [{}],
    image: [],
    employer: "",
    education: [{}],
    imageToSend: "",
    experianceCount: 1,
    educationCount: 1,
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
        job: [{}],
        image: [],
        employer: "",
        education: [{}],
        imageToSend: "",
        experianceCount: 1,
        educationCount: 1,
      };
      setPersonalData(storedData);
    }
  }, []);

  const jobChangeHandler = (index) => (event) => {
    const updatedJob = {
      ...personalData.job[index],
      jobPosition: event.target.value,
    };
    const updatedJobs = [...personalData.job];
    updatedJobs[index] = updatedJob;

    setPersonalData({ ...personalData, job: updatedJobs });
    setInputSets(index);
  };

  const employerChangeHandler = (index) => (event) => {
    const updatedJob = {
      ...personalData.job[index],
      employer: event.target.value,
    };
    const updatedJobs = [...personalData.job];
    updatedJobs[index] = updatedJob;
    setPersonalData({ ...personalData, job: updatedJobs });
    setInputSets(index);
  };

  const startDateHandler = (index) => (event) => {
    const updatedJob = {
      ...personalData.job[index],
      jobStartDate: event.target.value,
    };
    const updatedJobs = [...personalData.job];
    updatedJobs[index] = updatedJob;
    setPersonalData({ ...personalData, job: updatedJobs });
    setInputSets(index);
  };

  const endDateHandler = (index) => (event) => {
    const updatedJob = {
      ...personalData.job[index],
      jobEndDate: event.target.value,
    };
    const updatedJobs = [...personalData.job];
    updatedJobs[index] = updatedJob;
    setPersonalData({ ...personalData, job: updatedJobs });
    setInputSets(index);
  };

  const jobDescriptionHandler = (index) => (event) => {
    const updatedJob = {
      ...personalData.job[index],
      jobDescription: event.target.value,
    };
    const updatedJobs = [...personalData.job];
    updatedJobs[index] = updatedJob;
    setPersonalData({ ...personalData, job: updatedJobs });
    setInputSets(index);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    let updatedValidation = { ...validation };

    personalData.job.forEach((job, index) => {
      if (!job.jobDescription) {
        updatedValidation[`jobDescription${index}`] = undefined;
      }

      if (!job.jobPosition) {
        updatedValidation[`job${index}`] = undefined;
      }
      if (!job.employer) {
        updatedValidation[`employer${index}`] = undefined;
      }

      if (!job.jobStartDate) {
        updatedValidation[`jobStartDate${index}`] = undefined;
      }

      if (!job.jobEndDate) {
        updatedValidation[`jobEndDate${index}`] = undefined;
      }
    });

    setValidation(updatedValidation);

    event.preventDefault();
    if (Array.isArray(personalData.job)) {
      let allValid = true;
      personalData.job.forEach((job, index) => {
        if (
          !job.jobPosition ||
          !job.employer ||
          !job.jobStartDate ||
          !job.jobEndDate ||
          !job.jobDescription
        ) {
          allValid = false;
        }
      });
      if (allValid) {
        router.push("/PersonalInformation/Experiance/Education");
      }
    }
  };

  useEffect(() => {
    if (isLocalStorageAvailable) {
      window.localStorage.setItem("personalData", JSON.stringify(personalData));
    }
  }, [isLocalStorageAvailable, personalData]);


  useEffect(() => {
    let updatedValidation = { ...validation };

    if (Array.isArray(personalData.job)) {
      personalData.job.forEach((job, index) => {
        if (job.jobPosition?.length >= 2) {
          updatedValidation[`job${index}`] = true;
        } else if (job.jobPosition?.length <= 2 && job.jobPosition !== "") {
          updatedValidation[`job${index}`] = false;
        }

        if (job.employer?.length >= 2) {
          updatedValidation[`employer${index}`] = true;
        } else if (job.employer?.length <= 2 && job.employer !== "") {
          updatedValidation[`employer${index}`] = false;
        }
        if (job.jobStartDate?.length > 1) {
          updatedValidation[`jobStartDate${index}`] = true;
        } else if (job.jobStartDate?.length < 1) {
          updatedValidation[`jobStartDate${index}`] = false;
        }
        if (job.jobEndDate?.length > 1) {
          updatedValidation[`jobEndDate${index}`] = true;
        } else if (job.jobEndDate?.length < 1) {
          updatedValidation[`jobEndDate${index}`] = false;
        }

        if (job.jobDescription?.length > 1) {
          updatedValidation[`jobDescription${index}`] = true;
        } else if (job.jobDescription?.length < 1) {
          updatedValidation[`jobDescription${index}`] = false;
        }
      });
    }

    setValidation(updatedValidation);
  }, [personalData]);

  const handleClick = (event) => {
    event.preventDefault();
    setInputSets((prevInputSets) => {
      let updatedValidation = Object.assign({}, validation, {
        [`job${prevInputSets + 1}`]: null,
        [`employer${prevInputSets + 1}`]: null,
        [`jobStartDate${prevInputSets + 1}`]: null,
        [`jobEndDate${prevInputSets + 1}`]: null,
        [`jobDescription${prevInputSets + 1}`]: null,
      });
      let updatedPersonalData = {
        ...personalData,
        job: [
          ...personalData.job,
          {
            jobPosition: "",
            employer: "",
            jobStartDate: "",
            jobEndDate: "",
            jobDescription: "",
          },
        ],
        experianceCount: personalData.experianceCount + 1,
      };
      setValidation(updatedValidation);
      setPersonalData(updatedPersonalData);

      return prevInputSets + 1;
    });
  };
  const NavIconClickHandler = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <section className={style.ExperianceIformation}>
      <div className={style.ExperianceIformationContainer}>
        <div className={style.ExperianceInfoParrent}>
          <Image
            onClick={NavIconClickHandler}
            className={style.navIcon}
            alt="Navigation Icon"
            src={NavIcon}
          />
          <HeadingParrent Text={"გამოცდილება"} Nav={"2/3"} />
          <form onSubmit={submitHandler}>
            {Array(personalData.experianceCount)
              .fill()
              .map((_, i) => (
                <div className={style.Form} key={i}>
                  <WideInput
                    style={validation[`job${i}`]}
                    onChange={jobChangeHandler(i)}
                    value={personalData.job[i]?.jobPosition}
                    placeHolder={"დეველოპერი, დიზაინერ, ა.შ."}
                    name={"position"}
                    id={"position"}
                    type={"text"}
                    label={"თანამდებობა"}
                    hint={"მინიმუმ 2 სიმბოლო"}
                  />
                  <WideInput
                    style={validation[`employer${i}`]}
                    onChange={employerChangeHandler(i)}
                    value={personalData.job[i]?.employer}
                    placeHolder={"დამსაქმებელი"}
                    name={"Employer"}
                    id={"Employer"}
                    type={"text"}
                    label={"დამსაქმებელი"}
                    hint={"მინიმუმ 2 სიმბოლო"}
                  />
                  <div className={style.StartAndEndDateParrent}>
                    <TwinInput
                      style={validation[`jobStartDate${i}`]}
                      onChange={startDateHandler(i)}
                      value={personalData.job[i]?.jobStartDate}
                      type="date"
                      for={"startDate"}
                      id="startDate"
                      name="startDate"
                      placeHolder={"დამსაქმებელი"}
                      hint={false}
                      label={"დაწყების რიცხვი"}
                    />
                    <TwinInput
                      style={validation[`jobEndDate${i}`]}
                      onChange={endDateHandler(i)}
                      value={personalData.job[i]?.jobEndDate}
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
                    onChange={jobDescriptionHandler(i)}
                    value={personalData.job[i]?.jobDescription}
                    style={validation[`jobDescription${i}`]}
                    req={true}
                    label={"აღწერა"}
                    placeholder={"როლი თანამდებობაზე და ზოგადი აღწერა"}
                  />
                  <div className={style.Border}></div>
                </div>
              ))}

            <button
              onClick={handleClick}
              className={style.AdditionalExperiance}
            >
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
          experiance={personalData.job}
          img={personalData.image}
        />
      </div>
    </section>
  );
};
export default Experiance;
