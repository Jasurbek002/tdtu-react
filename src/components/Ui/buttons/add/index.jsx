import React from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Index = ({title,link}) => {
    return (
        <div className='flex items-center w-full  justify-between'>
             <h1 className='text-white text-xl uppercase font-bold w-11/12 my-5'>{title}</h1>
             <Link className='cursor-pointer bg-grenn  ml-3 mb-1 p-2 rounded-full hover:bg-blue border-none duration-150 ease-linear transform' to={link}>
                <AiOutlineFileAdd color='white' size={40} />
             </Link>
        </div>
    );
}

export default Index;
