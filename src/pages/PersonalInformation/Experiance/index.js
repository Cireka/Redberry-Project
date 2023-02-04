import HeadingParrent from "Components/Landing Page/UI/HeadingParrent";
import style from "./Experiance.module.css";
const Experiance = () => {
  return (
    <section className={style.PersonalInformation}>
      <div className={style.PersonalInformationContainer}>
        <div className={style.PersonalInfoFormParrent}>
          <HeadingParrent Text={"გამოცდილება"} Nav={"2/3"} />
          <form className={style.Form}>
            <div className={style.PositionParrent}>
              <label className={style.Label} for="position">
                თანამდებობა
              </label>
              <input
                placeholder="დეველოპერი, დიზაინერ, ა.შ."
                type="text"
                id="position"
                name="position"
              />
              <hint className={style.Hint}>მინიმუმ 2 სიმბოლო</hint>
            </div>
            <div className={style.EmployerParrent}>
              <label className={style.Label} for="Employer">
                დამსაქმებელი
              </label>
              <input
                placeholder="დამსაქმებელი"
                type="text"
                id="Employer"
                name="Employer"
              />
              <hint className={style.Hint}>მინიმუმ 2 სიმბოლო</hint>
            </div>
            <div className={style.StartAndEndDateParrent}>
              <div className={style.TwinInputParrents}>
                <label className={style.Label} for="Employer">
                  დაწყების რიცხვი
                </label>
                <input
                  placeholder="დამსაქმებელი"
                  type="date"
                  id="Employer"
                  name="Employer"
                />
                <hint className={style.Hint}>მინიმუმ 2 სიმბოლო</hint>
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
                <hint className={style.Hint}>მინიმუმ 2 სიმბოლო</hint>
              </div>
            </div>
            <div className={style.DecsriptionParrent}>
              <label className={style.Label} for="Employer">
                აღწერა
              </label>
              <input
                placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
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
              <button className={style.NavButtons}>უკან</button>
              <button className={style.NavButtons}>წინ</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Experiance;
