import React from 'react';

const Index = ({...props}) => {
    return (
        <textarea className='p-5 outline-none border-2 border-white rounded-lg bg-blue m-1 mt-5 text-white' {...props} cols="40" rows="4"> 
        
        </textarea>
    );
}

export default Index;
