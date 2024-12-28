import React from 'react';
import WhyCard from '../WhyCard';
import { MdLocalShipping, MdEco } from 'react-icons/md';
import { FaSmile } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';

const Why = () => {
    return (
        <section aria-labelledby="why-us">
            <div className="px-4 lg:px-16 py-20 lg:py-40 space-y-20">
                <h1
                    id="why-us"
                    className="text-primary text-3xl lg:text-5xl font-bold font-libre text-center"
                >
                    Why Buy From Us?
                </h1>
                <div className="flex justify-center">
                    <div
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        <WhyCard
                            Icon={MdLocalShipping}
                            title="Free Shipping"
                            description="Shop now and enjoy free shipping on all orders."
                        />
                        <WhyCard
                            Icon={FaSmile}
                            title="Satisfaction Guaranteed"
                            description="Our satisfaction guarantee ensures quality products."
                        />
                        <WhyCard
                            Icon={MdEco}
                            title="Eco-Friendly Packaging"
                            description="Using eco-friendly materials, sustainable and biodegradable."
                        />
                        <WhyCard
                            Icon={RiCustomerService2Fill}
                            title="Fast Response"
                            description="24/7 fast and reliable assistance whenever you need it."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Why;
