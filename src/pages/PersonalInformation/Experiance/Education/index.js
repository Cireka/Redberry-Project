import HeadingParrent from "Components/UI/HeadingParrent";
import style from "./Education.module.css";
import { useRouter } from "next/router";
import TwinInput from "Components/UI/Twin Inputs/TwinInput";
import WideInput from "Components/UI/WideInput/WideInput";
import AdditionalInformationBox from "Components/UI/AdditionalInformationBox/AdditionalInformationBox";

const Education = () => {
  const router = useRouter();
  const goBackHandler = (event) => {
    event.preventDefault();
    router.back();
  };
  return (
    <section className={style.EducationInformation}>
      <div className={style.EducationIformationContainer}>
        <div className={style.EducationInfoParrent}>
          <HeadingParrent Text={"განათლება"} Nav={"3/3"} />
          <form className={style.Form}>
            <WideInput
              placeHolder={"სასწავლებელი"}
              name={"position"}
              id={"position"}
              for={"position"}
              type={"text"}
              label={"სასწავლებელი"}
              hint={"მინიმუმ 2 სიმბოლო"}
            />

            <div className={style.StartAndEndDateParrent}>
              <TwinInput
                type="text"
                id="Employer"
                name="Employer"
                placeHolder={"არჩიეთ ხარისხი"}
                hint={false}
                label={"ხარისხი"}
              />
              <TwinInput
                type="date"
                id="Employer"
                name="Employer"
                placeholder={"დამსაქმებელი"}
                hint={false}
                label={"დამთავრების რიცხვი"}
              />
            </div>
            <AdditionalInformationBox
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
      </div>
    </section>
  );
};
export default Education;
