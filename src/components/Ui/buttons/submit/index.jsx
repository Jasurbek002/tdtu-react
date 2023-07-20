import React from 'react';

const Index = ({style,...props}) => {
    return (
        <button className={`${style} py-2 px-5 h-10 bg-white rounded-md ml-auto mr-32 hover:opacity-75 my-10`} {...props}>
            Add +
        </button>
    );
}

export default Index;
