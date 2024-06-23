"use client"

import Lottie from "lottie-react";
import bannerAnimation from "../../../public/reading_books.json"
import { TypeAnimation } from "react-type-animation";


const Banner = () => {
    return (
        <div className="">

            <div className="flex items-center justify-center gap-8 flex-col-reverse lg:flex-row">
                <div className="flex-1 space-y-5 p-5 lg:p-0">
                    <h1 className="font-bold text-3xl lg:text-5xl"><span className="">Unleash the Power of Seamless Document</span>
                        <br />
                        <TypeAnimation
                            sequence={[

                                'Transformation',
                                1000,
                                'PDF to Word',
                                1000,
                                'JPG to PDF',
                                1000,
                                'Word to PDF',
                                1000,
                                'More',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ display: 'inline-block', color: "#FF5800" }}
                            repeat={Infinity}
                        />
                    </h1>

                    <p>Introducing PDF Magic – your go-to for quick document transformations. Convert PDFs to Word, Word to PDF, JPG to PDF, or effortlessly extract images. Our user-friendly interface and powerful algorithms ensure a seamless experience. Say farewell to compatibility issues and embrace the simplicity of document conversion with PDF Magic!</p>
                    <button className="text-2xl font-bold p-3 border-2 border-black rounded-lg hover:bg-[#130c08] hover:text-white dark:border-white">Explore More!</button>
                </div>

                <div className="flex-1">
                    <Lottie animationData={bannerAnimation} loop={true} width={320} height={500} />
                </div>
            </div>

        </div>
    );
};

export default Banner;