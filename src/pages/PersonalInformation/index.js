import style from "./PersonalInformation.module.css";
import React from "react";
import HeadingParrent from "Components/UI/HeadingParrent";
import { useRouter } from "next/router";
import TwinInput from "Components/UI/Twin Inputs/TwinInput";
import WideInput from "Components/UI/WideInput/WideInput";
import AdditionalInformationBox from "Components/UI/AdditionalInformationBox/AdditionalInformationBox";
import { useState, useEffect } from "react";
import Resume from "Components/Resume/Resume";
import MobileNumberInput from "Components/UI/MobileNumberINput/MobileNumberInput";
import ImageInput from "Components/UI/ImageInput/ImageInput";
import Image from "next/image";
import NavIcon from "../../../public/Navigation Icon/NavIcon.png";

const PersonalInformation = () => {
  const router = useRouter(null);

  const [validation, setValidation] = useState({
    name: null,
    lastName: null,
    mobileNumer: null,
    emailAddres: null,
    aboutMe: null,
    image: null,
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
    education: "",
    educationDegree: "",
    EducationDate: "",
    EducationIndex: "",
    EducationDescription: "",
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
        job: "",
        image: "",
        employer: "",
        jobStartDate: "",
        jobEndDate: "",
        jobDescription: "",
        education: "",
        educationDegree: "",
        EducationDate: "",
        EducationIndex: "",
        EducationDescription: "",
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

  function isGeorgian(str) {
    const georgianRange = /^[\u10A0-\u10FF]+$/;
    return georgianRange.test(str);
  }

  const nameChangeHandler = (event) => {
    setPersonalData({ ...personalData, name: event.target.value });
  };

  const lastNameChangeHandler = (event) => {
    setPersonalData({ ...personalData, lastName: event.target.value });
  };

  const descriptionChangeHandler = (event) => {
    setPersonalData({ ...personalData, aboutMe: event.target.value });
  };
  const emailChangeHandler = (event) => {
    setPersonalData({ ...personalData, email: event.target.value });
  };
  const numberChangeHandler = (event) => {
    setPersonalData({ ...personalData, number: event.target.value });
  };

  const uploadHandler = (event) => {
    let updatedValidation = { ...validation };
    const file = event.target.files[0];
    const imageBlob = new Blob([file], { type: file.type });
    const reader = new FileReader();

    reader.readAsDataURL(imageBlob);
    reader.onloadend = () => {
      setPersonalData({ ...personalData, image: reader.result });
    };

    if (updatedValidation.image === false) {
      updatedValidation.image = true;
    }
    setValidation(updatedValidation);
  };

  // setPersonalData({ ...personalData, imageToSend: event.target.files[0] });

  useEffect(() => {
    let updatedValidation = { ...validation };

    if (isGeorgian(personalData.name) && personalData.name.length >= 2) {
      updatedValidation.name = true;
    } else if (
      isGeorgian(personalData.name) !== true &&
      personalData.name.length <= 2 &&
      personalData.name !== ""
    ) {
      updatedValidation.name = false;
    }
    if (
      isGeorgian(personalData.lastName) &&
      personalData.lastName.length >= 2
    ) {
      updatedValidation.lastName = true;
    } else if (
      isGeorgian(personalData.lastName) !== true &&
      personalData.lastName.length <= 2 &&
      personalData.lastName !== ""
    ) {
      updatedValidation.lastName = false;
    }

    if (
      personalData.number.length === 17 &&
      personalData.number.substring(0, 4) === "+995"
    ) {
      updatedValidation.mobileNumer = true;
    } else if (
      personalData.number.length !== 17 &&
      personalData.number !== ""
    ) {
      updatedValidation.mobileNumer = false;
    }

    if (personalData.email.endsWith("@redberry.ge")) {
      updatedValidation.emailAddres = true;
    } else if (
      personalData.email.endsWith("@redberry.ge") !== true &&
      personalData.email !== ""
    ) {
      updatedValidation.emailAddres = false;
    }
    setValidation(updatedValidation);
  }, [personalData]);

  const SubmitHandler = (event) => {
    event.preventDefault();
    let updatedValidation = { ...validation };

    if (personalData.name === "") {
      updatedValidation.name = undefined;
    }
    if (personalData.lastName === "") {
      updatedValidation.lastName = undefined;
    }

    if (personalData.number === "") {
      updatedValidation.mobileNumer = undefined;
    }

    if (personalData.email === "") {
      updatedValidation.emailAddres = undefined;
    }
    if (personalData.image.length === 0) {
      updatedValidation.image = false;
    }
    setValidation(updatedValidation);

    if (
      personalData.image.length > 0 &&
      validation.name &&
      validation.lastName &&
      validation.mobileNumer &&
      validation.emailAddres
    ) {
      router.push("/PersonalInformation/Experiance");
    }
  };

  const NavIconClickHandler = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <section className={style.PersonalInformation}>
      <div className={style.PersonalInformationContainer}>
        <div className={style.PersonalInfoFormParrent}>
          <Image
            onClick={NavIconClickHandler}
            className={style.navIcon}
            alt="Navigation Icon"
            src={NavIcon}
          />
          <HeadingParrent Text={"პირადი ინფო"} Nav={"1/3"} />
          <form onSubmit={SubmitHandler} className={style.Form}>
            <div className={style.NameAndLastNameParrent}>
              <TwinInput
                style={validation.name}
                value={personalData.name}
                onChange={nameChangeHandler}
                Req={true}
                type="text"
                id="Name"
                name="Name"
                placeHolder={"ანზორ"}
                hint={true}
                customHint={"მინიმუმ 2 ასო, ქართული ასოები"}
                label={"სახელი"}
              />
              <TwinInput
                style={validation.lastName}
                value={personalData.lastName}
                onChange={lastNameChangeHandler}
                Req={true}
                type="text"
                id="LastName"
                name="LastName"
                placeHolder={"მუმლაძე"}
                hint={true}
                customHint={"მინიმუმ 2 ასო, ქართული ასოები"}
                label={"გვარი"}
              />
            </div>
            <ImageInput
              uploadHandler={uploadHandler}
              style={validation.image}
            />
            <AdditionalInformationBox
              style={validation.aboutMe}
              onChange={descriptionChangeHandler}
              value={personalData.aboutMe}
              label={"ჩემს შესახებ"}
              placeholder={"ზოგადი ინფო შენს შესახებ"}
              req={false}
            />
            <WideInput
              style={validation.emailAddres}
              onChange={emailChangeHandler}
              value={personalData.email}
              placeHolder={"anzor666@redberry.ge"}
              name={"email"}
              id={"email"}
              type={"email"}
              label={"ელ.ფოსტა"}
              hint={"მინიმუმ 2 ასო, ქართული ასოები"}
            />
            <MobileNumberInput
              style={validation.mobileNumer}
              onChange={numberChangeHandler}
              value={personalData.number}
              placeHolder={"+995 551 12 34 56"}
              name={"mobile"}
              id={"mobile"}
              type={"mobile"}
              label={"მობილურის ნომერი"}
              hint={"უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"}
            />
            <div className={style.submitParrent}>
              <button type="submit">შემდეგი</button>
            </div>
          </form>
        </div>
        <Resume
          img={personalData.image}
          email={personalData.email}
          number={personalData.number}
          aboutMe={personalData.aboutMe}
          lastName={personalData.lastName}
          name={personalData.name}
        />
      </div>
    </section>
  );
};

export default PersonalInformation;
