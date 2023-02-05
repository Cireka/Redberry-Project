import HeadingParrent from "Components/UI/HeadingParrent";
import style from "./Experiance.module.css";
import { useRouter } from "next/router";
import TwinInput from "Components/UI/Twin Inputs/TwinInput";
import WideInput from "Components/UI/WideInput/WideInput";
import AdditionalInformationBox from "Components/UI/AdditionalInformationBox/AdditionalInformationBox";

const Experiance = () => {
  const router = useRouter();
  const goBackHandler = (event) => {
    event.preventDefault();
    router.back();
  };
  const goBackForwardsHandler = (event) => {
    event.preventDefault();
    router.push("/PersonalInformation/Experiance/Education");
  };

  return (
    <section className={style.ExperianceIformation}>
      <div className={style.ExperianceIformationContainer}>
        <div className={style.ExperianceInfoParrent}>
          <HeadingParrent Text={"გამოცდილება"} Nav={"2/3"} />
          <form className={style.Form}>
            <WideInput
              placeHolder={"დეველოპერი, დიზაინერ, ა.შ."}
              name={"position"}
              id={"position"}
              type={"text"}
              label={"თანამდებობა"}
              hint={"მინიმუმ 2 სიმბოლო"}
            />
            <WideInput
              placeHolder={"დამსაქმებელი"}
              name={"Employer"}
              id={"Employer"}
              type={"text"}
              label={"დამსაქმებელი"}
              hint={"მინიმუმ 2 სიმბოლო"}
            />
            <div className={style.StartAndEndDateParrent}>
              <TwinInput
                type="date"
                id="Employer"
                name="Employer"
                placeHolder={"დამსაქმებელი"}
                hint={false}
                label={"დაწყების რიცხვი"}
              />
              <TwinInput
                type="date"
                id="Employer"
                name="Employer"
                placeHolder={"დამსაქმებელი"}
                hint={false}
                label={"დამთავრების რიცხვი"}
              />
            </div>
            <AdditionalInformationBox
              label={"აღწერა"}
              placeholder={"როლი თანამდებობაზე და ზოგადი აღწერა"}
              req={true}
            />
            <div className={style.Border}></div>
            <button className={style.AdditionalExperiance}>
              მეტი გამოცდლიების დამატება
            </button>
            <div className={style.NavButtonsParrent}>
              <button onClick={goBackHandler} className={style.NavButtons}>
                უკან
              </button>
              <button
                onClick={goBackForwardsHandler}
                className={style.NavButtons}
              >
                წინ
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Experiance;
