import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';

const Edit = ({...props}) => {
    return (
        <button
        className='cursor-pointer bg-grenn bg-white ml-3 my-1 p-2 rounded-full hover:bg-gray border-none duration-150 ease-linear transform'
        {...props}>
            <AiOutlineEdit color='white' size={30} />
       </button>
    );
}

export default Edit;
