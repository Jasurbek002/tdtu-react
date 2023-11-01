import React, { useState } from "react";
import {
  Label,
  Textarea,
  Form,
  SubmitButton,
  Input,
  Select,
} from "../../../components/Ui";
import { images } from "../../../assets/index";
import { brmDetels } from "../../../constants/detels";
import { formData } from "../../../utils/FormData";
import { post } from "../../../store/actions/postServce";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { brm_select_type } from "../../../constants/detels/tips";

export default function CreateBrm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formDetels, setFormDetels] = useState(brmDetels);
  const onFormUpdate = (key, value) => {
    setFormDetels({
      ...formDetels,
      [key]: value,
    });
  };
  const onSubmit = () => {
    const formdata = formData(formDetels);
    dispatch(post({ pathname: "brm/create/data", data: formdata }));
    navigate("/brm");
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
          Brm / Create
        </h1>
      </div>
      <div className="w-10/12 flex items-center p-5 bg-white rounded-lg shadow-xl my-10">
        <div className="w-[250px] h-[200px] relative">
          <img
            src={
              !formDetels.newsImage == ""
                ? images.fileupload
                : formDetels.brm_image
            }
            className="border-2 border-blue rounded-xl"
            alt="upload"
          />
          <input
            onChange={(e) => onFormUpdate("brm_image", e.target.files[0])}
            className="w-full h-full absolute bg-blue top-0 cursor-pointer rounded-md opacity-0"
            type="file"
          />
        </div>
      </div>
      <Form styles={false}>
        <Label>
          <Input
            onChange={(e) => onFormUpdate("title_uz", e.target.value)}
            placeholder="title uz"
          />
        </Label>
        <Label>
          <Input
            onChange={(e) => onFormUpdate("title_en", e.target.value)}
            placeholder="title en"
          />
        </Label>
        <Label>
          <Textarea
            onChange={(e) => onFormUpdate("text_en", e.target.value)}
            placeholder="text en"
          />
        </Label>
        <Label>
          <Textarea
            onChange={(e) => onFormUpdate("text_en", e.target.value)}
            placeholder="text uz"
          />
        </Label>
        <Label>
          <Select
            tips={brm_select_type}
            onChange={(e) => onFormUpdate("category", e.target.value)}
          />
        </Label>
      </Form>
      <SubmitButton onClick={onSubmit} />
    </div>
  );
}
