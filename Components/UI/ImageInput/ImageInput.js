import style from "./ImageInput.module.css";
import correctVector from "../../../public/Input Icons/Vector.png";
import wrongInputIcon from "../../../public/Input Icons/wrongInput.png";
import Image from "next/image";

const ImageInput = (props) => {
  return (
    <div className={style.PhotoUploadParrent}>
      <p>პირადი ფოტოს ატვირთვა</p>
      <input
        onChange={props.uploadHandler}
        id="file"
        type="file"
        accept="image/*"
      />
      <label htmlFor="file">ატვირთვა</label>
      {props.style === true && (
        <Image alt="Correct Input" src={correctVector} />
      )}
      {props.style === false && <Image alt="Wrong Iput" src={wrongInputIcon} />}
    </div>
  );
};
export default ImageInput;
