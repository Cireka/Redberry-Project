import { Fragment } from "react";
import style from "./Landing.module.css";
import Image from "next/image";
import logo from "../../public/Landing Page Content/LOGO-02 3.png";
import backgroundLogo from "../../public/Landing Page Content/LOGO-40 1.png";
import { useRouter } from "next/router";

const Landing = () => {
  const route = useRouter();
  const AddResumeHandler = () => {
    route.push("/PersonalInformation");
  };
  return (
    <Fragment>
      <section className={style.Landing}>
        <div className={style.LandingContainer}>
          <Image
            quality={100}
            className={style.Logo}
            alt="Redberry Logo"
            src={logo}
          />
          <button onClick={AddResumeHandler} className={style.ResumeButton}>
            რეზიუმეს დამატება
          </button>
          <Image
            className={style.BackgroundLogo}
            quality={100}
            alt="Redberry Logo"
            src={backgroundLogo}
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Landing;
