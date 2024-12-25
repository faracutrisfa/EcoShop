import React from 'react'
import PrimaryButton from '../PrimaryButton';
import heroImage from "../../assets/HomePage/hero_image.webp"

const Hero = () => {
    const handleClick = () => {
        alert("Button clicked!");
    };

    return (
        <section className='px-4 lg:px-16 flex justify-between'>
            <div className='space-y-6 text-center lg:text-start pl-16 py-20'>
                <h1 className='text-grey-600 font-bold text-4xl lg:text-5xl font-libre'>Healthy cutlery,  healthy body</h1>
                <p className='text-grey-500 text-sm lg:text-xl font-inter leading-7'>
                    Upgrade your dining experience and <br/>
                    begin your path to a healthy you right now.
                </p>
                <PrimaryButton onClick={handleClick}>Learn More</PrimaryButton>
            </div>
            <div>
                <img src={heroImage} alt="image" className='w-[720px]' />
            </div>
        </section>
    )
}

export default Hero
