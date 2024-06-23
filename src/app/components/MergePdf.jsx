import useAxiosPubic from '@/hooks/useAxiosPubic';
import axios from 'axios';
import Image from 'next/image';
import React from 'react';

const MergePdf = ({ File, url }) => {
    const fromData = new FormData();
    fromData.append("file", File)
    const axiosPubic = useAxiosPubic()
    try {
        axiosPubic.post('/mergerFile', fromData, {
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then(res => {
                console.log(res.data)
            })
    } catch (error) {
        console.log(error)
    }



    return (
        <div className=" md:flex  h-[85vh] ">
            <div className="md:w-2/3  ">
                <h2 className='text-center mt-10 font-bold text-3xl'>Merge Pdf</h2>
                <div className="  justify-center items-center h-[85vh] ">

                    {/* <iframe src={man[0]} className=" bg-cover h-[50vh] w-[40vh] "  ></iframe> */}
                    {/* <iframe src={man[2]} className=" bg-cover h-[50vh] w-[40vh] "  ></iframe> */}
                    {/* <Image width={100} height={100} src={url} alt='UploadedJpg image for conversion' className=" bg-cover h-[50vh] w-[40vh] "  ></Image> */}

                </div>

            </div>
            <div className="md:w-1/3 border-x-2">
                <div className="  text-center ">
                    <button className="btn mt-[70vh] bg-slate-800 text-white w-40 rounded-md  ">Merge </button>
                </div>
            </div>
        </div>
    );
};

export default MergePdf;