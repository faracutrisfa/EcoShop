import React from 'react';

const ProductCard = ({ image, title, price, discountPrice, className = '' }) => {
    return (
        <div className={`space-y-2 hover:scale-105 transition-transform duration-300 font-inter font-semibold ${className}`}>
            <img
                src={image}
                alt="image"
                className="w-40 h-40 lg:w-[312px] lg:h-[312px] object-cover rounded-lg"
            />
            <h3 className="text-grey-600 text-sm lg:text-xl leading-tight lg:leading-7 w-40 lg:w-[312px]">
                {title}
            </h3>
            <div>
                <p className="text-primary text-xs lg:text-base">{price}</p>
                {discountPrice && (
                    <p className="text-grey-400 text-xs lg:text-base line-through">
                        {discountPrice}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ProductCard;