import style from "./FinalPage.module.css";
import FinishedResume from "Components/Resume/FinishedResume";
import { useState, useEffect } from "react";

const FinalPage = () => {
  const [responseData, setResponseData] = useState();

  const [isLocalStorageAvailable, setIsLocalStorageAvailable] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      setIsLocalStorageAvailable(true);
      const storedData = JSON.parse(window.localStorage.getItem("Response"));
      setResponseData(storedData);
    }
  }, []);

  

  return (
    <section className={style.FinalPage}>
      <div className={style.ResumeContainer}>
        {responseData && (
          <FinishedResume
            email={responseData.email}
            number={responseData.phone_number}
            education={responseData.educations}
            experience={responseData.experiences}
            lastName={responseData.surname}
            name={responseData.name}
            img={responseData.image}
            aboutMe={responseData.about_me}
          />
        )}
      </div>
    </section>
  );
};
export default FinalPage;
