import HeadingParrent from "Components/UI/HeadingParrent";
import style from "./Education.module.css";
import { useRouter } from "next/router";
import TwinInput from "Components/UI/Twin Inputs/TwinInput";
import WideInput from "Components/UI/WideInput/WideInput";
import AdditionalInformationBox from "Components/UI/AdditionalInformationBox/AdditionalInformationBox";
import { useState, useEffect } from "react";
import Resume from "Components/Resume/Resume";
import OptionsListInput from "Components/UI/OptionsListInput/OptionsListInput";
import axios from "axios";
import Image from "next/image";
import NavIcon from "../../../../../public/Navigation Icon/NavIcon.png";

const Education = () => {
  const router = useRouter();
  const goBackHandler = (event) => {
    event.preventDefault();
    router.back();
  };

  const [validation, setValidation] = useState({
    institute0: null,
    degree0: null,
    finishDate0: null,
    educationDescription0: null,
  });
  const [response, setResponse] = useState();

  const [inputSets, setInputSets] = useState(0);

  const [isLocalStorageAvailable, setIsLocalStorageAvailable] = useState(false);

  useEffect(() => {
    if (isLocalStorageAvailable) {
      window.localStorage.setItem("Response", JSON.stringify(response));
    }
  }, [isLocalStorageAvailable, response]);
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
    experianceCount: 0,
    educationCount: 0,
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

  useEffect(() => {
    if (isLocalStorageAvailable) {
      window.localStorage.setItem("personalData", JSON.stringify(personalData));
    }
  }, [isLocalStorageAvailable, personalData]);

  const educationDescriptionHandler = (index) => (event) => {
    const updatedEducation = {
      ...personalData.education[index],
      educationDescription: event.target.value,
    };
    const updatedValue = [...personalData.education];
    updatedValue[index] = updatedEducation;

    setPersonalData({ ...personalData, education: updatedValue });
    setInputSets(index);
  };

  const educationDegreeHandler = (index) => (event) => {
    const selectedOptionId =
      event.target.options[event.target.selectedIndex].id;
    const updatedEducation = {
      ...personalData.education[index],
      educationDegree: event.target.value,
      educationId: Number(selectedOptionId),
    };
    const updatedValue = [...personalData.education];
    updatedValue[index] = updatedEducation;
    setPersonalData({ ...personalData, education: updatedValue });
    setInputSets(index);
  };

  const educationInstituteHandler = (index) => (event) => {
    const updatedEducation = {
      ...personalData.education[index],
      educationInstitute: event.target.value,
    };
    const updatedValue = [...personalData.education];
    updatedValue[index] = updatedEducation;
    setPersonalData({ ...personalData, education: updatedValue });
    setInputSets(index);
  };

  const educationEndDateHandler = (index) => (event) => {
    const updatedEducation = {
      ...personalData.education[index],
      educationEndDate: event.target.value,
    };
    const updatedValue = [...personalData.education];
    updatedValue[index] = updatedEducation;
    setPersonalData({ ...personalData, education: updatedValue });
    setInputSets(index);
  };

  useEffect(() => {
    if (isLocalStorageAvailable) {
      window.localStorage.setItem("personalData", JSON.stringify(personalData));
    }
  }, [isLocalStorageAvailable, personalData]);

  useEffect(() => {
    let updatedValidation = { ...validation };

    if (Array.isArray(personalData.education)) {
      personalData.education.forEach((education, index) => {
        if (education.educationDegree?.length >= 2) {
          updatedValidation[`degree${index}`] = true;
        } else if (
          education.educationDegree?.length <= 2 &&
          education.educationDegree !== ""
        ) {
          updatedValidation[`degree${index}`] = false;
        }

        if (education.educationInstitute?.length >= 2) {
          updatedValidation[`institute${index}`] = true;
        } else if (
          education.educationInstitute?.length <= 2 &&
          education.educationInstitute !== ""
        ) {
          updatedValidation[`institute${index}`] = false;
        }
        if (education.educationEndDate?.length > 1) {
          updatedValidation[`finishDate${index}`] = true;
        } else if (education.educationEndDate?.length < 1) {
          updatedValidation[`finishDate${index}`] = false;
        }
        if (education.educationDescription?.length > 1) {
          updatedValidation[`educationDescription${index}`] = true;
        } else if (education.educationDescription?.length < 1) {
          updatedValidation[`educationDescription${index}`] = false;
        }
      });
    }

    setValidation(updatedValidation);
  }, [personalData]);

  const handleClick = (event) => {
    event.preventDefault();
    setInputSets((prevInputSets) => {
      let updatedValidation = Object.assign({}, validation, {
        [`institute${prevInputSets + 1}`]: null,
        [`degree${prevInputSets + 1}`]: null,
        [`finishDate${prevInputSets + 1}`]: null,
        [`educationDescription${prevInputSets + 1}`]: null,
      });
      let updatedPersonalData = {
        ...personalData,
        education: [
          ...personalData.education,
          {
            educationDegree: "",
            educationDescription: "",
            educationEndDate: "",
            educationInstitute: "",
          },
        ],
        educationCount: personalData.educationCount + 1,
      };
      setValidation(updatedValidation);
      setPersonalData(updatedPersonalData);

      return prevInputSets + 1;
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    let updatedValidation = { ...validation };

    personalData.education.forEach((education, index) => {
      if (!education.educationDegree) {
        updatedValidation[`degree${index}`] = undefined;
      }

      if (!education.educationDescription) {
        updatedValidation[`educationDescription${index}`] = undefined;
      }
      if (!education.educationEndDate) {
        updatedValidation[`finishDate${index}`] = undefined;
      }

      if (!education.educationInstitute) {
        updatedValidation[`institute${index}`] = undefined;
      }
    });

    setValidation(updatedValidation);
    if (Array.isArray(personalData.education)) {
      let allValid = true;
      personalData.education.forEach((job, index) => {
        if (
          !job.educationDegree ||
          !job.educationDescription ||
          !job.educationEndDate ||
          !job.educationInstitute
        ) {
          allValid = false;
        }
      });
      if (allValid) {
        {
          const storedData = JSON.parse(
            window.localStorage.getItem("personalData")
          );
          const image = storedData.image;
          const base64Image = image;
          const type = base64Image.split(";")[0].split(":")[1];
          const binaryData = Buffer.from(base64Image.split(",")[1], "base64");
          const imageBlob = new Blob([binaryData], { type });
          const imageFile = new File([imageBlob], "profile photo", {
            type: "image/png",
          });

          console.log(personalData.education);

          let data = {
            name: personalData.name,
            surname: personalData.lastName,
            email: personalData.email,
            phone_number: personalData.number.split(" ").join(""),
            experiences: [],
            educations: [],
            image: imageFile,
            about_me: personalData.aboutMe,
          };

          if (personalData.job) {
            personalData.job.forEach((job) => {
              data.experiences.push({
                position: job.jobPosition,
                employer: job.employer,
                start_date: job.jobStartDate,
                due_date: job.jobEndDate,
                description: job.jobDescription,
              });
            });
          }

          if (personalData.education) {
            personalData.education.forEach((education) => {
              data.educations.push({
                institute: education.educationInstitute,
                degree_id: education.educationId,
                due_date: education.educationEndDate,
                description: education.educationDescription,
              });
            });
          }

          axios
            .post("https://resume.redberryinternship.ge/api/cvs", data, {
              headers: { "Content-Type": "multipart/form-data" },
            })
            .then((res) => {
              setResponse(res.data);
              console.log(res.data);
            })
            .catch((err) => {
              console.error(err);
            });
        }
      }
    }
  };

  const NavIconClickHandler = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <section className={style.EducationInformation}>
      <div className={style.EducationIformationContainer}>
        <div className={style.EducationInfoParrent}>
          <Image
            onClick={NavIconClickHandler}
            className={style.navIcon}
            alt="Navigation Icon"
            src={NavIcon}
          />
          <HeadingParrent Text={"განათლება"} Nav={"3/3"} />
          <form onSubmit={formSubmitHandler} className={style.Form}>
            {Array(personalData.educationCount)
              .fill()
              .map((_, i) => (
                <div className={style.Form} key={i}>
                  <WideInput
                    style={validation[`institute${i}`]}
                    onChange={educationInstituteHandler(i)}
                    value={personalData.education[i]?.educationInstitute}
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
                      style={validation[`degree${i}`]}
                      onChange={educationDegreeHandler(i)}
                      value={personalData.education[i]?.educationDegree}
                      type="text"
                      id="Degree"
                      name="Degree"
                      placeHolder={"არჩიეთ ხარისხი"}
                      hint={false}
                      label={"ხარისხი"}
                    />
                    <TwinInput
                      style={validation[`finishDate${i}`]}
                      onChange={educationEndDateHandler(i)}
                      value={personalData.education[i]?.educationEndDate}
                      type="date"
                      id="EducationEndDate"
                      name="EducationEndDate"
                      placeholder={"დამსაქმებელი"}
                      hint={false}
                      label={"დამთავრების რიცხვი"}
                    />
                  </div>
                  <AdditionalInformationBox
                    style={validation[`educationDescription${i}`]}
                    onChange={educationDescriptionHandler(i)}
                    value={personalData.education[i]?.educationDescription}
                    label={"აღწერა"}
                    placeholder={"განათლების აღწერა"}
                    req={true}
                  />
                  <div className={style.Border}></div>
                </div>
              ))}
            <button
              onClick={handleClick}
              className={style.AdditionalExperiance}
            >
              მეტი სასწავლებლის დამატება
            </button>
            <div className={style.NavButtonsParrent}>
              <button onClick={goBackHandler} className={style.NavButtons}>
                უკან
              </button>
              <button type="submit" className={style.NavButtons}>
                დასრულება
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
          education={personalData.education}
          img={personalData.image}
        />
      </div>
    </section>
  );
};
export default Education;
