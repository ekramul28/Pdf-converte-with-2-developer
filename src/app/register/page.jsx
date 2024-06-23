"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import Swal from "sweetalert2";

const Register = () => {
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
    const res = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    // signIn("credentials")
    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    }
    await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      callbackUrl: "/", // Redirect to home page after sign-in
    });
    await Swal.fire({
      position: "top-center",
      icon: "success",
      title: "User Registered",
      showConfirmButton: false,
      timer: 1500,
    });

    // else {
    //   router.refresh();
    //   router.push("/");
    // }
  };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content  flex-col w-80 md:w-[400px]  lg:w-[900px]">
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 w-full   ">
          <h1 className="text-5xl font-bold my-6 ">Register</h1>

          <form onSubmit={handleSubmit} className="card-body ">
            <div className="lg:flex justify-between gap-3">
              <div className="lg:w-1/2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text dark:text-white">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    required={true}
                    className="input  input-bordered rounded-none"
                    value={formData.name}
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
              </div>
              <div className="lg:w-1/2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text dark:text-white">Email</span>
                  </label>
                  <input
                    type="text"
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
                    <span className="label-text dark:text-white">imgUrl</span>
                  </label>
                  <input
                    type="file"
                    placeholder="imgUrl"
                    name="imgUrl"
                    className="file-input  input-bordered rounded-none "
                  />
                </div>
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn  text-white  bg-slate-800 dark:text-white border-none rounded-none">
                Register
              </button>
              <div className="mt-3">
                <p className="text-xl dark:text-white">
                  you have Account please
                  <Link href="/login" className=" text-2xl ml-3 text-sky-500">
                    login
                  </Link>
                </p>
              </div>
              <div className="text-center">
                <p className="text-red-500">{errorMessage}</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
