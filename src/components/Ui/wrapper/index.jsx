import React from 'react';

const Index = ({children}) => {
    return (
        <div className='flex w-full min-h-[100vh] p-5  flex-wrap justify-evenly bg-blue'>
            {
                children
            }
        </div>
    );
}

export default Index;
