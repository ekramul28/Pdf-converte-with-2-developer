"use client"
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const DashNav = () => {
    const pathName = usePathname()
    return (
        <div className='text-black bg-[#182237] flex justify-between items-center'>
            <h2 className='p-4 text-white uppercase '>{pathName.split("/").pop()}</h2>
            <div className='flex items-center'>
                <input type="search" className='h-10 mr-3 p-4' name="" placeholder='Search here . . .' id="" />
                {/* <span className='relative'><FaSearch /></span> */}
            </div>
        </div>
    );
};

export default DashNav;