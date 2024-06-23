"use client"
import React from 'react';
import { MdDashboard, MdHelp, MdPeople, MdHome, MdSettings, MdMan, MdSupervisedUserCircle, MdAdminPanelSettings } from 'react-icons/md';
import MenuLink from './MenuLink/MenuLink';
import Image from 'next/image';
import profileImg from "../../../../../../public/account_circle_FILL0_wght400_GRAD0_opsz24.svg"
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';

const menuItems = [
    {
        title: "User",
        list: [
            {
                title: "Profile",
                path: "/dashboard/profile",
                icon: <FaUser />
            },
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdSettings />
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelp/>
            },
        ]
    },
    {
        title: "Pages",
        list: [
            {
                title: "Home",
                path: "/",
                icon: <MdHome />
            },
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />
            }
        ]
    },
    

]

const Sidebar = () => {
    const {data: session} = useSession()
    const pathName = usePathname()
    // console.log(pathName);
    return (
        <div className='sticky  mt-10 '>
            <div className='flex align-middle mb-3 gap-6'>
                <Image className='bg-white rounded-full'  src={profileImg} width={50} alt='Profile Avatar'></Image>
                <div className='flex flex-col'>
                <span className='text-xl font-semibold'>{session?.user.name}</span>
                <span>{session?.user.role === "Unverified email" ? "Registered User" : session?.user.role}</span>
                </div>
            </div>
                <ul>
                {session?.user.role === "Admin" && (
                    <>
                    <li>
                        <span className='text-3xl'>Admin</span>
                        <Link href="/dashboard/profile/admin" className={`flex  items-center ${pathName === "dashboard/admin" && "bg-[#2e374a]"} rounded-lg p-5 hover:bg-[#2e374a] text-white text-2xl`}> 
                            <FaUser />
                             Profile
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/admin" className={`flex items-center ${pathName === "dashboard/admin" && "bg-[#2e374a]"} rounded-lg p-5 hover:bg-[#2e374a] text-white text-2xl`}> 
                            <MdDashboard />
                             Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/users" className={`flex items-center ${pathName === "dashboard/users" && "bg-[#2e374a]"} rounded-lg p-5 hover:bg-[#2e374a] text-white text-2xl`}> 
                            <MdPeople />
                            Users
                        </Link>
                    </li>
                    </>
                )}
                {session?.user.role === "Admin" || menuItems.map(category => (
                    <li key={category.title}>
                        <span className='text-3xl'>{category.title}</span>
                        {category.list.map(item => (
                            <MenuLink item={item} key={item.title}/>
                        ))}
                    </li>
                   ))}

                <li className='flex items-center text-2xl pl-4 rounded-lg h-20 hover:bg-[#2e374a]'>
                    <Link className='flex' href={"/api/auth/signout?callbackUrl=/"}><span><FaSignOutAlt /></span> Log Out</Link>
                </li>
                    </ul>
        </div>
    );
};

export default Sidebar;