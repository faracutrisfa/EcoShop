import React from 'react';
import { HiOutlineArrowRight } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { RiShoppingBag4Line } from "react-icons/ri";
import Logo from "../assets/Logo.webp";
import PrimaryButton from './PrimaryButton';

const Navbar = () => {
    const handleClick = () => {
        alert("Button clicked!");
    };

    const navItems = [
        "NEW!", "Clothing", "Bath", "Bedding", "Home Goods",
        "Furniture", "Footwear", "Accessories"
    ];

    const iconClass = 'text-[#666666] text-2xl lg:text-4xl';

    return (
        <section className='font-inter'>
            <div className='flex items-center gap-2 py-4 justify-center bg-gradient-to-r from-primary to-primaryLight font-semibold text-xs lg:text-base text-white'>
                Free Shipping with minimum purchase Rp250.000
                <HiOutlineArrowRight />
            </div>

            <div className='px-4 lg:px-16 py-4 flex items-center justify-between'>
                <img src={Logo} alt="Logo" className='w-16 lg:w-24' />
                <ul className='flex items-center gap-2 lg:gap-4'>
                    <li>
                        <CgProfile className={iconClass} />
                    </li>
                    <li>
                        <RiShoppingBag4Line className={iconClass} />
                    </li>
                </ul>
            </div>

            <ul className='flex justify-center gap-2 py-4'>
                {navItems.map((item, index) => (
                    <li key={index} className='py-2 px-4 font-semibold'>
                        {item}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Navbar;