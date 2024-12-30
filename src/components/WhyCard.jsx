import React from 'react';

const WhyCard = ({ Icon, title, description, className = '' }) => {
    return (
        <div className={`space-y-4 font-inter ${className}`}>
            <div className="w-8 lg:w-10">
                {Icon && <Icon className="text-primary lg:text-grey-400 text-3xl lg:text-6xl" />}
            </div>
            <div>
                <h3 className="text-grey-600 text-sm lg:text-xl font-semibold leading-tight lg:leading-7">
                    {title}
                </h3>
                <p className="text-grey-500 text-sm lg:text-xl leading-tight lg:leading-7">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default WhyCard;
