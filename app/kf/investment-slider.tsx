"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';

const data = [
    {
        name: "Palm Jumeirah",
        image: "/du/invest-1.png"
    },
    {
        name: "Dubai Island",
        image: "/du/invest-2.png"
    },
    {
        name: "Emirates Hills",
        image: "/du/invest-3.png"
    },
    {
        name: "",
        image: "/du/invest-1.png"
    },
]
const InvestmentSlider = () => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={3.3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {data.map((_, index) => (
                <SwiperSlide key={index}>
                    <div className="text-center relative h-[150px] sm:h-[250px] lg:h-[300px] xl:h-[400px] rounded-md overflow-hidden">

                        {/* overlay  */}
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 z-10 md:hidden"></div>
                        <Image
                            src={_.image}
                            alt={_.name}
                            fill
                            className=" shadow-md object-cover"
                        />
                        <div className="absolute bottom-0 w-full left-0 right-0  z-20">
                            <div className="py-4 mx-auto">
                                <h3 className="text-xs ">
                                    Exclusive investment properties in
                                </h3>
                                <p className="text-xl md:text-3xl text-white">{_.name}</p>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
            ))}

        </Swiper>
    )
}

export default InvestmentSlider;