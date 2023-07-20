import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom"
import {
    Form,
    Label,
    NavigarBar,
    Select,
    SubmitButton,
    Wrapper,
 Input
} from '../../../components/Ui';
import { doctarantDetels } from '../../../constants/detels';
import { types } from '../../../constants/detels/tips';
import { post } from '../../../store/actions/postServce'
const Index = () => {
    const [detels, setDetels] = useState(doctarantDetels)
    const dispatch = useDispatch()
    const navigate  = useNavigate()
    const onFormAdd = (key, value) => {
        setDetels({
            ...detels, [key]: value
        })
    }

   
        const onHenlerSubmit = () => {
            if (detels.fullname !== "" &&
            detels.special !== "" &&
            detels.job !== "" &&
            detels.type !== ""){
                dispatch(post({ pathname: '/doctorate/add', data: detels }))
                navigate('/doctarant')
                
            }else{
                console.log('malumotlarni toldir')
            }
          
        }
    

    return (
        <Fragment>
            <Wrapper>
                <NavigarBar link={'/doctarant'} title={"Add doctarants"} />
                <Form styles={'flex-col w-[600px]'}>
                    <Label>
                        <Input
                            onChange={(e) => onFormAdd("fullname", e.target.value)}
                            placeholder='Ism familya' />
                    </Label>
                    <Label>
                        <Input
                            onChange={(e) => onFormAdd("special", e.target.value)}
                            placeholder='Ixtisoslik' />
                    </Label>
                    <Label>
                        <Input
                            onChange={(e) => onFormAdd("job", e.target.value)}
                            placeholder='Ish joyi' />
                    </Label>
                    <Label>
                        <Select
                            tips={types}
                            onChange={(e) => onFormAdd("type", e.target.value)}
                        />
                    </Label>
                    <SubmitButton onClick={onHenlerSubmit} />
                </Form>
            </Wrapper>
        </Fragment>
    );
}

export default Index;
