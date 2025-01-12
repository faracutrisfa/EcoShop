import React from 'react';
import vector from "../../assets/vector.webp";
import background from "../../assets/background_quotes.webp";

const Quotes = () => {
    return (
        <div
            className="relative px-4 md:px-10 lg:px-16 py-[120px]"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-primary opacity-90"></div>

            <div className="relative z-10 text-center items-center flex flex-col space-y-20">
                <h1 className="text-xl lg:text-3xl font-bold font-libre text-white">
                    Shop guilt-free knowing that our eco-friendly e-commerce platform is committed to reducing environmental impact and promoting sustainable practices in every step of the shopping process
                </h1>
                <img src={vector} alt="vector" className="w-3/4 lg:w-2/5" />
            </div>
        </div>
    );
};

export default Quotes;