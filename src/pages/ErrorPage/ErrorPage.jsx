import React from 'react';

import errorImg from '../../assets/img/404.gif'

const ErrorPage = () => {
    return (
        <div className='container mx-auto'>
            <img className='w-full h-full' src={errorImg} alt="error page" />
        </div>
    );
};

export default ErrorPage;