import React from 'react';

const Index = ({...props}) => {
    return (
      <input
      className='w-[400px] h-[50px] my-5 mr-10 bg-blue outline-none border-2 rounded p-1 border-white'
      {...props} />
    );
}

export default Index;
