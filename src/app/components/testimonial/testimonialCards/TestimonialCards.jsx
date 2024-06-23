"use client"

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import Image from 'next/image';

const TestimonialCards = ({ testimonial }) => {
    const { user_name, comment, img, rating, profession } = testimonial
    // console.log(testimonial);
    return (
        <div className='space-y-6 px-12 py-5 border-2 border-[#F3F3F3] round'>
            <div className='flex justify-between items-center flex-col lg:flex-row'>
                <div className='flex item-center gap-5'>
                    <div className=''>
                        <Image className='h-14 w-14 rounded-full' src={img} width={320} height={400} alt="image" />
                 </div>
                    <div>
                        <p className='text-[#444] text-xl font-bold'>{user_name}</p>
                        <p className='text-[#737373]'>{profession}</p>
                    </div>
                </div>
                <div>
                    <Image width={56} height={56} src="https://www.svgrepo.com/show/36166/left-quote.svg" alt="" />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='text-[#737373] h-[290px] lg:h-[150px] mb-5'>{comment}</p>
                <p><Rating style={{ maxWidth: 100 }} readOnly halfFillMode='svg' value={rating} /></p>
                
            </div>
        </div>
    );
};

export default TestimonialCards;