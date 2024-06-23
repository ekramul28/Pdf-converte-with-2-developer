"use client"

import CountUp from 'react-countup';


const ServiceCount = () => {
    return (
        <div className="flex flex-col md:flex-row my-20 m-2 text-2xl font-bold justify-center gap-12">
            <div>Over <span className='text-customOrange'><CountUp end={10}/></span> + Service Provided</div>
            <div>Join <span className='text-customOrange'><CountUp end={5000}/></span> + Satisfied Customer</div>
            <div>Beyond <span className='text-customOrange'><CountUp end={15000}/></span> + Successful Transactions</div>
        </div>
    );
};

export default ServiceCount;