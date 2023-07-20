import React, { useState } from "react";
import { projectDetels } from "../../../constants/detels";
import {
  Form,
  Input,
  Label,
  NavigarBar,
  Select,
  SubmitButton,
  Textarea,
  Wrapper,
} from "../../../components/Ui";
import { tips } from "../../../constants/detels/tips";
import { useDispatch } from "react-redux";
import { post } from "../../../store/actions/postServce";

const Index = () => {
  const dispatch = useDispatch();
  const [formDetels, setFormDetels] = useState(projectDetels);

  const onFormAdd = (key, value) => {
    setFormDetels({ ...formDetels, [key]: value });
  };

  const onHendlerSubmit = () => {
    if (
      formDetels.author !== "" &&
      formDetels.themauz !== "" &&
      formDetels.themaen !== "" &&
      formDetels.dedline !== ""
    ) {
      console.log(formDetels)
      dispatch(post({ pathname: "/loyha/add", data: formDetels }));
      setTimeout(() =>{
      window.location.replace("/projects");
      },4000)
    } else {
      console.log("malumotlarni kiriting");
    }
  };

  return (
    <Wrapper>
      <NavigarBar link={"/projects"} title={"add for project"} />
      <Form>
       <div className="flex items-center flex-col justify-between">
       <Textarea
          onChange={(e) => onFormAdd("themauz", e.target.value)}
          placeholder="Thema uz"
        />

        <Textarea
          onChange={(e) => onFormAdd("themaen", e.target.value)}
          placeholder="Thema en"
        />

        <Textarea
          onChange={(e) => onFormAdd("author", e.target.value)}
          placeholder="Author"
        />
       </div>

      <div className="flex flex-col items-start justify-evenly">
      <Label>
          deadline <br />
          <Input
            onChange={(e) => onFormAdd("dedline", e.target.value)}
            placeholder="Dedline"
            type="date"
          />
        </Label>
        <Label>
          type <br />
          <Select
            tips={tips}
            onChange={(e) => onFormAdd("tip", e.target.value)}
          />
        </Label>
        <SubmitButton style={'w-full'} onClick={onHendlerSubmit} />
      </div>
      </Form>
    </Wrapper>
  );
};

export default Index;
