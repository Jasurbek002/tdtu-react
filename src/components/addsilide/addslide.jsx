import React, { useRef, useState } from "react";
import styles from "./silide.module.scss";
import { images } from "../../assets/index.js";
import { SubmitButton } from "../Ui";
import { useDispatch } from "react-redux";
import { post } from "../../store/actions/postServce";

// carusel add post
const Addslide = () => {
  const dispatch = useDispatch();
  const [url, setUrl] = useState(images.fileupload);
  const bannerRef = useRef();
  const titleUzRef = useRef();
  const titleEnRef = useRef();
  const textUzRef = useRef();
  const textEnRef = useRef();
  const setData = async () => {
    if (
      bannerRef.current.value !== "" &&
      titleUzRef.current.value !== "" &&
      titleEnRef.current.value !== "" &&
      textUzRef.current.value !== "" &&
      textEnRef.current.value !== ""
    ) {
      const formData = new FormData();
      formData.append(
        "banner",
        bannerRef.current.files[0],
        bannerRef.current.files.type
      );
      formData.append("titleuz", titleUzRef.current.value);
      formData.append("titleen", titleEnRef.current.value);
      formData.append("textuz", textUzRef.current.value);
      formData.append("texten", textEnRef.current.value);
      dispatch(post({ pathname: "/banners/post", data: formData }));
      setTimeout((el) => {
        window.location.replace("/carusel");
      }, 4000);
    } else {
      console.log("malumotlarni kiritish majbury");
    }
  };

  const back = () => {
    window.history.back();
  };

  return (
    <div className={styles.silide}>
      <div className="flex w-full justify-around">
        <button
          className="bg-white text-grenn py-1 px-4 rounded-sm"
          onClick={back}
        >
          {" "}
          back
        </button>
        <h1 className="text-white text-2xl font-bold uppercase">
          for bunner add
        </h1>
      </div>
      <div className={styles.silide__addfile}>
        <p className="text-white">Bunner Image</p>
        <input
          accept="image/*"
          ref={bannerRef}
          onChange={(e) => setUrl(e.target.files[0])}
          type="file"
        />
        <img
          src={url !== images.fileupload ? URL.createObjectURL(url) : url}
          alt="image"
        />
      </div>
      <form action="#" className={styles.silide__form}>
        <label htmlFor="titleuz">
          title uz: <br />
          <textarea
            ref={titleUzRef}
            placeholder="Title uz"
            name="titleuz"
            id="1"
            cols="45"
            rows="10"
          ></textarea>
        </label>
        <label htmlFor="titleen">
          title en: <br />
          <textarea
            ref={titleEnRef}
            placeholder="Title en"
            name="titleuz"
            id="1"
            cols="45"
            rows="10"
          ></textarea>
        </label>
        <label htmlFor="textuz">
          text uz: <br />
          <textarea
            ref={textUzRef}
            placeholder="Text uz"
            name="textuz"
            id="1"
            cols="45"
            rows="10"
          ></textarea>
        </label>
        <label htmlFor="texten">
          text en: <br />
          <textarea
            ref={textEnRef}
            required
            placeholder="Text en"
            name="titleuz"
            id="1"
            cols="45"
            rows="10"
          ></textarea>
        </label>
      </form>
      <SubmitButton onClick={setData} className="buttons" />
    </div>
  );
};

export default Addslide;
