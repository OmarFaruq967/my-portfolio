import React from 'react';
import headingBar from "../../../public/Images/Icons/title-br.webp"

const Heading = ({title}) => {
    return (
        <div className='my-10'>
        <h1 className="text-4xl font-extrabold text-center">{title} </h1>
        <img className='flex mx-auto mt-4' src={headingBar} alt="" />
        </div>
    );
};

export default Heading;