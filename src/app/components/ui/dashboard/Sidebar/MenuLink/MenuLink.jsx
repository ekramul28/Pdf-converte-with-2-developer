"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({item}) => {
    const pathName = usePathname()
    // console.log(pathName);
    return (
        <Link href={item.path} className={`flex items-center ${pathName === item.path && "bg-[#2e374a]"} p-5 hover:bg-[#2e374a] text-white rounded-lg text-2xl`}>
            {item.icon}
            {item.title}
        </Link>
    );
};

export default MenuLink;