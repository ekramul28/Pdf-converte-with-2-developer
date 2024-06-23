import React from 'react';
import DashNav from '../components/ui/dashboard/DashNav/DashNav';
import Sidebar from '../components/ui/dashboard/Sidebar/Sidebar';

const DashboardLayout = ({children}) => {
    return (
        <div className='grid max-w-7xl min-h-screen mx-auto sticky grid-cols-5 text-white '>
            {/* container */}
            <div className='col-span-1 bg-[#182237]' >
                {/* menu */}
            <Sidebar />
            </div>
            <div className='content dark:text-white col-span-4'>
                <DashNav />
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;