import React from 'react';

const Index = ({children}) => {
    return (
        <label className='text-white text-xl font-medium text-start mt-5' htmlFor="title">
            {children}
        </label>
    );
}

export default Index;
