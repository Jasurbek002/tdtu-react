import React, { useState } from "react";
import { Label, Textarea, Form, SubmitButton, Input } from "../../Ui";
import { images } from "../../../assets/index";
import { newsdetels } from "../../../constants/detels";
import { formData } from "../../../utils/FormData";
import { post } from "../../../store/actions/postServce";
import { useDispatch } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();
  const [formDetels, setFormDetels] = useState(newsdetels);
  const onFormUpdate = (key, value) => {
    setFormDetels({
      ...formDetels,
      [key]: value,
    });
  };
  const onSubmit = () => {
    const formdata = formData(formDetels);
    dispatch(post({ pathname: "news/add", data: formdata }));
    window.history.back();
  };
  const back = () => {
    window.history.back();
  };
  return (
    <div className="w-full flex items-center flex-col bg-blue py-10">
      <div className="flex w-10/12 justify-between">
        <button
          onClick={back}
          className="bg-white text-grenn py-1 px-4 rounded-sm"
        >
          {" "}
          back
        </button>
        <h1 className="text-white text-2xl font-bold uppercase">
          for news add
        </h1>
      </div>
      <div className="w-10/12 flex items-center p-5 bg-white rounded-lg shadow-xl my-10">
        <div className="w-[250px] h-[200px] relative">
          <img
            src={
              !formDetels.newsImage == ""
                ? images.fileupload
                : URL.createObjectURL(formDetels.newsImage)
            }
            className="border-2 border-blue rounded-xl"
            alt="upload"
          />
          <input
            onChange={(e) => onFormUpdate("newsImg", e.target.files[0])}
            className="w-full h-full absolute bg-blue top-0 cursor-pointer rounded-md opacity-0"
            type="file"
          />
        </div>
      </div>
      <Form styles={true}>
        <Label>
          <Textarea
            onChange={(e) => onFormUpdate("titleuz", e.target.value)}
            placeholder="title uz"
          />
        </Label>
        <Label>
          <Textarea
            onChange={(e) => onFormUpdate("titleen", e.target.value)}
            placeholder="title en"
          />
        </Label>
        <Label>
          <Input onChange={(e) => onFormUpdate("link",e.target.value)} placeholder="link" />
        </Label>
      </Form>
      <SubmitButton onClick={onSubmit} />
    </div>
  );
};

export default Index;
