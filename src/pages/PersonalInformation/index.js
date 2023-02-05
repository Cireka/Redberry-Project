import style from "./PersonalInformation.module.css";
import HeadingParrent from "Components/Landing Page/UI/HeadingParrent";
import { useRouter } from "next/router";
import TwinInput from "Components/Landing Page/UI/Twin Inputs/TwinInput";
import WideInput from "Components/Landing Page/UI/WideInput/WideInput";
import AdditionalInformationBox from "Components/Landing Page/UI/AdditionalInformationBox/AdditionalInformationBox";

const PersonalInformation = () => {
  const router = useRouter();

  const SubmitHandler = (event) => {
    event.preventDefault();
    router.push("/PersonalInformation/Experiance");
  };
  return (
    <section className={style.PersonalInformation}>
      <div className={style.PersonalInformationContainer}>
        <div className={style.PersonalInfoFormParrent}>
          <HeadingParrent Text={"პირადი ინფო"} Nav={"1/3"} />
          <from className={style.Form}>
            <div className={style.NameAndLastNameParrent}>
              <TwinInput
                type="text"
                id="Name"
                name="Name"
                placeHolder={"ანზორ"}
                hint={true}
                customHint={"მინიმუმ 2 ასო, ქართული ასოები"}
                label={"სახელი"}
              />
              <TwinInput
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
