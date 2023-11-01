import React from 'react';

const Index = ({...props}) => {
    return (
      <input
      className='w-[520px] h-[60px] my-5  bg-blue outline-none border-2 rounded p-1 border-white'
      {...props} />
    );
}

export default Index;
