import React from 'react';

const Index = ({tips,...props}) => {
    return (
        <select  className='w-[200px] my-5 h-10 bg-blue border-2 outline-none px-5 border-white text-white rounded-md' {...props}>
            <option defaultChecked value="DEFAULT" disabled>Tanlang</option>
            {
                tips?.map((el,index) =>(
                    <option key={index} value={el.name} >{el.name}</option>
                ))
            }
        </select>
    );
}

export default Index;
