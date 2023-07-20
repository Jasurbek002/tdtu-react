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

  return (
    <Wrapper>
      <NavigarBar link={"/economy"} title={"add economy"} />
      <Form styles={true}>
        <Label>
          <Textarea onChange={(e) => onFormUpdate("nameuz") } placeHolder="text uz" />
        </Label>
        <Label>
          <Textarea onChange={(e) => onFormUpdate("nameen") } placeHolder="text en" />
        </Label>
        <Label>
          <Textarea onChange={(e) => onFormUpdate("department") } placeHolder="department" />
        </Label>
        <SubmitButton onClick={onSubmit} />
      </Form>
    </Wrapper>
  );
}
