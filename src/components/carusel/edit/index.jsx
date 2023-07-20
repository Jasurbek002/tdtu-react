import React, { useRef, useState } from 'react';
import styles from './edit.module.scss'
import { images } from '../../../assets/index';
import { SubmitButton } from '../../Ui';

// carusel add post 
const Addslide = () => {
    const [url, setUrl] = useState(images.fileupload)

    const setData = async () => {
       
            const formData = new FormData();
            window.location.replace('/carusel')
        
    }

    const back = () => {
        window.history.back()
    }

    return (
        <div className={styles.silide}>
            <div className='flex w-full justify-around'>
                <button className='bg-white text-grenn py-1 px-4 rounded-sm' onClick={back}> back</button>
                <h1 className='text-white text-2xl font-bold text-grenn uppercase'>for bunner edit</h1>
            </div>
            <div className={styles.silide__addfile}>
                <p className='text-white'>Bunner Image</p>
                <input accept="image/*"  type="file" />
                <img src={images.fileupload} alt="image" />
            </div>
            <form action="#" className={styles.silide__form}>
                <label htmlFor="titleuz">
                    title uz: <br />
                    <textarea
                        placeholder='Title uz'
                        name="titleuz" id="1" cols="45" rows="10">
                    </textarea>
                </label>
                <label htmlFor="titleen">
                    title en: <br />
                    <textarea
                        placeholder='Title en'
                        name="titleuz" id="1" cols="45" rows="10">
                    </textarea>
                </label>
                <label htmlFor="textuz">
                    text uz: <br />
                    <textarea
                        placeholder='Text uz'
                        name="textuz" id="1" cols="45" rows="10">
                    </textarea>
                </label>
                <label htmlFor="texten">
                    text en: <br />
                    <textarea
                        required
                        placeholder='Text en'
                        name="titleuz" id="1" cols="45" rows="10">
                    </textarea>
                </label>
            </form>
            <SubmitButton
                onClick={setData}
                className='buttons'
            />
        </div>
    );
}

export default Addslide;
