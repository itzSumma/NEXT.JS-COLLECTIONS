import React from 'react';

const LoadingPage = () => {
    return (
        <div className='flex h-[85vh] items-center justify-center'>
            <h3>Global Loading</h3>
            <span className="loading loading-dots loading-xl"></span>
        </div>
    );
};

export default LoadingPage;
