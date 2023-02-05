import HeadingParrent from "Components/Landing Page/UI/HeadingParrent";
import style from "./Education.module.css";
import { useRouter } from "next/router";

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
            <div className={style.InstituteParrent}>
              <label className={style.Label} for="position">
                სასწავლებელი
              </label>
              <input
                placeholder="სასწავლებელი"
                type="text"
                id="position"
                name="position"
              />
              <hint className={style.Hint}>მინიმუმ 2 სიმბოლო</hint>
            </div>
            <div className={style.StartAndEndDateParrent}>
              <div className={style.TwinInputParrents}>
                <label className={style.Label} for="Employer">
                  ხარისხი
                </label>
                <input
                  placeholder="არჩიეთ ხარისხი"
                  type="text"
                  id="Employer"
                  name="Employer"
                />
              </div>
              <div className={style.TwinInputParrents}>
                <label className={style.Label} for="Employer">
                  დამთავრების რიცხვი
                </label>
                <input
                  placeholder="დამსაქმებელი"
                  type="date"
                  id="Employer"
                  name="Employer"
                />
              </div>
            </div>
            <div className={style.DecsriptionParrent}>
              <label className={style.Label} for="Employer">
                აღწერა
              </label>
              <input
                placeholder="განათლების აღწერა"
                type="text"
                id="Employer"
                name="Employer"
              />
            </div>
            <div className={style.Border}></div>
            <button className={style.AdditionalExperiance}>
              მეტი გამოცდლიების დამატება
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
