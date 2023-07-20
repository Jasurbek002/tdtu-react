import React, { useEffect, useState } from 'react';
import { Label, Textarea, Form, SubmitButton } from '../../Ui';
import { images } from '../../../assets/index';
import { newsdetels } from '../../../constants/detels';
import { formData } from '../../../utils/FormData';
import { post } from '../../../store/actions/postServce';
import { getOne } from '../../../store/actions/oneNews';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const Index = () => {
    const dispatch = useDispatch()
    const [formDetels, setFormDetels] = useState(newsdetels)
    const { data } = useSelector(state => state.oneNews)
    const { id } = useParams()
    console.log(data)
    useEffect(() => {
        if (id) {
            dispatch(getOne(id))
        }
    }, [dispatch])
    const onFormUpdate = (key, value) => {
        setFormDetels({
            ...formDetels,
            [key]: value
        })
    }

    const onSubmit = () => {
        const formdata = formData(formDetels)
        dispatch(post({ pathname: 'news/add', data: formdata }))
        window.location.replace('/news')
    }

    const back = () => {
        window.location.replace('/news')
    }

    return (
        <div className='w-full flex items-center flex-col bg-blue py-10'>
            <div className='flex w-10/12 justify-between'>
                <button onClick={back} className='bg-white text-grenn py-1 px-4 rounded-sm' > back</button>
                <h1 className='text-white text-2xl font-bold uppercase'>for news edit</h1>
            </div>
            <div className='w-10/12 flex items-center p-5 bg-white rounded-lg shadow-xl my-10'>
                <div className='w-[250px] h-[200px] relative'>
                    <img src={images.fileupload} className='border-2 border-blue rounded-xl' alt="upload" />
                    <input
                        onChange={(e) => onFormUpdate("newsImg", e.target.files[0])}
                        className='w-full h-full absolute bg-blue top-0 cursor-pointer rounded-md opacity-0' type="file" />
                </div>
            </div>
            <Form>
                <Label>
                    <Textarea
                        onChange={(e) => onFormUpdate("titleuz", e.target.value)}
                        placeholder={data?.title_uz}
                    />
                </Label>
                <Label>
                    <Textarea
                        onChange={(e) => onFormUpdate("titleen", e.target.value)}
                        placeholder={data?.title_en}/>
                </Label>
                <Label>
                    <Textarea
                        onChange={(e) => onFormUpdate("textuz", e.target.value)}
                        placeholder={data?.text_uz}/>
                </Label>
                <Label>
                    <Textarea
                        onChange={(e) => onFormUpdate("texten", e.target.value)}
                        placeholder={data?.text_en} />
                </Label>
            </Form>
            <SubmitButton onClick={onSubmit} />
        </div>
    );
}

export default Index;
