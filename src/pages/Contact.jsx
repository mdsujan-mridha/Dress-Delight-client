import React from 'react';

const Contact = () => {
    return (
        <div className=''>
            <div>
                <img src="https://i.ibb.co/r2j6qhy/unsplash-Bjh-Uu6-Bp-UZA.jpg" alt="" className='w-full' />
                <h1 className='text-3xl font-bold uppercase text-primary ml-12 mt-[-100px]'> Contact us </h1>
            </div>
            <div className='flex justify-between items-center gap-5 mt-[100px] px-12'>
                <div className=' w-4/6'>
                    <h1 className='pt-28 pb-10 text-3xl  lato-bold'>We would love to hear from you.</h1>
                    <p className='py-10 text-lg lato-regular'>If you have any query or any type of suggestion, you can contact us here. We would love to hear from you.</p>
                    <div>
                        <form>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <p className='text-lg lato-light py-5'> Name </p>
                                    <input
                                        type="text"
                                        className='w-96 h-14 border-2 p-5 outline-none'
                                    />
                                </div>
                                <div>
                                    <p className='text-lg lato-light py-5'> Email </p>
                                    <input
                                        type="email"
                                        className='w-96 h-14 border-2 p-5 outline-none'
                                    />
                                </div>
                            </div>
                            <div>
                                <p className='text-lg lato-light py-5'> Message </p>
                                <input
                                    type="text"
                                    className='w-full h-44 border-2 outline-none p-2'
                                />
                            </div>
                            <div className='pt-10'>
                                <input
                                    type="submit"
                                    value="send message"
                                    className='w-56 h-14 text-primary lato-regular cursor-pointer'
                                    style={{ backgroundColor: "#024E82" }}
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-2/6 flex flex-col  gap-10 pl-10'>
                    
                    <div>
                        <h1 className='lato-regular text-2xl text-start'> Get In Touch </h1>
                        <p className='text-lg lato-regular py-2'>You can get in touch with us on this provided email</p>
                        <p className='text-lg lato-regular py-2'> rony@gmail.com </p>
                    </div>
                    <div>
                        <h1 className='lato-regular text-2xl text-start'> Visit Us </h1>
                        <p className='text-lg lato-regular py-2'>Green Road,Kahalbagan,Dhaka,Bangladesh</p>
                        <p className='text-lg lato-regular py-2'> Phone: +8801615951638 </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;