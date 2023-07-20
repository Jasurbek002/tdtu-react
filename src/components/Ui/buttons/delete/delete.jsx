import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
const Delete = ({...props}) => {
    return (
        <button
         className='cursor-pointer bg-grenn ml-3 p-2 rounded-full hover:bg-gray border-none duration-150 ease-linear transform'
         {...props}>
            <AiOutlineDelete color='white' size={30} />
        </button>
    );
}

export default Delete;
