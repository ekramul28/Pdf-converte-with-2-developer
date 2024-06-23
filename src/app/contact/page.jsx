"use client"

import contactUs from "../../../public/contact_us.json"
import Lottie from "lottie-react";
import emailjs from "@emailjs/browser"
import { useRef, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import toast from "react-hot-toast";


const ContactUs = () => {
    const [loading, setLoading] = useState(false);
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm('service_nbmux6f', 'template_t3455i9', form.current, 'N7sCXhxC1NSQ36mKf')
            .then((result) => {
                console.log(result.text);
                if (result.text) {
                    toast.success("Your Message Has been sent", { duration: 5000 });
                    form.current.reset();
                }
            })
            .catch((error) => {
                console.log(error.text);
            })
            .finally(() => {
                setLoading(false);
            });


    };
    return (
        <div>
            <h1 className="text-3xl lg:text-5xl text-center font-bold mt-12">Contact Us</h1>

            <div className="mt-12 flex gap-12 items-center justify-center flex-col lg:flex-row">
                <div className="flex-1 p-5 lg:p-0 ">
                    <Lottie animationData={contactUs} loop={true} width={320} height={400} />

                </div>
                <div className="my-4 mx-auto max-w-xl font-[sans-serif] flex-1 p-5 lg:p-0">
                    <form className="mt-0 lg:mt-8 space-y-4" id="contactForm" ref={form} onSubmit={sendEmail}>
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#FC440C]"
                            name="user_name"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#FC440C]"
                            name="user_email"
                            required
                        />

                        <textarea
                            placeholder="Message"
                            rows={6}
                            className="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-[#FC440C]"
                            defaultValue={""}
                            name="message"
                            required
                        />
                        {loading ? <button
                            type="button"
                            className="text-white bg-[#FC440C] font-semibold rounded-md text-xl px-4 py-3 w-full"
                        >
                            <ImSpinner9 className="animate-spin w-full mx-auto"></ImSpinner9>
                        </button> : <input type="submit" value="Send" className="text-white bg-[#FC440C] hover:bg-[#fc0c0c] font-semibold rounded-md text-sm px-4 py-3 w-full" />}
                    </form>
                </div>

            </div>



        </div>
    );
};

export default ContactUs;