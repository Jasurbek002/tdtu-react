import React from 'react';

const Index = ({children}) => {
    return (
        <div className='flex w-full p-5 rounded-xl flex-wrap justify-evenly bg-blue'>
            {
                children
            }
    
        </div>
    );
}

export default Index;