import React, { useState } from 'react';
import { HiOutlineArrowRight } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";
import Logo from "../assets/Logo.webp";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = ["NEW!", "Clothing", "Bath", "Bedding", "Home Goods", "Furniture", "Footwear", "Accessories"];
    const iconClass = 'text-[#666666] text-2xl lg:text-4xl';

    const SearchBar = ({ hiddenOnLarge = false }) => (
        <div
            className={`lg:w-2/3 h-10 px-4 py-2 rounded-[40px] border border-[#cccccc] flex items-center gap-2 ${hiddenOnLarge ? 'lg:hidden' : 'hidden lg:flex'
                }`}
        >
            <IoSearch size={20} color="#999999" />
            <input
                type="text"
                className="grow text-grey-400 text-base bg-transparent outline-none"
                placeholder="Search here..."
            />
        </div>
    );

    return (
        <section className="font-inter">
            <div className="flex items-center gap-2 py-4 justify-center bg-gradient-to-r from-primary to-primaryLight font-semibold text-xs lg:text-base text-white">
                Free Shipping with minimum purchase Rp250.000
                <HiOutlineArrowRight />
            </div>

            <div className="px-4 lg:px-16 py-4 flex items-center justify-between">
                <img src={Logo} alt="Logo" className="w-16 lg:w-24" />
                <SearchBar />
                <ul className="flex items-center gap-2 lg:gap-4">
                    <CgProfile className={iconClass} />
                    <RiShoppingBag4Line className={iconClass} />
                </ul>
            </div>

            <div className="px-4 lg:hidden lg:px-16 py-4 flex items-center justify-between">
                <SearchBar hiddenOnLarge />
                <div>
                    {isMenuOpen ? (
                        <IoClose className={iconClass} onClick={() => setIsMenuOpen(false)} />
                    ) : (
                        <IoMenu className={iconClass} onClick={() => setIsMenuOpen(true)} />
                    )}
                </div>
            </div>

            <div className="border-t-2 border-primary lg:hidden" />

            <ul
                id="menu"
                className={`lg:flex justify-center lg:py-4 lg:gap-2 text-grey-600 ${isMenuOpen ? 'flex flex-col' : 'hidden'
                    }`}
            >
                {navItems.map((item, index) => (
                    <li key={index} className="px-4 py-2 font-semibold">
                        {item}
                    </li>
                ))}
            </ul>

            <div className="border-t-2 border-primary hidden lg:block" />
        </section>
    );
};

export default Navbar;