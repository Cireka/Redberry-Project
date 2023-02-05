import style from "./PersonalInformation.module.css";
import React from "react";
import HeadingParrent from "Components/UI/HeadingParrent";
import { useRouter } from "next/router";
import TwinInput from "Components/UI/Twin Inputs/TwinInput";
import WideInput from "Components/UI/WideInput/WideInput";
import AdditionalInformationBox from "Components/UI/AdditionalInformationBox/AdditionalInformationBox";
import { useState, useEffect } from "react";
import Resume from "Components/Resume/Resume";

const PersonalInformation = () => {
  const router = useRouter();
  const SubmitHandler = (event) => {
    event.preventDefault();
    router.push("/PersonalInformation/Experiance");
  };
  const [isLocalStorageAvailable, setIsLocalStorageAvailable] = useState(false);
  const [personalData, setPersonalData] = useState({ name: "", lastName: "" });

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      setIsLocalStorageAvailable(true);
      const storedData = JSON.parse(
        window.localStorage.getItem("personalData")
      ) || { name: "", lastName: "" };
      setPersonalData(storedData);
    }
  }, []);

  useEffect(() => {
    if (isLocalStorageAvailable) {
      window.localStorage.setItem("personalData", JSON.stringify(personalData));
    }
  }, [isLocalStorageAvailable, personalData]);

  const nameChangeHandler = (event) => {
    setPersonalData({ ...personalData, name: event.target.value });
  };

  const lastNameChangeHandler = (event) => {
    setPersonalData({ ...personalData, lastName: event.target.value });
  };
  return (
    <section className={style.PersonalInformation}>
      <div className={style.PersonalInformationContainer}>
        <div className={style.PersonalInfoFormParrent}>
          <HeadingParrent Text={"პირადი ინფო"} Nav={"1/3"} />
          <form onSubmit={SubmitHandler} className={style.Form}>
            <div className={style.NameAndLastNameParrent}>
              <TwinInput
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
            <div className={style.PhotoUploadParrent}>
              <p>პირადი ფოტოს ატვირთვა</p>
              <button>ატვირთვა</button>
            </div>
            <AdditionalInformationBox
              label={"ჩემს შესახებ"}
              placeholder={"ზოგადი ინფო შენს შესახებ"}
              req={false}
            />
            <WideInput
              placeHolder={"anzor666@redberry.ge"}
              name={"email"}
              id={"email"}
              type={"email"}
              label={"ელ.ფოსტა"}
              hint={"მინიმუმ 2 ასო, ქართული ასოები"}
            />
            <WideInput
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
          aboutMe={personalData.aboutMe}
          lastName={personalData.lastName}
          name={personalData.name}
        />
      </div>
    </section>
  );
};

export default PersonalInformation;
