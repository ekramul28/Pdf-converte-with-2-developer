import React from 'react';

const Sign2Pdf = ({url}) => {
    return (
        <div className=" md:flex  h-[85vh] ">
            <div className="md:w-2/3  ">
            <h2 className='text-center mt-10 font-bold text-3xl'>Sign 2 Pdf</h2>
                <div className=" flex justify-center items-center h-[85vh] ">
                    <iframe  src={url}  className=" bg-cover h-[50vh] w-[40vh] "  ></iframe>
                </div>

            </div>
            <div className="md:w-1/3 border-x-2">
                <div className="  text-center ">
                    <button  className="btn mt-[70vh] bg-slate-800 text-white w-40 rounded-md  ">Sign 2 Pdf</button>
                </div>
            </div>
        </div>
    );
};

export default Sign2Pdf;