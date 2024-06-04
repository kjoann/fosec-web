import React from 'react';
import farmers from '../assets/farmers_image.png';
import customers from '../assets/customers_image.png';
import transportation from '../assets/vehicles_image.png';

const Services = () => {

    return (
        <div className='flex flex-col items-center mt-5 m-2 p-2'>
            <h1 className='text-xl font-semibold'>Our <span className='text-[#1A8500]'>Services</span></h1>
            <div className='flex border-[#E9E9E9] border-2 justify-between my-4 h-60 w-11/12 '>
                <img src={farmers} alt="Farmers" className='object-cover w-1/4 h-full' />
                <div className='w-[65%] my-2 mx-5' >
                    <h5 className='font-semibold my-1'>Our Farmers</h5>
                    <p className='text-[#363636] font-medium text-base my-6'>Our farmers benefit from personalized tips, real-time weather forecasts, and a secure platform for sharing their produce and negotiating prices.</p>
                    <p className='text-[#363636] font-medium text-base my-6'>We ensure our farmers have the knowledge and tools they need to enhance productivity and access broader markets.</p>
                </div>
            </div>
            <div className='flex border-[#E9E9E9] border-2 justify-between my-4 h-60 w-11/12 '>
                
            <div className='w-[65%] my-2 mx-5' >
                    <h5 className='font-semibold my-1'>Our Customers</h5>
                    <p className='text-[#363636] font-medium text-base my-6'>Our customers enjoy access to fresh, high-quality produce from trusted farmers, with the assurance of secure and transparent transactions.</p>
                    <p className='text-[#363636] font-medium text-base my-6'>We facilitate direct communication with farmers, ensuring customers can confidently source their agricultural products.</p>
                </div>
                <img src={customers} alt="We take care of our customers" className='object-cover w-1/4 h-full' />
            </div>
            <div className='flex border-[#E9E9E9] border-2 justify-between my-4 h-60 w-11/12 '>
                <img src={transportation} alt="We transport your goods" className='object-cover w-1/4 h-full' />
                <div className='w-[65%] my-2 mx-5' >
                    <h5 className='font-semibold my-1'>Transportation</h5>
                    <h5 className='font-semibold my-2'>Linking lives connecting destinations</h5>
                    <p className='text-[#363636] font-medium text-base my-6'>Our transport services are secured with cryptographic seals to ensure the integrity and authenticity of agricultural products during transit.</p>
                    <p className='text-[#363636] font-medium text-base my-6'>We provide a reliable logistics solution, connecting farmers and customers through a transparent and secure supply chain.</p>
                </div>
            </div>
        </div>
    );
}
export default Services;
