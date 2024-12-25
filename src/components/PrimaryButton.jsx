import React from 'react';

const buttonTypes = {
    big: {
        bgColor: 'bg-[#658c4a]',
        textColor: 'text-white',
        buttonStyles: 'px-6 py-3 text-xl leading-7',
        hoverBgColor: 'hover:bg-[#e6cec0]',
        hoverTextColor: 'hover:text-[#658c4a]',
    },
    small: {
        bgColor: 'bg-[#333333]',
        textColor: 'text-white',
        buttonStyles: 'px-4 py-2 text-sm leading-tight',
        hoverBgColor: 'hover:bg-[#658c4a]',
        hoverTextColor: 'hover:text-white',
    },
};

const PrimaryButton = ({
    type = 'big',
    className = '',
    disabled = false,
    children,
    ...props
}) => {

    const { buttonStyles, bgColor, textColor, hoverBgColor, hoverTextColor } = buttonTypes[type] || buttonTypes.big;

    return (
        <button
            {...props}
            className={`rounded-[40px] justify-center items-center inline-flex text-center font-semibold font-inter ${buttonStyles} ${bgColor} ${textColor} ${hoverBgColor} ${hoverTextColor} ${disabled && 'opacity-25'
                } ${className} transition transform active:scale-75 duration-500`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;
