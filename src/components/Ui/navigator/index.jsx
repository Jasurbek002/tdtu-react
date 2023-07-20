import React from 'react';
import { useNavigate } from 'react-router-dom';

const Index = ({link,title}) => {
    const navigate = useNavigate()
    const back = () =>{
       navigate(link)
    }
    return (
        <div className='w-11/12 h-20 my-20 flex items-center justify-between px-5 bg-white rounded-2xl shadow-2xl'>
            <button 
            onClick={back}
            className='bg-grenn text-white py-1 px-4 rounded-sm'>
              back
            </button>
            <h1 className='text-grenn text-2xl font-bold uppercase'>{title}</h1>
        </div>
    );
}

export default Index;
