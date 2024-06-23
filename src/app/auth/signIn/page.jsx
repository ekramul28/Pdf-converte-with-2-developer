"use client";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";

const LoginPage = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        callbackUrl: "/", // Redirect to home page after sign-in
      });
      await Swal.fire({
        position: "top-center",
        icon: "success",
        title: "User Logged in Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      setErrorMessage(error)
    }

    // else {
    //   router.refresh();
    //   router.push("/");
    // }
  };
  const handleGoogleLogin = async () => {
    await signIn("google", {
      callbackUrl: "/",
    });
    await Swal.fire({
      position: "top-center",
      icon: "success",
      title: "User Logged in Successfully",
      showConfirmButton: false,
      timer: 1500,
    })
  };
  const handleGithubLogin = async () => {
    await signIn("github", {
      callbackUrl: "/",
    });
    await Swal.fire({
      position: "top-center",
      icon: "success",
      title: "User Logged in Successfully",
      showConfirmButton: false,
      timer: 1500,
    })
  };
  return (
    <div className="hero  min-h-screen  ">
      <div className="max-w-7xl mx-auto  md:flex justify-center">
        <div className="hidden md:block">
          <Image
            src="https://i.ibb.co/8jFYK8c/Lovepik-com-450092341-Flat-illustration-of-secure-login-in-editable-design-removebg-preview.png"
            alt="img"
            height={500}
            width={600}
          />
        </div>
        <div className="hero-content flex-col ">
          <div className=" rounded-none flex-shrink-0 w-full    ">
            <form
              onSubmit={handleSubmit}
              className="card-body w-80 md:w-[400px]  lg:w-[500px]"
            >
              <h1 className="text-5xl font-bold">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  required={true}
                  className="input  input-bordered rounded-none"
                  value={formData.email}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  required={true}
                  className="input  input-bordered rounded-none"
                  value={formData.password}
                />
              </div>

              <div className="form-control ">
                <button className="btn  text-white  bg-slate-800 dark:text-white border-none rounded-none">
                  Login
                </button>
                <div className="mt-3">
                  <p>
                    You do not have an Account Please
                    <Link href="/register" className="text-sky-500 text-2xl">
                      Register
                    </Link>
                  </p>
                </div>
                <div className="text-center">
                  {/* <h1 className="text-red-500">{error}</h1> */}
                </div>
                <div className="divider">OR</div>
                <div
                  onClick={handleGoogleLogin}
                  className=" border-2 border-black p-4 rounded-xl mt-5 dark:border-white"
                >
                  <p className="flex hover:cursor-pointer justify-center items-center gap-3 text-xl font-semibold ">
                    <FaGoogle /> Continue With Google
                  </p>
                </div>
                <div
                  onClick={handleGithubLogin}
                  className=" border-2 border-black p-4 rounded-xl mt-5 dark:border-white"
                >
                  <p className="flex hover:cursor-pointer justify-center items-center gap-3 text-xl font-semibold  ">
                    <FaGithub /> Continue With Github
                  </p>
                  {errorMessage}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
