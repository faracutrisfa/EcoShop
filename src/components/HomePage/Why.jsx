import React from 'react';
import WhyCard from '../WhyCard';
import { MdLocalShipping, MdEco } from 'react-icons/md';
import { FaSmile } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';

const Why = () => {
    const cards = [
        {
            Icon: MdLocalShipping,
            title: "Free Shipping",
            description: "Shop now and enjoy free shipping on all orders.",
        },
        {
            Icon: FaSmile,
            title: "Satisfaction Guaranteed",
            description: "Our satisfaction guarantee ensures quality products.",
        },
        {
            Icon: MdEco,
            title: "Eco-Friendly Packaging",
            description: "Using eco-friendly materials, sustainable and biodegradable.",
        },
        {
            Icon: RiCustomerService2Fill,
            title: "Fast Response",
            description: "24/7 fast and reliable assistance whenever you need it.",
        },
    ];

    return (
        <section aria-labelledby="why-us">
            <div className="px-4 md:px-10 lg:px-16 py-20 lg:py-40 space-y-6 lg:space-y-20">
                <div className="relative text-center">
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-[210%] -translate-y-[60%] w-16 lg:w-40 h-[22px] lg:h-14 origin-top-left rotate-[-15deg] bg-[#e6cec0] rounded-[40px]"
                    />
                    <h1
                        id="why-us"
                        className="relative z-10 text-grey-600 lg:text-primary text-xl lg:text-5xl font-bold font-libre"
                    >
                        Why Bought From Us?
                    </h1>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {cards.map(({ Icon, title, description }, index) => (
                        <WhyCard
                            key={index}
                            Icon={Icon}
                            title={title}
                            description={description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Why;