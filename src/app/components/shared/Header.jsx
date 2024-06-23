"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/pdfLogo.png";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { CiDark } from "react-icons/ci";
import { MdSunny } from "react-icons/md";
import { useEffect, useState } from "react";
import avatar from "../../../../public/account_circle_FILL0_wght400_GRAD0_opsz24.svg"
const Header = () => {
  // const session = await getServerSession(options)
  const { data: session } = useSession();
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (theme == "light") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");

    }
  }, [theme])

  const handelClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLink = [
    {
      name: "Home",
      pathName: "/",
    },
    {
      name: "Services",
      pathName: "/services",
    },
    {
      name: "About",
      pathName: "/about",
    },
    {
      name: "Contact",
      pathName: "/contact",
    },
  ];
  return (
    <div className="dark:bg-black dark:text-white bg-base-100 shadow-xl z-50 sticky top-0 h-15">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink.map((nav) => (
                <Link key={nav.name} href={nav.pathName}>
                  <li className="dark:bg-black">
                    <button className="text-xl font-bold">{nav.name}</button>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost text-xl">
            <Image height={75} width={75} src={logo} alt="logo"></Image>
            <p className="font-bold">PDFmagic</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            {navLink.map((nav) => (
              <Link
                key={nav.name}
                href={nav.pathName}
                className={({ isActive }) =>
                  isActive ? " bg-black text-white font-semibold" : "  "
                }
              >
                <li>
                  <p className="text-lg font-semibold">{nav.name}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="navbar-end">

          <div className="text-3xl dark:text-white hover:cursor-pointer px-3">
            {
              theme === "dark"
                ? <CiDark className="hover:bg-slate-400 hover:rounded-full" onClick={handelClick}></CiDark>
                : <MdSunny className="hover:bg-slate-400 hover:rounded-full" onClick={handelClick}></MdSunny>
            }
          </div>
          
          {session ? (
            // 
            <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full dark:bg-white">
          <Image height={75} width={75} alt="avatar" src={avatar} >
            
          </Image>
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content gap-2 font-semibold mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li className="dark:bg-black">
          <a className="justify-between">
            Profile
          </a>
        </li>
        <li className="dark:bg-black"><Link href="/dashboard">Dashboard</Link></li>
        <li className="dark:bg-black"><Link className="" href="/api/auth/signout?callbackUrl=/">LogOut</Link></li>
      </ul>
    </div>
          ) : (
            <Link className="btn  text-white  bg-slate-800 dark:text-white border-none rounded-full" href="/api/auth/signin">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
