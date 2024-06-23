"use client"
import React, { useState } from 'react';
import { writeXLSX, XLSX } from 'xlsx';

const Excel2Pdf = ({ file }) => {
    const formData = new FormData()
    formData.append("file", file)
    console.log(file)
    const res = fetch("/api/excel", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "content-type": "multiple/form-data" },

    });

    return (
        <div className=" md:flex  h-[85vh] ">
            <div className="md:w-2/3  ">
                <h2 className='text-center mt-10 font-bold text-3xl'>Excel To Pdf</h2>
                <div className=" flex justify-center items-center h-[85vh] ">
                    {/* <iframe src={url} className=" bg-cover h-[50vh] w-[40vh] "  ></iframe> */}
                </div>

            </div>
            <div className="md:w-1/3 border-x-2">
                <div className="  text-center ">
                    <button className="btn mt-[70vh] bg-slate-800 text-white w-40 rounded-md  ">Convert 2 PDF</button>
                </div>
            </div>
        </div>
    );
};

export default Excel2Pdf;