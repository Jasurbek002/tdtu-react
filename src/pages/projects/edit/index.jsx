import React, { useState ,useEffect} from "react";
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
import { useDispatch ,useSelector} from "react-redux";
import { get } from "../../../store/actions/getServce";
import { useParams } from "react-router-dom";

const Index = () => {
    const dispatch = useDispatch();
    const [formDetels, setFormDetels] = useState(projectDetels);
    const {id} = useParams()
    useEffect(() =>{
        dispatch(get('/loyha'))
  },[dispatch])
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
        dispatch(get('/doctorate'));
        window.location.replace("/loyha");
      } else {
        console.log("malumotlarni kiriting");
      }
    };

    const data = useSelector(state => state.general.data.find(el => el.loyha_id === +id))
    
 console.log(data);
    return (
      <Wrapper>
        <NavigarBar link={"/projects"} title={"EDIT for project"} />
        <Form>
         <div className="flex items-center flex-col justify-between">
         <Textarea
            onChange={(e) => onFormAdd("themauz", e.target.value)}
            placeholder="Thema uz"
            value={data?.thema_uz}
          />
  
          <Textarea
            onChange={(e) => onFormAdd("themaen", e.target.value)}
            placeholder="Thema en"
            value={data?.thema_en}
          />
  
          <Textarea
            onChange={(e) => onFormAdd("author", e.target.value)}
            placeholder="Author"
            value={data?.author_uz}
          />
         </div>
  
        <div className="flex flex-col items-start justify-evenly">
        <Label>
            deadline <br />
            <Input
              onChange={(e) => onFormAdd("dedline", e.target.value)}
              placeholder="Dedline"
              type="date"
              value={data?.dedline}
            />
          </Label>
          <Label>
            type <br />
            <Select
              tips={tips}
              onChange={(e) => onFormAdd("tip", e.target.value)}
              default={data?.tip}
            />
          </Label>
          <SubmitButton style={'w-full'} onClick={onHendlerSubmit} />
        </div>
        </Form>
      </Wrapper>
    );
  };
  
  export default Index;
  
