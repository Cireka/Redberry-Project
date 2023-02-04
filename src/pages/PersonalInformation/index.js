import style from "./PersonalInformation.module.css";
import HeadingParrent from "Components/Landing Page/UI/HeadingParrent";
import { useRouter } from "next/router";

const PersonalInformation = () => {
  const route = useRouter();
  const SubmitHandler = () => {
    route.push("./PersonalInformation/Experiance");
  };
  return (
    <section className={style.PersonalInformation}>
      <div className={style.PersonalInformationContainer}>
        <div className={style.PersonalInfoFormParrent}>
          <HeadingParrent Text={"პირადი ინფო"} Nav={"1/3"} />
          <from className={style.Form}>
            <div className={style.NameAndLastNameParrent}>
              <div className={style.NameInputParrent}>
                <label className={style.Label} for="name">
                  სახელი
                </label>
                <input placeholder="ანზორ" type="text" id="name" name="name" />
                <hint className={style.Hint}>
                  მინიმუმ 2 ასო, ქართული ასოები
                </hint>
              </div>
              <div className={style.NameInputParrent}>
                <label className={style.Label} for="lastName">
                  გვარი
                </label>
                <input
                  placeholder="მუმლაძე"
                  type="text"
                  id="lastName"
                  name="lastName"
                />
                <hint className={style.Hint}>
                  მინიმუმ 2 ასო, ქართული ასოები
                </hint>
              </div>
            </div>
            <div className={style.PhotoUploadParrent}>
              <p>პირადი ფოტოს ატვირთვა</p>
              <button>ატვირთვა</button>
            </div>
            <div className={style.aboutMeParrent}>
              <label>ჩემს შესახებ (არასავალდებულო)</label>
              <input placeholder="ზოგადი ინფო შენს შესახებ" type="text" />
            </div>
            <div className={style.emailParrent}>
              <label className={style.Label} for="email">
                ელ.ფოსტა
              </label>
              <input
                id="email"
                name="email"
                placeholder="anzor666@redberry.ge"
                type="email"
              />
              <hint className={style.Hint}>მინიმუმ 2 ასო, ქართული ასოები</hint>
            </div>
            <div className={style.mobileParrent}>
              <label className={style.Label} for="mobile">
                მობილურის ნომერი
              </label>
              <input
                id="mobile"
                name="mobile"
                placeholder="+995 551 12 34 56"
                type="tel"
              />
              <hint className={style.Hint}>
                უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
              </hint>
            </div>
            <div className={style.submitParrent}>
              <button onClick={SubmitHandler}>შემდეგი</button>
            </div>
          </from>
        </div>
        <div>Resumee</div>
      </div>
    </section>
  );
};

export default PersonalInformation;
