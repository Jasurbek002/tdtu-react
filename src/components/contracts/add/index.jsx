import { useState } from "react";
import { useDispatch } from "react-redux";
import { post } from "../../../store/actions/postServce";
import { economyDetels } from "../../../constants/detels";
import {
  Form,
  Textarea,
  Label,
  Wrapper,
  NavigarBar,
  SubmitButton,
} from "../../Ui";

export default function AddContarcts() {
  const [formDetels, setFormDetels] = useState(economyDetels);
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(post({ pathname: "/economy/add", data: formDetels }));
    window.history.back();
  };

  const onFormUpdate = (key, value) => {
   
    setFormDetels({
      ...formDetels,
      [key]: value,
    });
  };
console.log(formDetels)
  return (
    <Wrapper>
      <NavigarBar link={"/economy"} title={"add economy"} />
      <Form styles={true}>
        <Label>
          <Textarea onChange={(e) => onFormUpdate("nameuz",e.target.value) } placeHolder="Muddat" />
        </Label>
        <Label>
          <Textarea onChange={(e) => onFormUpdate("nameen",e.target.value) } placeHolder="Mualif" />
        </Label>
        <Label>
          <Textarea onChange={(e) => onFormUpdate("department",e.target.value) } placeHolder="Mavzu" />
        </Label>
        <SubmitButton onClick={onSubmit} />
      </Form>
    </Wrapper>
  );
}
