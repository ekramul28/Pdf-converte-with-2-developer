"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import avatar from "../../../../public/account_circle_FILL0_wght400_GRAD0_opsz24.svg"
const ProfilePage = () => {
    const {data: session} = useSession()
    // console.log(session);
    return (
        <div className='text-black dark:text-white p-10 card shadow-xl w-11/12 mx-auto mt-10'>
        <div className=''>
            <h2 className='font-semibold text-3xl mb-3'>My Profile</h2>
            <div className='flex gap-7'>
            <Image className='dark:bg-white' width={100} height={80} alt='userAvatar' src={avatar}></Image>
            <div className='mt-2 '>
            <h1 className=' text-xl font-medium mb-3'>{session?.user.name}</h1>
            <div className='flex items-center gap-14'>
            <h1 className='mt-6 flex flex-col text-xl font-medium mb-3'><span>Role</span> <span>{session?.user.role === "Unverified email" ? "Registered User" : session?.user.role}</span></h1>
            <h1 className='flex mt-6 flex-col text-xl font-medium mb-3'><span>Email</span> <span>{session?.user.email}</span></h1>
            </div>
            </div>
            </div>
            
            
            </div>
    </div>
    );
};

export default ProfilePage;