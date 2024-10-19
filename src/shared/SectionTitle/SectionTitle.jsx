import React from 'react';

const SectionTitle = ({subtitle, Title}) => {
    return (
        <div className='w-[400px] mx-auto text-center'>
            <p className='italic text-yellow-700'>--{subtitle}--</p>
            <div className='divider'></div>
            <h3 className='uppercase text-[40px]'>{Title}</h3>
            <div className='divider'></div>
        </div>
    );
};

export default SectionTitle;