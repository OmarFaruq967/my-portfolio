import React from 'react';

const ContactInfo = () => {
    return (
        <div>
           <div>
            <h2 className=' text-4xl font-extrabold'>Have unique needs or need a quote or consultation?</h2>
            <p className='text-base font-semibold my-5'>Whether you need to schedule a regular consultation service or quote for your website. our support rep is available to assist you in choosing the best package for you</p>
            </div> 
            <h2 className='text-2xl font-extrabold mb-5'>Contact me</h2>
            <div className=' md:flex justify-between'>
                <div className='h-[90px] bg-[#F6F9FA] px-5 py-5 mb-5 rounded-lg shadow-lg border-b-2 border-[#F9970E] hover:shadow-none '>
                    <h2 className='text-base font-extrabold'>Phone</h2>
                    <h2 className='text-base font-semibold mt-2 '>+88 01840 030303</h2>
                </div>
                <div className='h-[90px] bg-[#F6F9FA] px-8 py-5 rounded-lg shadow-lg border-b-2 border-[#F9970E] hover:shadow-none'>
                <h2 className='text-base font-extrabold'>Email</h2>
                <h2 className='text-base font-semibold mt-2'>omar.faruq9748@gmail.com</h2>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;